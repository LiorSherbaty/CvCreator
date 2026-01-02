import { useRef } from 'react';
import { Toolbar } from './components/Toolbar';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { Footer } from './components/Footer';
import { ResponsiveLayout } from './components/ResponsiveLayout';
import { ToastContainer, useToast } from './components/Toast';
import { useResumeStore } from './store';
import { renderTemplate } from './templateRenderer';
import { generateId } from './types';
import { DEFAULT_SECTION_ORDER } from './constants';

function App() {
    const resume = useResumeStore((state) => state.resume);
    const importResume = useResumeStore((state) => state.importResume);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { toasts, closeToast, success, error, info } = useToast();

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

                // Ensure array fields exist and add IDs if missing
                const ensureArrayWithIds = <T extends { id?: string }>(arr: unknown): T[] => {
                    if (!Array.isArray(arr)) return [];
                    return arr.map((item) => (item.id ? item : { ...item, id: generateId() }));
                };

                data.work = ensureArrayWithIds(data.work);
                data.education = ensureArrayWithIds(data.education);
                data.skills = ensureArrayWithIds(data.skills);
                data.volunteer = ensureArrayWithIds(data.volunteer);
                data.languages = ensureArrayWithIds(data.languages);
                data.interests = ensureArrayWithIds(data.interests);
                data.certifications = ensureArrayWithIds(data.certifications);
                data.publications = ensureArrayWithIds(data.publications);

                // Ensure basics.profiles is an array with IDs
                data.basics.profiles = ensureArrayWithIds(data.basics.profiles);

                // Ensure meta.sectionOrder exists (backward compatibility)
                if (!Array.isArray(data.meta.sectionOrder)) {
                    data.meta.sectionOrder = [...DEFAULT_SECTION_ORDER];
                }

                importResume(data);
                success('CV imported successfully!');
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Invalid JSON file';
                error(`Error importing CV: ${message}`);
                console.error(err);
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
            success('HTML exported successfully!');
        } catch (err) {
            error('Error exporting HTML. Please try again.');
            console.error(err);
        }
    };

    const handleDownloadPdf = () => {
        // Get the preview iframe
        const iframe = document.querySelector('iframe');
        if (iframe?.contentWindow) {
            iframe.contentWindow.print();
        } else {
            info('Preview not ready. Please wait for the CV to render.');
        }
    };

    return (
        <div className="h-screen flex flex-col">
            <Toolbar
                onExportJson={handleExportJson}
                onImportJson={handleImportJson}
                onExportHtml={handleExportHtml}
                onDownloadPdf={handleDownloadPdf}
            />

            <ResponsiveLayout
                editor={<Editor />}
                preview={<Preview />}
            />

            <Footer />

            {/* Hidden file input for JSON import */}
            <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
            />

            {/* Toast notifications */}
            <ToastContainer toasts={toasts} onClose={closeToast} />
        </div>
    );
}

export default App;
