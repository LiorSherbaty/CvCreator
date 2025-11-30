import { useResumeStore } from '../../store';
import { Upload } from 'lucide-react';

export function BasicsForm() {
    const resume = useResumeStore((state) => state.resume);
    const updateSection = useResumeStore((state) => state.updateSection);
    const addEntry = useResumeStore((state) => state.addEntry);
    const removeEntry = useResumeStore((state) => state.removeEntry);
    const updateEntry = useResumeStore((state) => state.updateEntry);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Picture
                </label>
                {resume.basics.image && (
                    <div className="mb-3">
                        <img
                            src={resume.basics.image}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                        />
                    </div>
                )}
                <label className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors w-fit">
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                    type="text"
                    value={resume.basics.name}
                    onChange={(e) => updateSection('basics', { name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                />
            </div>

            {/* Job Title */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                    type="text"
                    value={resume.basics.label}
                    onChange={(e) => updateSection('basics', { label: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Software Engineer"
                />
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        value={resume.basics.email}
                        onChange={(e) => updateSection('basics', { email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                        type="tel"
                        value={resume.basics.phone}
                        onChange={(e) => updateSection('basics', { phone: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+1 234 567 890"
                    />
                </div>
            </div>

            {/* Website */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <input
                    type="url"
                    value={resume.basics.url}
                    onChange={(e) => updateSection('basics', { url: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://example.com"
                />
            </div>

            {/* Location */}
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                        type="text"
                        value={resume.basics.location.city}
                        onChange={(e) =>
                            updateSection('basics', {
                                location: { ...resume.basics.location, city: e.target.value },
                            })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="New York"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country Code</label>
                    <input
                        type="text"
                        value={resume.basics.location.countryCode}
                        onChange={(e) =>
                            updateSection('basics', {
                                location: { ...resume.basics.location, countryCode: e.target.value },
                            })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="US"
                    />
                </div>
            </div>

            {/* Summary */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Professional Summary
                </label>
                <textarea
                    value={resume.basics.summary}
                    onChange={(e) => updateSection('basics', { summary: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                    placeholder="Brief professional summary..."
                />
            </div>

            {/* Social Profiles */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Social Profiles</label>
                <div className="space-y-2">
                    {resume.basics.profiles.map((profile, index) => (
                        <div key={index} className="space-y-2 p-3 border border-gray-200 rounded-lg">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={profile.network}
                                    onChange={(e) =>
                                        updateEntry('basics.profiles', index, { network: e.target.value })
                                    }
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Network (e.g., LinkedIn)"
                                />
                                <button
                                    onClick={() => removeEntry('basics.profiles', index)}
                                    className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                                >
                                    Remove
                                </button>
                            </div>
                            <input
                                type="text"
                                value={profile.username}
                                onChange={(e) =>
                                    updateEntry('basics.profiles', index, { username: e.target.value })
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Username"
                            />
                            <input
                                type="url"
                                value={profile.url}
                                onChange={(e) =>
                                    updateEntry('basics.profiles', index, { url: e.target.value })
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="https://linkedin.com/in/username"
                            />
                        </div>
                    ))}
                </div>
                <button
                    onClick={addProfile}
                    className="mt-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
                >
                    + Add Profile
                </button>
            </div>
        </div>
    );
}
