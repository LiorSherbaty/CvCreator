import { useRef } from 'react';
import { Toolbar } from './components/Toolbar';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { Footer } from './components/Footer';
import { MobileWarning } from './components/MobileWarning';
import { useResumeStore } from './store';
import { renderTemplate } from './templateRenderer';
import { useMobileDetection } from './hooks/useMobileDetection';

function App() {
    const isMobile = useMobileDetection();
    const resume = useResumeStore((state) => state.resume);
    const importResume = useResumeStore((state) => state.importResume);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleExportJson = () => {
        const dataStr = JSON.stringify(resume, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `cv-${resume.basics.name.replace(/\s+/g, '-').toLowerCase() || 'resume'}.json`;
        link.click();
        URL.revokeObjectURL(url);
    };

    const handleImportJson = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target?.result as string);

                // Validate required fields
                if (!data.basics || typeof data.basics !== 'object') {
                    throw new Error('Missing required field: basics');
                }
                if (!data.meta || typeof data.meta !== 'object') {
                    throw new Error('Missing required field: meta');
                }
                if (!data.meta.templateName) {
                    throw new Error('Missing required field: meta.templateName');
                }

                // Ensure array fields exist
                data.work = Array.isArray(data.work) ? data.work : [];
                data.education = Array.isArray(data.education) ? data.education : [];
                data.skills = Array.isArray(data.skills) ? data.skills : [];
                data.volunteer = Array.isArray(data.volunteer) ? data.volunteer : [];
                data.languages = Array.isArray(data.languages) ? data.languages : [];
                data.interests = Array.isArray(data.interests) ? data.interests : [];
                data.certifications = Array.isArray(data.certifications) ? data.certifications : [];
                data.publications = Array.isArray(data.publications) ? data.publications : [];

                // Ensure basics.profiles is an array
                if (!Array.isArray(data.basics.profiles)) {
                    data.basics.profiles = [];
                }

                // Ensure meta.sectionOrder exists (backward compatibility)
                if (!Array.isArray(data.meta.sectionOrder)) {
                    data.meta.sectionOrder = ['basics', 'work', 'education', 'skills', 'volunteer', 'certifications', 'publications', 'languages', 'interests'];
                }

                importResume(data);
                alert('CV imported successfully!');
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Invalid JSON file';
                alert(`Error importing CV: ${message}`);
                console.error(error);
            }
        };
        reader.readAsText(file);

        // Reset input so the same file can be selected again
        e.target.value = '';
    };

    const handleExportHtml = () => {
        try {
            const html = renderTemplate(resume.meta.templateName, resume);
            const htmlBlob = new Blob([html], { type: 'text/html' });
            const url = URL.createObjectURL(htmlBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `cv-${resume.basics.name.replace(/\s+/g, '-').toLowerCase() || 'resume'}.html`;
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            alert('Error exporting HTML');
            console.error(error);
        }
    };

    const handleDownloadPdf = () => {
        // Get the preview iframe
        const iframe = document.querySelector('iframe');
        if (iframe?.contentWindow) {
            iframe.contentWindow.print();
        } else {
            alert('Preview not available. Please wait for the CV to render.');
        }
    };

    if (isMobile) {
        return <MobileWarning />;
    }

    return (
        <div className="h-screen flex flex-col">
            <Toolbar
                onExportJson={handleExportJson}
                onImportJson={handleImportJson}
                onExportHtml={handleExportHtml}
                onDownloadPdf={handleDownloadPdf}
            />

            <div className="flex-1 flex overflow-hidden">
                <div className="w-1/2 overflow-auto">
                    <Editor />
                </div>
                <div className="w-1/2 overflow-auto">
                    <Preview />
                </div>
            </div>

            <Footer />

            {/* Hidden file input for JSON import */}
            <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
            />
        </div>
    );
}

export default App;
