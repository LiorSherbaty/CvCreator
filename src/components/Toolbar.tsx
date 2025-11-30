import { Download, Upload, FileJson, Printer, FileText, HelpCircle, X } from 'lucide-react';
import { useState } from 'react';

interface ToolbarProps {
    onExportJson: () => void;
    onImportJson: () => void;
    onExportHtml: () => void;
    onDownloadPdf: () => void;
}

export function Toolbar({ onExportJson, onImportJson, onExportHtml, onDownloadPdf }: ToolbarProps) {
    const [showHelp, setShowHelp] = useState(false);

    return (
        <>
            <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10 relative">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-600 p-1.5 rounded-lg">
                        <FileText className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-xl font-bold text-slate-800 tracking-tight">CV Creator</h1>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowHelp(true)}
                        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors mr-2"
                        title="Pro Tips"
                    >
                        <HelpCircle className="w-4 h-4" />
                        <span className="hidden sm:inline">Pro Tips</span>
                    </button>

                    <div className="h-6 w-px bg-slate-200 mx-1"></div>

                    <button
                        onClick={onImportJson}
                        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
                        title="Import JSON"
                    >
                        <Upload className="w-4 h-4" />
                        <span className="hidden sm:inline">Import</span>
                    </button>

                    <div className="h-6 w-px bg-slate-200 mx-1"></div>

                    <button
                        onClick={onExportJson}
                        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
                        title="Export JSON"
                    >
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">JSON</span>
                    </button>

                    <button
                        onClick={onExportHtml}
                        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
                        title="Export HTML"
                    >
                        <FileJson className="w-4 h-4" />
                        <span className="hidden sm:inline">HTML</span>
                    </button>

                    <button
                        onClick={onDownloadPdf}
                        className="ml-2 flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
                    >
                        <Printer className="w-4 h-4" />
                        Download PDF
                    </button>
                </div>
            </div>

            {/* Help Modal */}
            {showHelp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative transition-all duration-200 ease-out">
                        <button 
                            onClick={() => setShowHelp(false)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <HelpCircle className="w-8 h-8 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Pro Tips for a Perfect CV</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                                        ✨ Supercharge with AI
                                    </h3>
                                    <p className="text-blue-800 mb-4 leading-relaxed">
                                        Want a world-class CV? Use an AI (like ChatGPT, Claude, or Gemini) to refine your content.
                                    </p>
                                    <ol className="list-decimal list-inside space-y-3 text-blue-900 font-medium">
                                        <li>Fill out your basic information in this editor.</li>
                                        <li>Click the <span className="inline-flex items-center px-2 py-0.5 rounded bg-white border border-blue-200 text-xs mx-1"><Download className="w-3 h-3 mr-1"/> JSON</span> export button in the toolbar.</li>
                                        <li>Paste the JSON file content into your favorite AI with this prompt:</li>
                                    </ol>
                                    
                                    <div className="mt-4 bg-white p-4 rounded-lg border border-blue-200 shadow-sm relative group">
                                        <code className="text-sm text-gray-800 block whitespace-pre-wrap font-mono">
                                            "Act as a recruiting manager in field <span className="bg-yellow-100 px-1 rounded">[Your Field]</span>, and fix this JSON with my CV data to improve it. Here is the job description I am applying for: <span className="bg-yellow-100 px-1 rounded">[Paste Job Description]</span>. Please maintain the exact JSON structure so I can import it back."
                                        </code>
                                    </div>

                                    <p className="mt-4 text-blue-800">
                                        4. Copy the AI's response (the JSON part) and click <span className="inline-flex items-center px-2 py-0.5 rounded bg-white border border-blue-200 text-xs mx-1"><Upload className="w-3 h-3 mr-1"/> Import</span> to see your upgraded CV!
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                        <h4 className="font-bold text-gray-800 mb-2">🤖 ATS Optimization</h4>
                                        <p className="text-sm text-gray-600">
                                            Applying online? Use the <strong>ATS Optimized</strong> or <strong>Minimal</strong> templates. They are designed to be easily parsed by Applicant Tracking Systems.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                        <h4 className="font-bold text-gray-800 mb-2">📄 One Page Mode</h4>
                                        <p className="text-sm text-gray-600">
                                            Need to fit everything on a single page? Toggle <strong>One Page Mode</strong> in the Settings tab to automatically adjust font sizes and spacing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                                <button 
                                    onClick={() => setShowHelp(false)}
                                    className="px-6 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
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
