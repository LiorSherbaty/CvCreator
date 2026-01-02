import { useResumeStore } from '../../store';
import { Trash2, Plus } from 'lucide-react';
import { DraggableList } from '../DraggableList';
import { ISkillEntry } from '../../types';

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

    const addKeyword = (skillId: string) => {
        const skill = resume.skills.find((s) => s.id === skillId);
        if (!skill) return;
        updateEntry('skills', skillId, {
            keywords: [...skill.keywords, ''],
        });
    };

    const updateKeyword = (skillId: string, keywordIndex: number, value: string) => {
        const skill = resume.skills.find((s) => s.id === skillId);
        if (!skill) return;
        const newKeywords = [...skill.keywords];
        newKeywords[keywordIndex] = value;
        updateEntry('skills', skillId, { keywords: newKeywords });
    };

    const removeKeyword = (skillId: string, keywordIndex: number) => {
        const skill = resume.skills.find((s) => s.id === skillId);
        if (!skill) return;
        const newKeywords = skill.keywords.filter((_, i) => i !== keywordIndex);
        updateEntry('skills', skillId, { keywords: newKeywords });
    };

    const renderSkillItem = (skill: ISkillEntry, index: number) => (
        <div className="p-4 border border-neutral-200 rounded-lg bg-neutral-50">
            <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium text-neutral-800">Skill {index + 1}</h4>
                <button
                    onClick={() => removeEntry('skills', skill.id)}
                    className="text-neutral-500 hover:text-neutral-700 transition-colors"
                    aria-label="Remove skill"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">
                            Skill Name
                        </label>
                        <input
                            type="text"
                            value={skill.name}
                            onChange={(e) => updateEntry('skills', skill.id, { name: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="Web Development"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">
                            Proficiency Level
                        </label>
                        <input
                            type="text"
                            value={skill.level}
                            onChange={(e) => updateEntry('skills', skill.id, { level: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="Expert"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-2">
                        Technologies/Keywords
                    </label>
                    <div className="space-y-2">
                        {skill.keywords.map((keyword, kIndex) => (
                            <div key={`${skill.id}-keyword-${kIndex}`} className="flex gap-2">
                                <input
                                    type="text"
                                    value={keyword}
                                    onChange={(e) => updateKeyword(skill.id, kIndex, e.target.value)}
                                    className="flex-1 px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                                    placeholder="React, TypeScript, etc."
                                />
                                <button
                                    onClick={() => removeKeyword(skill.id, kIndex)}
                                    className="px-3 py-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
                                    aria-label="Remove keyword"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => addKeyword(skill.id)}
                        className="mt-2 px-3 py-1 text-neutral-600 border border-neutral-200 rounded text-sm hover:bg-neutral-100 transition-colors"
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
                className="w-full px-4 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Skill
            </button>
        </div>
    );
}
