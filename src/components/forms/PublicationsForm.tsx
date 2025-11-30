import { useResumeStore } from '../../store';
import { Trash2, Plus, BookOpen } from 'lucide-react';
import { DraggableList } from '../DraggableList';

export function PublicationsForm() {
    const resume = useResumeStore((state) => state.resume);
    const addEntry = useResumeStore((state) => state.addEntry);
    const removeEntry = useResumeStore((state) => state.removeEntry);
    const updateEntry = useResumeStore((state) => state.updateEntry);
    const reorderEntry = useResumeStore((state) => state.reorderEntry);

    const addPublication = () => {
        addEntry('publications', {
            name: '',
            publisher: '',
            releaseDate: '',
            url: '',
            summary: '',
        });
    };

    const renderPublicationItem = (pub: typeof resume.publications[0], index: number) => (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold text-gray-800">Publication {index + 1}</h4>
                <button
                    onClick={() => removeEntry('publications', index)}
                    className="text-red-600 hover:text-red-800"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-3">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        value={pub.name}
                        onChange={(e) => updateEntry('publications', index, { name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Research Paper Title"
                    />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Publisher
                        </label>
                        <input
                            type="text"
                            value={pub.publisher}
                            onChange={(e) => updateEntry('publications', index, { publisher: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Journal or Conference"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Release Date
                        </label>
                        <input
                            type="text"
                            value={pub.releaseDate}
                            onChange={(e) => updateEntry('publications', index, { releaseDate: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="2023"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        URL (optional)
                    </label>
                    <input
                        type="url"
                        value={pub.url}
                        onChange={(e) => updateEntry('publications', index, { url: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Summary
                    </label>
                    <textarea
                        value={pub.summary}
                        onChange={(e) => updateEntry('publications', index, { summary: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows={2}
                        placeholder="Brief description of the publication..."
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            {resume.publications.length === 0 ? (
                <div className="text-center py-8 px-4 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200">
                    <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                    <p className="text-slate-600 font-medium mb-1">No publications added yet</p>
                    <p className="text-slate-500 text-sm">
                        Add your published works, research papers, articles, or blog posts
                    </p>
                </div>
            ) : (
                <DraggableList
                    items={resume.publications}
                    onReorder={(fromIndex, toIndex) => reorderEntry('publications', fromIndex, toIndex)}
                    renderItem={renderPublicationItem}
                />
            )}

            <button
                onClick={addPublication}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Publication
            </button>
        </div>
    );
}
