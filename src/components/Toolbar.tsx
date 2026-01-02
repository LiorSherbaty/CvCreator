import { Download, Upload, FileJson, Printer, FileText, HelpCircle, X, Menu } from 'lucide-react';
import { useState } from 'react';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';

interface IToolbarProps {
    onExportJson: () => void;
    onImportJson: () => void;
    onExportHtml: () => void;
    onDownloadPdf: () => void;
}

export function Toolbar({ onExportJson, onImportJson, onExportHtml, onDownloadPdf }: IToolbarProps) {
    const [showHelp, setShowHelp] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const { isMobile } = useResponsiveLayout();

    const handleMobileMenuAction = (action: () => void) => {
        action();
        setShowMobileMenu(false);
    };

    return (
        <>
            <div className="h-14 lg:h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-4 lg:px-6 z-10 relative">
                <div className="flex items-center gap-2 lg:gap-3">
                    <div className="bg-neutral-800 p-1.5 rounded-lg">
                        <FileText className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    </div>
                    <h1 className="text-lg lg:text-xl font-semibold text-neutral-800 tracking-tight">CV Creator</h1>
                </div>

                {/* Desktop Actions */}
                {!isMobile && (
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setShowHelp(true)}
                            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors"
                            title="Pro Tips"
                        >
                            <HelpCircle className="w-4 h-4" />
                            <span className="hidden sm:inline">Pro Tips</span>
                        </button>

                        <div className="h-5 w-px bg-neutral-200 mx-1"></div>

                        <button
                            onClick={onImportJson}
                            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors"
                            title="Import JSON"
                        >
                            <Upload className="w-4 h-4" />
                            <span className="hidden sm:inline">Import</span>
                        </button>

                        <div className="h-5 w-px bg-neutral-200 mx-1"></div>

                        <button
                            onClick={onExportJson}
                            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors"
                            title="Export JSON"
                        >
                            <Download className="w-4 h-4" />
                            <span className="hidden sm:inline">JSON</span>
                        </button>

                        <button
                            onClick={onExportHtml}
                            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors"
                            title="Export HTML"
                        >
                            <FileJson className="w-4 h-4" />
                            <span className="hidden sm:inline">HTML</span>
                        </button>

                        <button
                            onClick={onDownloadPdf}
                            className="ml-3 flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors"
                        >
                            <Printer className="w-4 h-4" />
                            Download PDF
                        </button>
                    </div>
                )}

                {/* Mobile Actions */}
                {isMobile && (
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="p-2 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors"
                            aria-label="Menu"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                        <button
                            onClick={onDownloadPdf}
                            className="flex items-center gap-2 px-3 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors"
                        >
                            <Printer className="w-4 h-4" />
                            PDF
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobile && showMobileMenu && (
                <div className="absolute top-14 right-4 z-50 bg-white border border-neutral-200 rounded-lg shadow-lg py-2 min-w-48">
                    <button
                        onClick={() => handleMobileMenuAction(() => setShowHelp(true))}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
                    >
                        <HelpCircle className="w-4 h-4" />
                        Pro Tips
                    </button>
                    <div className="h-px bg-neutral-100 my-1"></div>
                    <button
                        onClick={() => handleMobileMenuAction(onImportJson)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
                    >
                        <Upload className="w-4 h-4" />
                        Import JSON
                    </button>
                    <button
                        onClick={() => handleMobileMenuAction(onExportJson)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        Export JSON
                    </button>
                    <button
                        onClick={() => handleMobileMenuAction(onExportHtml)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
                    >
                        <FileJson className="w-4 h-4" />
                        Export HTML
                    </button>
                </div>
            )}

            {/* Mobile Menu Backdrop */}
            {isMobile && showMobileMenu && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowMobileMenu(false)}
                />
            )}

            {/* Help Modal */}
            {showHelp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                        <button
                            onClick={() => setShowHelp(false)}
                            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-full transition-colors"
                            aria-label="Close help modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-6 lg:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-neutral-100 p-3 rounded-full">
                                    <HelpCircle className="w-6 h-6 lg:w-8 lg:h-8 text-neutral-700" />
                                </div>
                                <h2 className="text-xl lg:text-2xl font-semibold text-neutral-800">Pro Tips for a Perfect CV</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-neutral-50 p-4 lg:p-6 rounded-xl border border-neutral-200">
                                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                                        Supercharge with AI
                                    </h3>
                                    <p className="text-neutral-600 mb-4 leading-relaxed text-sm lg:text-base">
                                        Want a world-class CV? Use an AI (like ChatGPT, Claude, or Gemini) to refine your content.
                                    </p>
                                    <ol className="list-decimal list-inside space-y-2 lg:space-y-3 text-neutral-700 text-sm lg:text-base">
                                        <li>Fill out your basic information in this editor.</li>
                                        <li>Click the <span className="inline-flex items-center px-2 py-0.5 rounded bg-white border border-neutral-200 text-xs mx-1"><Download className="w-3 h-3 mr-1"/> JSON</span> export button.</li>
                                        <li>Paste the JSON content into your favorite AI with this prompt:</li>
                                    </ol>

                                    <div className="mt-4 bg-white p-3 lg:p-4 rounded-lg border border-neutral-200 relative">
                                        <code className="text-xs lg:text-sm text-neutral-700 block whitespace-pre-wrap font-mono">
                                            "Act as a recruiting manager in field <span className="bg-neutral-200 px-1 rounded">[Your Field]</span>, and fix this JSON with my CV data to improve it. Here is the job description I am applying for: <span className="bg-neutral-200 px-1 rounded">[Paste Job Description]</span>. Please maintain the exact JSON structure so I can import it back."
                                        </code>
                                    </div>

                                    <p className="mt-4 text-neutral-600 text-sm lg:text-base">
                                        4. Copy the AI's response (the JSON part) and click <span className="inline-flex items-center px-2 py-0.5 rounded bg-white border border-neutral-200 text-xs mx-1"><Upload className="w-3 h-3 mr-1"/> Import</span> to see your upgraded CV!
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                                        <h4 className="font-semibold text-neutral-800 mb-2">ATS Optimization</h4>
                                        <p className="text-sm text-neutral-600">
                                            Applying online? Use the <strong>ATS Optimized</strong> or <strong>Minimal</strong> templates. They are designed to be easily parsed by Applicant Tracking Systems.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                                        <h4 className="font-semibold text-neutral-800 mb-2">One Page Mode</h4>
                                        <p className="text-sm text-neutral-600">
                                            Need to fit everything on a single page? Toggle <strong>One Page Mode</strong> in the Settings tab to automatically adjust font sizes and spacing.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 lg:mt-8 pt-6 border-t border-neutral-100 text-center">
                                <button
                                    onClick={() => setShowHelp(false)}
                                    className="px-6 py-2.5 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors"
                                >
                                    Got it, thanks!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
