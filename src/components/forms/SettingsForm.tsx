import { useResumeStore } from '../../store';
import { Palette } from 'lucide-react';

const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean, professional, two-column layout' },
    { id: 'classic', name: 'Classic', description: 'Traditional, single-column, formal style' },
    { id: 'minimal', name: 'Minimal', description: 'Ultra-clean, lots of white space' },
    { id: 'creative', name: 'Creative', description: 'Bold colors, unique layout' },
    { id: 'professional', name: 'Professional', description: 'Dark sidebar, high contrast, authoritative' },
    { id: 'ats', name: 'ATS Optimized', description: 'Simple, text-focused, machine-readable' },
    { id: 'corporate', name: 'Corporate', description: 'Structured, business-oriented, grey accents' },
    { id: 'elegant', name: 'Elegant', description: 'Centered, serif typography, sophisticated' },
    { id: 'compact', name: 'Compact', description: 'Information dense, efficient layout' },
];

export function SettingsForm() {
    const resume = useResumeStore((state) => state.resume);
    const updateSection = useResumeStore((state) => state.updateSection);

    return (
        <div className="space-y-6">
            {/* Template Selection */}
            <div>
                <label className="block text-sm font-medium text-neutral-600 mb-3">
                    <Palette className="w-4 h-4 inline mr-1" />
                    CV Template - Choose Your Style
                </label>
                <div className="grid grid-cols-1 gap-4">
                    {templates.map((template) => (
                        <button
                            key={template.id}
                            onClick={() => updateSection('meta', { templateName: template.id })}
                            className={`p-3 lg:p-4 border-2 rounded-lg text-left transition-all ${resume.meta.templateName === template.id
                                    ? 'border-neutral-800 bg-neutral-50 shadow-md'
                                    : 'border-neutral-200 hover:border-neutral-300 hover:shadow-sm'
                                }`}
                        >
                            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
                                {/* Visual Preview Card */}
                                <div className={`w-full lg:w-32 h-32 lg:h-40 border border-neutral-300 rounded overflow-hidden flex-shrink-0 ${
                                    template.id === 'modern' ? 'bg-white' :
                                    template.id === 'classic' ? 'bg-neutral-50' :
                                    template.id === 'minimal' ? 'bg-white' :
                                    template.id === 'creative' ? 'bg-gradient-to-br from-blue-500 to-purple-500' :
                                    'bg-white'
                                }`}>
                                    {/* Modern Preview */}
                                    {template.id === 'modern' && (
                                        <div className="p-2 text-[4px] leading-tight">
                                            <div className="flex gap-1 mb-1 pb-1 border-b border-neutral-400">
                                                <div className="w-4 h-4 rounded-full bg-neutral-300"></div>
                                                <div>
                                                    <div className="h-1 w-12 bg-neutral-600 mb-0.5"></div>
                                                    <div className="h-0.5 w-10 bg-neutral-400"></div>
                                                </div>
                                            </div>
                                            <div className="mb-1">
                                                <div className="h-1 w-8 bg-neutral-600 mb-0.5"></div>
                                                <div className="h-0.5 w-full bg-neutral-300 mb-0.5"></div>
                                                <div className="h-0.5 w-full bg-neutral-300"></div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Classic Preview */}
                                    {template.id === 'classic' && (
                                        <div className="p-2 text-[4px] leading-tight text-center">
                                            <div className="mb-1">
                                                <div className="h-1.5 w-16 bg-neutral-800 mx-auto mb-0.5"></div>
                                                <div className="h-0.5 w-12 bg-neutral-600 mx-auto mb-0.5"></div>
                                            </div>
                                            <div className="border-t border-neutral-700 mb-1 pb-1">
                                                <div className="h-0.5 w-10 bg-neutral-800 mx-auto mb-0.5 mt-1"></div>
                                                <div className="h-0.5 w-full bg-neutral-400 mb-0.5"></div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Minimal Preview */}
                                    {template.id === 'minimal' && (
                                        <div className="p-3 text-[4px] leading-relaxed">
                                            <div className="mb-2">
                                                <div className="h-1.5 w-14 bg-neutral-400 mb-1"></div>
                                                <div className="h-0.5 w-10 bg-neutral-300 mb-1"></div>
                                            </div>
                                            <div className="mb-2">
                                                <div className="h-0.5 w-8 bg-neutral-500 mb-1"></div>
                                                <div className="h-0.5 w-full bg-neutral-200 mb-0.5"></div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Creative Preview */}
                                    {template.id === 'creative' && (
                                        <div className="text-[4px] leading-tight">
                                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 text-white mb-1">
                                                <div className="flex gap-1 items-center mb-0.5">
                                                    <div className="w-3 h-3 rounded-full bg-white border border-purple-300"></div>
                                                    <div>
                                                        <div className="h-1 w-10 bg-white mb-0.5"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-2">
                                                <div className="border-l-2 border-blue-600 pl-1 mb-1">
                                                    <div className="h-0.5 w-8 bg-blue-600 mb-0.5"></div>
                                                    <div className="h-0.5 w-full bg-neutral-300 mb-0.5"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Professional Preview */}
                                    {template.id === 'professional' && (
                                        <div className="flex h-full text-[4px]">
                                            <div className="w-1/3 bg-neutral-800 p-1 flex flex-col gap-1">
                                                <div className="w-4 h-4 rounded-full bg-neutral-600 mx-auto mb-1"></div>
                                                <div className="h-0.5 w-6 bg-neutral-600 mx-auto"></div>
                                                <div className="h-0.5 w-5 bg-neutral-600 mx-auto"></div>
                                                <div className="h-0.5 w-full bg-neutral-600 mt-2"></div>
                                                <div className="h-0.5 w-full bg-neutral-600"></div>
                                            </div>
                                            <div className="w-2/3 bg-white p-1">
                                                <div className="h-1.5 w-12 bg-neutral-800 mb-0.5"></div>
                                                <div className="h-0.5 w-8 bg-neutral-600 mb-1"></div>
                                                <div className="h-0.5 w-full bg-neutral-200 mb-0.5"></div>
                                                <div className="h-0.5 w-full bg-neutral-200 mb-0.5"></div>
                                                <div className="h-0.5 w-full bg-neutral-200 mb-1"></div>
                                                <div className="h-1 w-10 bg-neutral-800 mb-0.5"></div>
                                                <div className="h-0.5 w-full bg-neutral-200"></div>
                                            </div>
                                        </div>
                                    )}

                                    {/* ATS Preview */}
                                    {template.id === 'ats' && (
                                        <div className="p-2 text-[4px] leading-normal bg-white h-full">
                                            <div className="text-center mb-1">
                                                <div className="h-1.5 w-14 bg-black mx-auto mb-0.5"></div>
                                                <div className="h-0.5 w-20 bg-neutral-600 mx-auto"></div>
                                            </div>
                                            <div className="mb-1">
                                                <div className="h-0.5 w-10 bg-black mb-0.5 border-b border-black"></div>
                                                <div className="h-0.5 w-full bg-neutral-400 mb-0.5"></div>
                                                <div className="h-0.5 w-full bg-neutral-400"></div>
                                            </div>
                                            <div>
                                                <div className="h-0.5 w-10 bg-black mb-0.5 border-b border-black"></div>
                                                <div className="h-0.5 w-full bg-neutral-400 mb-0.5"></div>
                                                <div className="h-0.5 w-full bg-neutral-400"></div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Corporate Preview */}
                                    {template.id === 'corporate' && (
                                        <div className="h-full text-[4px] bg-white">
                                            <div className="h-4 w-full bg-neutral-700 mb-0.5 flex items-center px-1">
                                                <div className="w-2 h-2 rounded-full bg-white mr-1"></div>
                                                <div className="h-1 w-10 bg-white"></div>
                                            </div>
                                            <div className="flex h-full">
                                                <div className="w-1/4 bg-neutral-100 p-1 h-28">
                                                    <div className="h-0.5 w-full bg-neutral-300 mb-0.5"></div>
                                                    <div className="h-0.5 w-full bg-neutral-300"></div>
                                                </div>
                                                <div className="w-3/4 p-1">
                                                    <div className="h-1 w-8 bg-neutral-700 mb-0.5"></div>
                                                    <div className="h-0.5 w-full bg-neutral-300 mb-0.5"></div>
                                                    <div className="h-0.5 w-full bg-neutral-300"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Elegant Preview */}
                                    {template.id === 'elegant' && (
                                        <div className="p-2 text-[4px] leading-relaxed bg-white h-full text-center">
                                            <div className="mb-2">
                                                <div className="h-1.5 w-16 bg-black mx-auto mb-0.5"></div>
                                                <div className="h-0.5 w-10 bg-neutral-500 mx-auto italic"></div>
                                            </div>
                                            <div className="flex items-center gap-1 mb-1 justify-center">
                                                <div className="h-px w-4 bg-neutral-300"></div>
                                                <div className="h-1 w-8 bg-neutral-700"></div>
                                                <div className="h-px w-4 bg-neutral-300"></div>
                                            </div>
                                            <div className="text-left px-2">
                                                <div className="h-0.5 w-full bg-neutral-400 mb-0.5"></div>
                                                <div className="h-0.5 w-full bg-neutral-400"></div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Compact Preview */}
                                    {template.id === 'compact' && (
                                        <div className="p-2 text-[4px] leading-tight bg-white h-full">
                                            <div className="flex justify-between items-center mb-1 border-b border-neutral-500 pb-0.5">
                                                <div className="h-1.5 w-10 bg-neutral-700"></div>
                                                <div className="h-1 w-8 bg-neutral-400"></div>
                                            </div>
                                            <div className="flex gap-1">
                                                <div className="w-2/3">
                                                    <div className="h-1 w-8 bg-neutral-700 mb-0.5"></div>
                                                    <div className="h-0.5 w-full bg-neutral-300 mb-0.5"></div>
                                                    <div className="h-0.5 w-full bg-neutral-300 mb-0.5"></div>
                                                </div>
                                                <div className="w-1/3">
                                                    <div className="h-1 w-6 bg-neutral-700 mb-0.5"></div>
                                                    <div className="h-0.5 w-full bg-neutral-200 mb-0.5"></div>
                                                    <div className="h-0.5 w-full bg-neutral-200"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Template Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="font-medium text-neutral-800 text-sm lg:text-base mb-1">{template.name}</div>
                                    <div className="text-xs lg:text-sm text-neutral-600 mb-2">{template.description}</div>
                                    <div className="flex flex-wrap gap-1">
                                        {['modern', 'professional', 'corporate'].includes(template.id) && (
                                            <span className="text-xs px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded">Professional</span>
                                        )}
                                        {['ats', 'minimal', 'compact'].includes(template.id) && (
                                            <span className="text-xs px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded">ATS-Friendly</span>
                                        )}
                                        {['creative'].includes(template.id) && (
                                            <span className="text-xs px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded">Creative</span>
                                        )}
                                        {['elegant', 'classic'].includes(template.id) && (
                                            <span className="text-xs px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded">Traditional</span>
                                        )}
                                        {['compact'].includes(template.id) && (
                                            <span className="text-xs px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded">Compact</span>
                                        )}
                                    </div>
                                </div>

                                {/* Selected Indicator */}
                                {resume.meta.templateName === template.id && (
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Theme Color */}
            <div>
                <label className="block text-sm font-medium text-neutral-600 mb-2">
                    Theme Color
                </label>
                <div className="flex items-center gap-3">
                    <input
                        type="color"
                        value={resume.meta.themeColor}
                        onChange={(e) => updateSection('meta', { themeColor: e.target.value })}
                        className="w-20 h-10 border border-neutral-200 rounded cursor-pointer"
                    />
                    <span className="text-sm text-neutral-600">{resume.meta.themeColor}</span>
                </div>
            </div>

            {/* One Page Mode */}
            <div className="p-4 border border-neutral-200 rounded-lg bg-neutral-50">
                <div className="flex items-center justify-between">
                    <div>
                        <h4 className="font-medium text-neutral-800">One Page Mode</h4>
                        <p className="text-sm text-neutral-600">
                            Automatically adjust font size and spacing to fit CV on one page
                        </p>
                    </div>
                    <button
                        onClick={() => updateSection('meta', { onePageMode: !resume.meta.onePageMode })}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${resume.meta.onePageMode ? 'bg-neutral-800' : 'bg-neutral-300'
                            }`}
                        role="switch"
                        aria-checked={resume.meta.onePageMode}
                        aria-label="Toggle one page mode"
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${resume.meta.onePageMode ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>
                {resume.meta.onePageMode && (
                    <div className="mt-3 p-2 bg-amber-50 border border-amber-200 rounded text-sm text-amber-800">
                        Note: If content is too much to fit on one page, a warning will appear during export.
                    </div>
                )}
            </div>
        </div>
    );
}
