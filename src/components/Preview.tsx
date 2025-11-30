import { useEffect, useRef } from 'react';
import { useResumeStore } from '../store';
import { renderTemplate } from '../templateRenderer';
import { getPreviewData, isResumeEmpty } from '../sampleData';

export function Preview() {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const resume = useResumeStore((state) => state.resume);

    useEffect(() => {
        if (!iframeRef.current) return;

        const iframe = iframeRef.current;
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

        if (!iframeDoc) return;

        try {
            // Use sample data if resume is empty, otherwise use actual data
            const previewData = getPreviewData(resume);

            // Render the template
            const html = renderTemplate(resume.meta.templateName, previewData);

            // Write to iframe
            iframeDoc.open();
            iframeDoc.write(html);
            iframeDoc.close();

            // Adjust iframe height to content
            const adjustHeight = () => {
                if (iframeDoc.body) {
                    const height = iframeDoc.body.scrollHeight;
                    iframe.style.height = `${height}px`;
                }
            };

            // Wait for images and fonts to load
            setTimeout(adjustHeight, 100);
            setTimeout(adjustHeight, 500);
        } catch (error) {
            console.error('Error rendering template:', error);
            iframeDoc.open();
            iframeDoc.write(`
        <html>
          <body style="font-family: sans-serif; padding: 20px; color: #721c24; background: #f8d7da;">
            <h2>Error Rendering Template</h2>
            <p>${error instanceof Error ? error.message : 'Unknown error'}</p>
          </body>
        </html>
      `);
            iframeDoc.close();
        }
    }, [resume]);

    const showingSample = isResumeEmpty(resume);

    return (
        <div className="w-full h-full overflow-auto bg-gray-100 p-6">
            {showingSample && (
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                    <strong>Preview Mode:</strong> This is sample data to demonstrate the template design.
                    Start filling in your information in the editor to see your own CV.
                </div>
            )}
            <iframe
                ref={iframeRef}
                title="CV Preview"
                className="w-full bg-white shadow-lg"
                style={{ border: 'none', minHeight: '100vh' }}
            />
        </div>
    );
}
