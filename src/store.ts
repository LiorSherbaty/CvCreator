import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ResumeSchema, initialResumeData } from './types';

interface ResumeStore {
    resume: ResumeSchema;

    // Update any section of the resume
    updateSection: <K extends keyof ResumeSchema>(
        section: K,
        data: Partial<ResumeSchema[K]>
    ) => void;

    // Add entry to array fields (work, education, skills, profiles, volunteer, languages, interests, certifications, publications)
    addEntry: (section: 'work' | 'education' | 'skills' | 'basics.profiles' | 'volunteer' | 'languages' | 'interests' | 'certifications' | 'publications', entry: any) => void;

    // Remove entry from array fields
    removeEntry: (section: 'work' | 'education' | 'skills' | 'basics.profiles' | 'volunteer' | 'languages' | 'interests' | 'certifications' | 'publications', index: number) => void;

    // Update entry in array fields
    updateEntry: (section: 'work' | 'education' | 'skills' | 'basics.profiles' | 'volunteer' | 'languages' | 'interests' | 'certifications' | 'publications', index: number, data: any) => void;

    // Reorder entries (for drag and drop)
    reorderEntry: (section: 'work' | 'education' | 'skills' | 'basics.profiles' | 'volunteer' | 'languages' | 'interests' | 'certifications' | 'publications', fromIndex: number, toIndex: number) => void;

    // Reorder sections
    reorderSections: (fromIndex: number, toIndex: number) => void;

    // Import resume data
    importResume: (data: ResumeSchema) => void;

    // Reset to initial state
    resetResume: () => void;
}

export const useResumeStore = create<ResumeStore>()(
    persist(
        (set) => ({
            resume: initialResumeData,

            updateSection: (section, data) =>
                set((state) => ({
                    resume: {
                        ...state.resume,
                        [section]: {
                            ...state.resume[section],
                            ...data,
                        },
                    },
                })),

            addEntry: (section, entry) =>
                set((state) => {
                    if (section === 'basics.profiles') {
                        return {
                            resume: {
                                ...state.resume,
                                basics: {
                                    ...state.resume.basics,
                                    profiles: [...state.resume.basics.profiles, entry],
                                },
                            },
                        };
                    }

                    return {
                        resume: {
                            ...state.resume,
                            [section]: [...state.resume[section as keyof ResumeSchema] as any[], entry],
                        },
                    };
                }),

            removeEntry: (section, index) =>
                set((state) => {
                    if (section === 'basics.profiles') {
                        return {
                            resume: {
                                ...state.resume,
                                basics: {
                                    ...state.resume.basics,
                                    profiles: state.resume.basics.profiles.filter((_, i) => i !== index),
                                },
                            },
                        };
                    }

                    return {
                        resume: {
                            ...state.resume,
                            [section]: (state.resume[section as keyof ResumeSchema] as any[]).filter(
                                (_, i) => i !== index
                            ),
                        },
                    };
                }),

            updateEntry: (section, index, data) =>
                set((state) => {
                    if (section === 'basics.profiles') {
                        return {
                            resume: {
                                ...state.resume,
                                basics: {
                                    ...state.resume.basics,
                                    profiles: state.resume.basics.profiles.map((item, i) =>
                                        i === index ? { ...item, ...data } : item
                                    ),
                                },
                            },
                        };
                    }

                    return {
                        resume: {
                            ...state.resume,
                            [section]: (state.resume[section as keyof ResumeSchema] as any[]).map((item, i) =>
                                i === index ? { ...item, ...data } : item
                            ),
                        },
                    };
                }),

            reorderEntry: (section, fromIndex, toIndex) =>
                set((state) => {
                    let array: any[];

                    if (section === 'basics.profiles') {
                        array = [...state.resume.basics.profiles];
                    } else {
                        array = [...(state.resume[section as keyof ResumeSchema] as any[])];
                    }

                    const [removed] = array.splice(fromIndex, 1);
                    array.splice(toIndex, 0, removed);

                    if (section === 'basics.profiles') {
                        return {
                            resume: {
                                ...state.resume,
                                basics: {
                                    ...state.resume.basics,
                                    profiles: array,
                                },
                            },
                        };
                    }

                    return {
                        resume: {
                            ...state.resume,
                            [section]: array,
                        },
                    };
                }),

            reorderSections: (fromIndex, toIndex) =>
                set((state) => {
                    const newOrder = [...state.resume.meta.sectionOrder];
                    const [removed] = newOrder.splice(fromIndex, 1);
                    newOrder.splice(toIndex, 0, removed);

                    return {
                        resume: {
                            ...state.resume,
                            meta: {
                                ...state.resume.meta,
                                sectionOrder: newOrder,
                            },
                        },
                    };
                }),

            importResume: (data) =>
                set(() => ({
                    resume: data,
                })),

            resetResume: () =>
                set(() => ({
                    resume: initialResumeData,
                })),
        }),
        {
            name: 'cv-creator-storage', // localStorage key
            version: 1,
            migrate: (persistedState: any, _version: number) => {
                // Ensure sectionOrder exists for backward compatibility
                if (persistedState && persistedState.resume && persistedState.resume.meta) {
                    if (!Array.isArray(persistedState.resume.meta.sectionOrder)) {
                        persistedState.resume.meta.sectionOrder = [
                            'basics', 'work', 'education', 'skills', 'volunteer',
                            'certifications', 'publications', 'languages', 'interests'
                        ];
                    }
                }
                return persistedState;
            },
        }
    )
);
