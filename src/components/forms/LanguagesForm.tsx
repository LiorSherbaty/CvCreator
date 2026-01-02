import { useResumeStore } from '../../store';
import { Trash2, Plus, Globe } from 'lucide-react';
import { DraggableList } from '../DraggableList';
import { ILanguageEntry } from '../../types';

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

    const renderLanguageItem = (lang: ILanguageEntry) => (
        <div className="flex gap-3 items-start">
            <div className="flex-1">
                <label className="block text-sm font-medium text-neutral-600 mb-1">
                    Language
                </label>
                <input
                    type="text"
                    value={lang.language}
                    onChange={(e) => updateEntry('languages', lang.id, { language: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                    placeholder="English"
                />
            </div>
            <div className="flex-1">
                <label className="block text-sm font-medium text-neutral-600 mb-1">
                    Fluency Level
                </label>
                <select
                    value={lang.fluency}
                    onChange={(e) => updateEntry('languages', lang.id, { fluency: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
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
                onClick={() => removeEntry('languages', lang.id)}
                className="mt-7 px-3 py-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Remove language"
            >
                <Trash2 className="w-4 h-4" />
            </button>
        </div>
    );

    return (
        <div className="space-y-4">
            {resume.languages.length === 0 ? (
                <div className="text-center py-8 px-4 bg-neutral-50 rounded-lg border-2 border-dashed border-neutral-200">
                    <Globe className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
                    <p className="text-neutral-600 font-medium mb-1">No languages added yet</p>
                    <p className="text-neutral-500 text-sm">
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
                className="w-full px-4 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Language
            </button>
        </div>
    );
}
