import { useResumeStore } from '../../store';
import { Upload, Trash2 } from 'lucide-react';
import { MAX_IMAGE_SIZE_BYTES, MAX_IMAGE_SIZE_MB } from '../../constants';

export function BasicsForm() {
    const resume = useResumeStore((state) => state.resume);
    const updateSection = useResumeStore((state) => state.updateSection);
    const addEntry = useResumeStore((state) => state.addEntry);
    const removeEntry = useResumeStore((state) => state.removeEntry);
    const updateEntry = useResumeStore((state) => state.updateEntry);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > MAX_IMAGE_SIZE_BYTES) {
            alert(`Image size must be less than ${MAX_IMAGE_SIZE_MB}MB`);
            e.target.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const base64 = event.target?.result as string;
            updateSection('basics', { image: base64 });
        };
        reader.readAsDataURL(file);
    };

    const addProfile = () => {
        addEntry('basics.profiles', { network: '', username: '', url: '' });
    };

    return (
        <div className="space-y-4">
            {/* Image Upload */}
            <div>
                <label className="block text-sm font-medium text-neutral-600 mb-2">
                    Profile Picture
                </label>
                {resume.basics.image && (
                    <div className="mb-3">
                        <img
                            src={resume.basics.image}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover border-2 border-neutral-200"
                        />
                    </div>
                )}
                <label className="flex items-center gap-2 px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg cursor-pointer hover:bg-neutral-200 transition-colors w-fit">
                    <Upload className="w-4 h-4" />
                    <span className="text-sm font-medium">Upload Image</span>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                </label>
            </div>

            {/* Name */}
            <div>
                <label className="block text-sm font-medium text-neutral-600 mb-1">Full Name</label>
                <input
                    type="text"
                    value={resume.basics.name}
                    onChange={(e) => updateSection('basics', { name: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                    placeholder="John Doe"
                />
            </div>

            {/* Job Title */}
            <div>
                <label className="block text-sm font-medium text-neutral-600 mb-1">Job Title</label>
                <input
                    type="text"
                    value={resume.basics.label}
                    onChange={(e) => updateSection('basics', { label: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                    placeholder="Software Engineer"
                />
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-1">Email</label>
                    <input
                        type="email"
                        value={resume.basics.email}
                        onChange={(e) => updateSection('basics', { email: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-1">Phone</label>
                    <input
                        type="tel"
                        value={resume.basics.phone}
                        onChange={(e) => updateSection('basics', { phone: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                        placeholder="+1 234 567 890"
                    />
                </div>
            </div>

            {/* Website */}
            <div>
                <label className="block text-sm font-medium text-neutral-600 mb-1">Website</label>
                <input
                    type="url"
                    value={resume.basics.url}
                    onChange={(e) => updateSection('basics', { url: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                    placeholder="https://example.com"
                />
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-1">City</label>
                    <input
                        type="text"
                        value={resume.basics.location.city}
                        onChange={(e) =>
                            updateSection('basics', {
                                location: { ...resume.basics.location, city: e.target.value },
                            })
                        }
                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                        placeholder="New York"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-neutral-600 mb-1">Country Code</label>
                    <input
                        type="text"
                        value={resume.basics.location.countryCode}
                        onChange={(e) =>
                            updateSection('basics', {
                                location: { ...resume.basics.location, countryCode: e.target.value },
                            })
                        }
                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                        placeholder="US"
                    />
                </div>
            </div>

            {/* Summary */}
            <div>
                <label className="block text-sm font-medium text-neutral-600 mb-1">
                    Professional Summary
                </label>
                <textarea
                    value={resume.basics.summary}
                    onChange={(e) => updateSection('basics', { summary: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                    rows={4}
                    placeholder="Brief professional summary..."
                />
            </div>

            {/* Social Profiles */}
            <div>
                <label className="block text-sm font-medium text-neutral-600 mb-2">Social Profiles</label>
                <div className="space-y-2">
                    {resume.basics.profiles.map((profile) => (
                        <div key={profile.id} className="space-y-2 p-3 border border-neutral-200 rounded-lg">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={profile.network}
                                    onChange={(e) =>
                                        updateEntry('basics.profiles', profile.id, { network: e.target.value })
                                    }
                                    className="flex-1 px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                                    placeholder="Network (e.g., LinkedIn)"
                                />
                                <button
                                    onClick={() => removeEntry('basics.profiles', profile.id)}
                                    className="px-3 py-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
                                    aria-label="Remove profile"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                            <input
                                type="text"
                                value={profile.username}
                                onChange={(e) =>
                                    updateEntry('basics.profiles', profile.id, { username: e.target.value })
                                }
                                className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                                placeholder="Username"
                            />
                            <input
                                type="url"
                                value={profile.url}
                                onChange={(e) =>
                                    updateEntry('basics.profiles', profile.id, { url: e.target.value })
                                }
                                className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:border-neutral-400 focus:outline-none transition-colors"
                                placeholder="https://linkedin.com/in/username"
                            />
                        </div>
                    ))}
                </div>
                <button
                    onClick={addProfile}
                    className="mt-2 px-4 py-2 text-neutral-700 border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors text-sm font-medium"
                >
                    + Add Profile
                </button>
            </div>
        </div>
    );
}
