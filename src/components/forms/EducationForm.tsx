import { useResumeStore } from '../../store';
import { Trash2, Plus } from 'lucide-react';
import { DraggableList } from '../DraggableList';

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

    const renderEducationItem = (edu: typeof resume.education[0], index: number) => (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="flex justify-between items-start mb-4">
                        <h4 className="font-semibold text-gray-800">Education {index + 1}</h4>
                        <button
                            onClick={() => removeEntry('education', index)}
                            className="text-red-600 hover:text-red-800"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Institution
                            </label>
                            <input
                                type="text"
                                value={edu.institution}
                                onChange={(e) => updateEntry('education', index, { institution: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="University of Example"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Degree Type
                                </label>
                                <input
                                    type="text"
                                    value={edu.studyType}
                                    onChange={(e) => updateEntry('education', index, { studyType: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Bachelor"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Field of Study
                                </label>
                                <input
                                    type="text"
                                    value={edu.area}
                                    onChange={(e) => updateEntry('education', index, { area: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Computer Science"
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
                                    value={edu.startDate}
                                    onChange={(e) => updateEntry('education', index, { startDate: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="2016"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    End Date
                                </label>
                                <input
                                    type="text"
                                    value={edu.endDate}
                                    onChange={(e) => updateEntry('education', index, { endDate: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="2020"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                GPA / Score
                            </label>
                            <input
                                type="text"
                                value={edu.score}
                                onChange={(e) => updateEntry('education', index, { score: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Education
            </button>
        </div>
    );
}
