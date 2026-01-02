import { useResumeStore } from '../../store';
import { Trash2, Plus, Award } from 'lucide-react';
import { DraggableList } from '../DraggableList';
import { ICertificationEntry } from '../../types';

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

    const renderCertificationItem = (cert: ICertificationEntry, index: number) => (
        <div className="p-4 border border-neutral-200 rounded-lg bg-neutral-50">
            <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium text-neutral-800">Certification {index + 1}</h4>
                <button
                    onClick={() => removeEntry('certifications', cert.id)}
                    className="text-neutral-500 hover:text-neutral-700 transition-colors"
                    aria-label="Remove certification"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-3">
                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-1">
                        Certification Name
                    </label>
                    <input
                        type="text"
                        value={cert.name}
                        onChange={(e) => updateEntry('certifications', cert.id, { name: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                        placeholder="AWS Certified Solutions Architect"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">
                            Issuer
                        </label>
                        <input
                            type="text"
                            value={cert.issuer}
                            onChange={(e) => updateEntry('certifications', cert.id, { issuer: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="Amazon Web Services"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">
                            Date Obtained
                        </label>
                        <input
                            type="text"
                            value={cert.date}
                            onChange={(e) => updateEntry('certifications', cert.id, { date: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="March 2023"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-1">
                        Certificate URL (optional)
                    </label>
                    <input
                        type="url"
                        value={cert.url}
                        onChange={(e) => updateEntry('certifications', cert.id, { url: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                        placeholder="https://..."
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            {resume.certifications.length === 0 ? (
                <div className="text-center py-8 px-4 bg-neutral-50 rounded-lg border-2 border-dashed border-neutral-200">
                    <Award className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
                    <p className="text-neutral-600 font-medium mb-1">No certifications added yet</p>
                    <p className="text-neutral-500 text-sm">
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
                className="w-full px-4 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Certification
            </button>
        </div>
    );
}
