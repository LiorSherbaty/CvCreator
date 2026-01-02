import { useResumeStore } from '../../store';
import { Trash2, Plus } from 'lucide-react';
import { DraggableList } from '../DraggableList';
import { IVolunteerEntry } from '../../types';

export function VolunteerForm() {
    const resume = useResumeStore((state) => state.resume);
    const addEntry = useResumeStore((state) => state.addEntry);
    const removeEntry = useResumeStore((state) => state.removeEntry);
    const updateEntry = useResumeStore((state) => state.updateEntry);
    const reorderEntry = useResumeStore((state) => state.reorderEntry);

    const addVolunteer = () => {
        addEntry('volunteer', {
            organization: '',
            position: '',
            url: '',
            startDate: '',
            endDate: '',
            summary: '',
            highlights: [],
        });
    };

    const addHighlight = (volunteerId: string) => {
        const volunteer = resume.volunteer.find((v) => v.id === volunteerId);
        if (!volunteer) return;
        updateEntry('volunteer', volunteerId, {
            highlights: [...volunteer.highlights, ''],
        });
    };

    const updateHighlight = (volunteerId: string, highlightIndex: number, value: string) => {
        const volunteer = resume.volunteer.find((v) => v.id === volunteerId);
        if (!volunteer) return;
        const newHighlights = [...volunteer.highlights];
        newHighlights[highlightIndex] = value;
        updateEntry('volunteer', volunteerId, { highlights: newHighlights });
    };

    const removeHighlight = (volunteerId: string, highlightIndex: number) => {
        const volunteer = resume.volunteer.find((v) => v.id === volunteerId);
        if (!volunteer) return;
        const newHighlights = volunteer.highlights.filter((_, i) => i !== highlightIndex);
        updateEntry('volunteer', volunteerId, { highlights: newHighlights });
    };

    const renderVolunteerItem = (volunteer: IVolunteerEntry, index: number) => (
        <div className="p-4 border border-neutral-200 rounded-lg bg-neutral-50">
            <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium text-neutral-800">Volunteer Role {index + 1}</h4>
                <button
                    onClick={() => removeEntry('volunteer', volunteer.id)}
                    className="text-neutral-500 hover:text-neutral-700 transition-colors"
                    aria-label="Remove volunteer experience"
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
                            value={volunteer.position}
                            onChange={(e) => updateEntry('volunteer', volunteer.id, { position: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="Volunteer Coordinator"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">
                            Organization
                        </label>
                        <input
                            type="text"
                            value={volunteer.organization}
                            onChange={(e) => updateEntry('volunteer', volunteer.id, { organization: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="Red Cross"
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
                            value={volunteer.startDate}
                            onChange={(e) => updateEntry('volunteer', volunteer.id, { startDate: e.target.value })}
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
                            value={volunteer.endDate}
                            onChange={(e) => updateEntry('volunteer', volunteer.id, { endDate: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="Present"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-1">Summary</label>
                    <textarea
                        value={volunteer.summary}
                        onChange={(e) => updateEntry('volunteer', volunteer.id, { summary: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                        rows={2}
                        placeholder="Brief description of volunteer work..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-2">
                        Key Contributions
                    </label>
                    <div className="space-y-2">
                        {volunteer.highlights.map((highlight, hIndex) => (
                            <div key={`${volunteer.id}-highlight-${hIndex}`} className="flex gap-2">
                                <input
                                    type="text"
                                    value={highlight}
                                    onChange={(e) => updateHighlight(volunteer.id, hIndex, e.target.value)}
                                    className="flex-1 px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                                    placeholder="Contribution or achievement..."
                                />
                                <button
                                    onClick={() => removeHighlight(volunteer.id, hIndex)}
                                    className="px-3 py-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
                                    aria-label="Remove contribution"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => addHighlight(volunteer.id)}
                        className="mt-2 px-3 py-1 text-neutral-600 border border-neutral-200 rounded text-sm hover:bg-neutral-100 transition-colors"
                    >
                        + Add Contribution
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            <DraggableList
                items={resume.volunteer}
                onReorder={(fromIndex, toIndex) => reorderEntry('volunteer', fromIndex, toIndex)}
                renderItem={renderVolunteerItem}
            />

            <button
                onClick={addVolunteer}
                className="w-full px-4 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Volunteer Work
            </button>
        </div>
    );
}
