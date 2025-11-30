import { useResumeStore } from '../../store';
import { Trash2, Plus, Globe } from 'lucide-react';
import { DraggableList } from '../DraggableList';

export function LanguagesForm() {
    const resume = useResumeStore((state) => state.resume);
    const addEntry = useResumeStore((state) => state.addEntry);
    const removeEntry = useResumeStore((state) => state.removeEntry);
    const updateEntry = useResumeStore((state) => state.updateEntry);
    const reorderEntry = useResumeStore((state) => state.reorderEntry);

    const addLanguage = () => {
        addEntry('languages', {
            language: '',
            fluency: '',
        });
    };

    const renderLanguageItem = (lang: typeof resume.languages[0], index: number) => (
        <div className="flex gap-3 items-start">
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Language
                </label>
                <input
                    type="text"
                    value={lang.language}
                    onChange={(e) => updateEntry('languages', index, { language: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="English"
                />
            </div>
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fluency Level
                </label>
                <select
                    value={lang.fluency}
                    onChange={(e) => updateEntry('languages', index, { fluency: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="">Select level</option>
                    <option value="Native">Native</option>
                    <option value="Fluent">Fluent</option>
                    <option value="Professional">Professional</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Elementary">Elementary</option>
                </select>
            </div>
            <button
                onClick={() => removeEntry('languages', index)}
                className="mt-7 px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
            >
                <Trash2 className="w-4 h-4" />
            </button>
        </div>
    );

    return (
        <div className="space-y-4">
            {resume.languages.length === 0 ? (
                <div className="text-center py-8 px-4 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200">
                    <Globe className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                    <p className="text-slate-600 font-medium mb-1">No languages added yet</p>
                    <p className="text-slate-500 text-sm">
                        Add the languages you speak and your proficiency level
                    </p>
                </div>
            ) : (
                <DraggableList
                    items={resume.languages}
                    onReorder={(fromIndex, toIndex) => reorderEntry('languages', fromIndex, toIndex)}
                    renderItem={renderLanguageItem}
                />
            )}

            <button
                onClick={addLanguage}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Language
            </button>
        </div>
    );
}
