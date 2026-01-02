import { useEffect, useRef } from 'react';
import { useResumeStore } from '../store';
import { renderTemplate } from '../templateRenderer';
import { getPreviewData, isResumeEmpty } from '../sampleData';
import { HEIGHT_ADJUST_DELAY_INITIAL, HEIGHT_ADJUST_DELAY_FINAL } from '../constants';

export function Preview() {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const resume = useResumeStore((state) => state.resume);

    useEffect(() => {
        if (!iframeRef.current) return;

        const iframe = iframeRef.current;
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

        if (!iframeDoc) return;

        // Store timeout IDs for cleanup
        const timeoutIds: number[] = [];

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
            timeoutIds.push(window.setTimeout(adjustHeight, HEIGHT_ADJUST_DELAY_INITIAL));
            timeoutIds.push(window.setTimeout(adjustHeight, HEIGHT_ADJUST_DELAY_FINAL));
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

        // Cleanup: Clear timeouts on unmount or before next effect
        return () => {
            timeoutIds.forEach((id) => window.clearTimeout(id));
        };
    }, [resume]);

    const showingSample = isResumeEmpty(resume);

    return (
        <div className="w-full h-full overflow-auto bg-neutral-100 p-4 lg:p-6">
            {showingSample && (
                <div className="mb-4 p-3 bg-neutral-50 border border-neutral-200 rounded-lg text-xs lg:text-sm text-neutral-700">
                    <strong>Preview Mode:</strong> This is sample data to demonstrate the template design.
                    Start filling in your information in the editor to see your own CV.
                </div>
            )}
            <div className="w-full overflow-x-auto">
                <iframe
                    ref={iframeRef}
                    title="CV Preview"
                    className="w-full bg-white shadow-lg min-w-[600px]"
                    style={{ border: 'none', minHeight: '100vh' }}
                />
            </div>
        </div>
    );
}
