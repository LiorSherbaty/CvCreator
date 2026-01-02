import { useResumeStore } from '../../store';
import { Trash2, Plus, BookOpen } from 'lucide-react';
import { DraggableList } from '../DraggableList';
import { IPublicationEntry } from '../../types';

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

    const renderPublicationItem = (pub: IPublicationEntry, index: number) => (
        <div className="p-4 border border-neutral-200 rounded-lg bg-neutral-50">
            <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium text-neutral-800">Publication {index + 1}</h4>
                <button
                    onClick={() => removeEntry('publications', pub.id)}
                    className="text-neutral-500 hover:text-neutral-700 transition-colors"
                    aria-label="Remove publication"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            <div className="space-y-3">
                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        value={pub.name}
                        onChange={(e) => updateEntry('publications', pub.id, { name: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                        placeholder="Research Paper Title"
                    />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">
                            Publisher
                        </label>
                        <input
                            type="text"
                            value={pub.publisher}
                            onChange={(e) => updateEntry('publications', pub.id, { publisher: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="Journal or Conference"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-600 mb-1">
                            Release Date
                        </label>
                        <input
                            type="text"
                            value={pub.releaseDate}
                            onChange={(e) => updateEntry('publications', pub.id, { releaseDate: e.target.value })}
                            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                            placeholder="2023"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-1">
                        URL (optional)
                    </label>
                    <input
                        type="url"
                        value={pub.url}
                        onChange={(e) => updateEntry('publications', pub.id, { url: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                        placeholder="https://..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-1">
                        Summary
                    </label>
                    <textarea
                        value={pub.summary}
                        onChange={(e) => updateEntry('publications', pub.id, { summary: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
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
                <div className="text-center py-8 px-4 bg-neutral-50 rounded-lg border-2 border-dashed border-neutral-200">
                    <BookOpen className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
                    <p className="text-neutral-600 font-medium mb-1">No publications added yet</p>
                    <p className="text-neutral-500 text-sm">
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
                className="w-full px-4 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium flex items-center justify-center gap-2"
            >
                <Plus className="w-5 h-5" />
                Add Publication
            </button>
        </div>
    );
}
