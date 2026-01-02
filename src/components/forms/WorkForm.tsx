import { useResumeStore } from '../../store';
import { Trash2, Plus } from 'lucide-react';
import { DraggableList } from '../DraggableList';
import { IWorkEntry } from '../../types';

export function WorkForm() {
    const resume = useResumeStore((state) => state.resume);
    const addEntry = useResumeStore((state) => state.addEntry);
    const removeEntry = useResumeStore((state) => state.removeEntry);
    const updateEntry = useResumeStore((state) => state.updateEntry);
    const reorderEntry = useResumeStore((state) => state.reorderEntry);

    const addWork = () => {
        addEntry('work', {
            name: '',
            position: '',
            url: '',
            startDate: '',
            endDate: '',
            summary: '',
            highlights: [],
        });
    };

    const addHighlight = (workId: string) => {
        const work = resume.work.find((w) => w.id === workId);
        if (!work) return;
        updateEntry('work', workId, {
            highlights: [...work.highlights, ''],
        });
    };

    const updateHighlight = (workId: string, highlightIndex: number, value: string) => {
        const work = resume.work.find((w) => w.id === workId);
        if (!work) return;
        const newHighlights = [...work.highlights];
        newHighlights[highlightIndex] = value;
        updateEntry('work', workId, { highlights: newHighlights });
    };

    const removeHighlight = (workId: string, highlightIndex: number) => {
        const work = resume.work.find((w) => w.id === workId);
        if (!work) return;
        const newHighlights = work.highlights.filter((_, i) => i !== highlightIndex);
        updateEntry('work', workId, { highlights: newHighlights });
    };

    const renderWorkItem = (work: IWorkEntry, index: number) => (
        <div className="p-4 border border-neutral-200 rounded-lg bg-neutral-50">
            <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium text-neutral-800">Position {index + 1}</h4>
                <button
                    onClick={() => removeEntry('work', work.id)}
                    className="text-neutral-500 hover:text-neutral-700 transition-colors"
                    aria-label="Remove work experience"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">
                            Position
                        </label>
                        <input
                            type="text"
                            value={work.position}
                            onChange={(e) => updateEntry('work', work.id, { position: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="Senior Software Engineer"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">
                            Company
                        </label>
                        <input
                            type="text"
                            value={work.name}
                            onChange={(e) => updateEntry('work', work.id, { name: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="Tech Corp"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">
                            Start Date
                        </label>
                        <input
                            type="text"
                            value={work.startDate}
                            onChange={(e) => updateEntry('work', work.id, { startDate: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="Jan 2020"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">
                            End Date
                        </label>
                        <input
                            type="text"
                            value={work.endDate}
                            onChange={(e) => updateEntry('work', work.id, { endDate: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="Present"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-1">Summary</label>
                    <textarea
                        value={work.summary}
                        onChange={(e) => updateEntry('work', work.id, { summary: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                        rows={2}
                        placeholder="Brief description of the role..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-2">
                        Key Achievements
                    </label>
                    <div className="space-y-2">
                        {work.highlights.map((highlight, hIndex) => (
                            <div key={`${work.id}-highlight-${hIndex}`} className="flex gap-2">
                                <input
                                    type="text"
                                    value={highlight}
                                    onChange={(e) => updateHighlight(work.id, hIndex, e.target.value)}
                                    className="flex-1 px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                                    placeholder="Achievement or responsibility..."
                                />
                                <button
                                    onClick={() => removeHighlight(work.id, hIndex)}
                                    className="px-3 py-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
                                    aria-label="Remove achievement"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => addHighlight(work.id)}
                        className="mt-2 px-3 py-1 text-neutral-600 border border-neutral-200 rounded text-sm hover:bg-neutral-100 transition-colors"
                    >
                        + Add Achievement
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            <DraggableList
                items={resume.work}
                onReorder={(fromIndex, toIndex) => reorderEntry('work', fromIndex, toIndex)}
                renderItem={renderWorkItem}
            />

            <button
                onClick={addWork}
                className="w-full px-4 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Work Experience
            </button>
        </div>
    );
}
