import { useResumeStore } from '../../store';
import { Trash2, Plus } from 'lucide-react';
import { DraggableList } from '../DraggableList';

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

    const addHighlight = (volunteerIndex: number) => {
        const volunteer = resume.volunteer[volunteerIndex];
        updateEntry('volunteer', volunteerIndex, {
            highlights: [...volunteer.highlights, ''],
        });
    };

    const updateHighlight = (volunteerIndex: number, highlightIndex: number, value: string) => {
        const volunteer = resume.volunteer[volunteerIndex];
        const newHighlights = [...volunteer.highlights];
        newHighlights[highlightIndex] = value;
        updateEntry('volunteer', volunteerIndex, { highlights: newHighlights });
    };

    const removeHighlight = (volunteerIndex: number, highlightIndex: number) => {
        const volunteer = resume.volunteer[volunteerIndex];
        const newHighlights = volunteer.highlights.filter((_, i) => i !== highlightIndex);
        updateEntry('volunteer', volunteerIndex, { highlights: newHighlights });
    };

    const renderVolunteerItem = (volunteer: typeof resume.volunteer[0], index: number) => (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold text-gray-800">Volunteer Role {index + 1}</h4>
                <button
                    onClick={() => removeEntry('volunteer', index)}
                    className="text-red-600 hover:text-red-800"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Position
                        </label>
                        <input
                            type="text"
                            value={volunteer.position}
                            onChange={(e) => updateEntry('volunteer', index, { position: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Volunteer Coordinator"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Organization
                        </label>
                        <input
                            type="text"
                            value={volunteer.organization}
                            onChange={(e) => updateEntry('volunteer', index, { organization: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Red Cross"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Start Date
                        </label>
                        <input
                            type="text"
                            value={volunteer.startDate}
                            onChange={(e) => updateEntry('volunteer', index, { startDate: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Jan 2020"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            End Date
                        </label>
                        <input
                            type="text"
                            value={volunteer.endDate}
                            onChange={(e) => updateEntry('volunteer', index, { endDate: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Present"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
                    <textarea
                        value={volunteer.summary}
                        onChange={(e) => updateEntry('volunteer', index, { summary: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows={2}
                        placeholder="Brief description of volunteer work..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Key Contributions
                    </label>
                    <div className="space-y-2">
                        {volunteer.highlights.map((highlight, hIndex) => (
                            <div key={hIndex} className="flex gap-2">
                                <input
                                    type="text"
                                    value={highlight}
                                    onChange={(e) => updateHighlight(index, hIndex, e.target.value)}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Contribution or achievement..."
                                />
                                <button
                                    onClick={() => removeHighlight(index, hIndex)}
                                    className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => addHighlight(index)}
                        className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300 transition-colors"
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
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Volunteer Work
            </button>
        </div>
    );
}
