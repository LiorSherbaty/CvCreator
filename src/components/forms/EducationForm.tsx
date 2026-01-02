import { useResumeStore } from '../../store';
import { Trash2, Plus } from 'lucide-react';
import { DraggableList } from '../DraggableList';
import { IEducationEntry } from '../../types';

export function EducationForm() {
    const resume = useResumeStore((state) => state.resume);
    const addEntry = useResumeStore((state) => state.addEntry);
    const removeEntry = useResumeStore((state) => state.removeEntry);
    const updateEntry = useResumeStore((state) => state.updateEntry);
    const reorderEntry = useResumeStore((state) => state.reorderEntry);

    const addEducation = () => {
        addEntry('education', {
            institution: '',
            url: '',
            area: '',
            studyType: '',
            startDate: '',
            endDate: '',
            score: '',
        });
    };

    const renderEducationItem = (edu: IEducationEntry, index: number) => (
        <div className="p-4 border border-neutral-200 rounded-lg bg-neutral-50">
            <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium text-neutral-800">Education {index + 1}</h4>
                <button
                    onClick={() => removeEntry('education', edu.id)}
                    className="text-neutral-500 hover:text-neutral-700 transition-colors"
                    aria-label="Remove education"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-3">
                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-1">
                        Institution
                    </label>
                    <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => updateEntry('education', edu.id, { institution: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                        placeholder="University of Example"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">
                            Degree Type
                        </label>
                        <input
                            type="text"
                            value={edu.studyType}
                            onChange={(e) => updateEntry('education', edu.id, { studyType: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="Bachelor"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">
                            Field of Study
                        </label>
                        <input
                            type="text"
                            value={edu.area}
                            onChange={(e) => updateEntry('education', edu.id, { area: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="Computer Science"
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
                            value={edu.startDate}
                            onChange={(e) => updateEntry('education', edu.id, { startDate: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="2016"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">
                            End Date
                        </label>
                        <input
                            type="text"
                            value={edu.endDate}
                            onChange={(e) => updateEntry('education', edu.id, { endDate: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="2020"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-1">
                        GPA / Score
                    </label>
                    <input
                        type="text"
                        value={edu.score}
                        onChange={(e) => updateEntry('education', edu.id, { score: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                        placeholder="3.8"
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            <DraggableList
                items={resume.education}
                onReorder={(fromIndex, toIndex) => reorderEntry('education', fromIndex, toIndex)}
                renderItem={renderEducationItem}
            />

            <button
                onClick={addEducation}
                className="w-full px-4 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Education
            </button>
        </div>
    );
}
