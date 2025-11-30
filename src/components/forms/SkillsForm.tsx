import { useResumeStore } from '../../store';
import { Trash2, Plus } from 'lucide-react';
import { DraggableList } from '../DraggableList';

export function SkillsForm() {
    const resume = useResumeStore((state) => state.resume);
    const addEntry = useResumeStore((state) => state.addEntry);
    const removeEntry = useResumeStore((state) => state.removeEntry);
    const updateEntry = useResumeStore((state) => state.updateEntry);
    const reorderEntry = useResumeStore((state) => state.reorderEntry);

    const addSkill = () => {
        addEntry('skills', {
            name: '',
            level: '',
            keywords: [],
        });
    };

    const addKeyword = (skillIndex: number) => {
        const skill = resume.skills[skillIndex];
        updateEntry('skills', skillIndex, {
            keywords: [...skill.keywords, ''],
        });
    };

    const updateKeyword = (skillIndex: number, keywordIndex: number, value: string) => {
        const skill = resume.skills[skillIndex];
        const newKeywords = [...skill.keywords];
        newKeywords[keywordIndex] = value;
        updateEntry('skills', skillIndex, { keywords: newKeywords });
    };

    const removeKeyword = (skillIndex: number, keywordIndex: number) => {
        const skill = resume.skills[skillIndex];
        const newKeywords = skill.keywords.filter((_, i) => i !== keywordIndex);
        updateEntry('skills', skillIndex, { keywords: newKeywords });
    };

    const renderSkillItem = (skill: typeof resume.skills[0], index: number) => (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="flex justify-between items-start mb-4">
                        <h4 className="font-semibold text-gray-800">Skill {index + 1}</h4>
                        <button
                            onClick={() => removeEntry('skills', index)}
                            className="text-red-600 hover:text-red-800"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Skill Name
                                </label>
                                <input
                                    type="text"
                                    value={skill.name}
                                    onChange={(e) => updateEntry('skills', index, { name: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Web Development"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Proficiency Level
                                </label>
                                <input
                                    type="text"
                                    value={skill.level}
                                    onChange={(e) => updateEntry('skills', index, { level: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Expert"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Technologies/Keywords
                            </label>
                            <div className="space-y-2">
                                {skill.keywords.map((keyword, kIndex) => (
                                    <div key={kIndex} className="flex gap-2">
                                        <input
                                            type="text"
                                            value={keyword}
                                            onChange={(e) => updateKeyword(index, kIndex, e.target.value)}
                                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="React, TypeScript, etc."
                                        />
                                        <button
                                            onClick={() => removeKeyword(index, kIndex)}
                                            className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => addKeyword(index)}
                                className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300 transition-colors"
                            >
                                + Add Keyword
                            </button>
                        </div>
                    </div>
                </div>
    );

    return (
        <div className="space-y-6">
            <DraggableList
                items={resume.skills}
                onReorder={(fromIndex, toIndex) => reorderEntry('skills', fromIndex, toIndex)}
                renderItem={renderSkillItem}
            />

            <button
                onClick={addSkill}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Skill
            </button>
        </div>
    );
}
