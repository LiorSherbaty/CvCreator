import { Download, Upload, FileJson, Printer, FileText } from 'lucide-react';

interface ToolbarProps {
    onExportJson: () => void;
    onImportJson: () => void;
    onExportHtml: () => void;
    onDownloadPdf: () => void;
}

export function Toolbar({ onExportJson, onImportJson, onExportHtml, onDownloadPdf }: ToolbarProps) {
    return (
        <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10 relative">
            <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                    <FileText className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-800 tracking-tight">CV Creator</h1>
            </div>

            <div className="flex items-center gap-3">
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
    );
}
