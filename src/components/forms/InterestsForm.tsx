import { useResumeStore } from '../../store';
import { Trash2, Plus } from 'lucide-react';
import { DraggableList } from '../DraggableList';
import { IInterestEntry } from '../../types';

export function InterestsForm() {
    const resume = useResumeStore((state) => state.resume);
    const addEntry = useResumeStore((state) => state.addEntry);
    const removeEntry = useResumeStore((state) => state.removeEntry);
    const updateEntry = useResumeStore((state) => state.updateEntry);
    const reorderEntry = useResumeStore((state) => state.reorderEntry);

    const addInterest = () => {
        addEntry('interests', {
            name: '',
            keywords: [],
        });
    };

    const addKeyword = (interestId: string) => {
        const interest = resume.interests.find((i) => i.id === interestId);
        if (!interest) return;
        updateEntry('interests', interestId, {
            keywords: [...interest.keywords, ''],
        });
    };

    const updateKeyword = (interestId: string, keywordIndex: number, value: string) => {
        const interest = resume.interests.find((i) => i.id === interestId);
        if (!interest) return;
        const newKeywords = [...interest.keywords];
        newKeywords[keywordIndex] = value;
        updateEntry('interests', interestId, { keywords: newKeywords });
    };

    const removeKeyword = (interestId: string, keywordIndex: number) => {
        const interest = resume.interests.find((i) => i.id === interestId);
        if (!interest) return;
        const newKeywords = interest.keywords.filter((_, i) => i !== keywordIndex);
        updateEntry('interests', interestId, { keywords: newKeywords });
    };

    const renderInterestItem = (interest: IInterestEntry, index: number) => (
        <div className="p-4 border border-neutral-200 rounded-lg bg-neutral-50">
            <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium text-neutral-800">Interest {index + 1}</h4>
                <button
                    onClick={() => removeEntry('interests', interest.id)}
                    className="text-neutral-500 hover:text-neutral-700 transition-colors"
                    aria-label="Remove interest"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-3">
                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        value={interest.name}
                        onChange={(e) => updateEntry('interests', interest.id, { name: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                        placeholder="Photography, Hiking, etc."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-2">
                        Related Topics
                    </label>
                    <div className="space-y-2">
                        {interest.keywords.map((keyword, kIndex) => (
                            <div key={`${interest.id}-keyword-${kIndex}`} className="flex gap-2">
                                <input
                                    type="text"
                                    value={keyword}
                                    onChange={(e) => updateKeyword(interest.id, kIndex, e.target.value)}
                                    className="flex-1 px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                                    placeholder="Landscape, Portrait, etc."
                                />
                                <button
                                    onClick={() => removeKeyword(interest.id, kIndex)}
                                    className="px-3 py-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
                                    aria-label="Remove topic"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => addKeyword(interest.id)}
                        className="mt-2 px-3 py-1 text-neutral-600 border border-neutral-200 rounded text-sm hover:bg-neutral-100 transition-colors"
                    >
                        + Add Topic
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            <DraggableList
                items={resume.interests}
                onReorder={(fromIndex, toIndex) => reorderEntry('interests', fromIndex, toIndex)}
                renderItem={renderInterestItem}
            />

            <button
                onClick={addInterest}
                className="w-full px-4 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Interest/Hobby
            </button>
        </div>
    );
}
