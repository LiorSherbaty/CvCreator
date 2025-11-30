import { useResumeStore } from '../../store';
import { Trash2, Plus, Award } from 'lucide-react';
import { DraggableList } from '../DraggableList';

export function CertificationsForm() {
    const resume = useResumeStore((state) => state.resume);
    const addEntry = useResumeStore((state) => state.addEntry);
    const removeEntry = useResumeStore((state) => state.removeEntry);
    const updateEntry = useResumeStore((state) => state.updateEntry);
    const reorderEntry = useResumeStore((state) => state.reorderEntry);

    const addCertification = () => {
        addEntry('certifications', {
            name: '',
            date: '',
            issuer: '',
            url: '',
        });
    };

    const renderCertificationItem = (cert: typeof resume.certifications[0], index: number) => (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold text-gray-800">Certification {index + 1}</h4>
                <button
                    onClick={() => removeEntry('certifications', index)}
                    className="text-red-600 hover:text-red-800"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-3">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Certification Name
                    </label>
                    <input
                        type="text"
                        value={cert.name}
                        onChange={(e) => updateEntry('certifications', index, { name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="AWS Certified Solutions Architect"
                    />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Issuer
                        </label>
                        <input
                            type="text"
                            value={cert.issuer}
                            onChange={(e) => updateEntry('certifications', index, { issuer: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Amazon Web Services"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Date Obtained
                        </label>
                        <input
                            type="text"
                            value={cert.date}
                            onChange={(e) => updateEntry('certifications', index, { date: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="March 2023"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Certificate URL (optional)
                    </label>
                    <input
                        type="url"
                        value={cert.url}
                        onChange={(e) => updateEntry('certifications', index, { url: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://..."
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            {resume.certifications.length === 0 ? (
                <div className="text-center py-8 px-4 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200">
                    <Award className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                    <p className="text-slate-600 font-medium mb-1">No certifications added yet</p>
                    <p className="text-slate-500 text-sm">
                        Add your professional certifications and credentials to showcase your expertise
                    </p>
                </div>
            ) : (
                <DraggableList
                    items={resume.certifications}
                    onReorder={(fromIndex, toIndex) => reorderEntry('certifications', fromIndex, toIndex)}
                    renderItem={renderCertificationItem}
                />
            )}

            <button
                onClick={addCertification}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Certification
            </button>
        </div>
    );
}
