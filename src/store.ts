import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
    IResumeSchema,
    IArrayEntryMap,
    AllArraySectionKey,
    ArraySectionKey,
    initialResumeData,
    generateId,
} from './types';
import { STORAGE_KEY, STORAGE_VERSION, DEFAULT_SECTION_ORDER } from './constants';

// Interface for the resume store
interface IResumeStore {
    resume: IResumeSchema;

    // Update any section of the resume
    updateSection: <K extends keyof IResumeSchema>(
        section: K,
        data: Partial<IResumeSchema[K]>
    ) => void;

    // Add entry to array fields - uses proper typing with IArrayEntryMap
    addEntry: <K extends AllArraySectionKey>(
        section: K,
        entry: Omit<IArrayEntryMap[K], 'id'>
    ) => void;

    // Remove entry from array fields by ID
    removeEntry: (section: AllArraySectionKey, id: string) => void;

    // Update entry in array fields by ID
    updateEntry: <K extends AllArraySectionKey>(
        section: K,
        id: string,
        data: Partial<Omit<IArrayEntryMap[K], 'id'>>
    ) => void;

    // Reorder entries (for drag and drop) - still uses indices for dnd-kit compatibility
    reorderEntry: (section: AllArraySectionKey, fromIndex: number, toIndex: number) => void;

    // Reorder sections
    reorderSections: (fromIndex: number, toIndex: number) => void;

    // Import resume data
    importResume: (data: IResumeSchema) => void;

    // Reset to initial state
    resetResume: () => void;
}

export const useResumeStore = create<IResumeStore>()(
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
                    // Generate unique ID for new entry
                    const entryWithId = { ...entry, id: generateId() } as IArrayEntryMap[typeof section];

                    if (section === 'basics.profiles') {
                        return {
                            resume: {
                                ...state.resume,
                                basics: {
                                    ...state.resume.basics,
                                    profiles: [...state.resume.basics.profiles, entryWithId as IArrayEntryMap['basics.profiles']],
                                },
                            },
                        };
                    }

                    const sectionKey = section as ArraySectionKey;
                    return {
                        resume: {
                            ...state.resume,
                            [sectionKey]: [...state.resume[sectionKey], entryWithId],
                        },
                    };
                }),

            removeEntry: (section, id) =>
                set((state) => {
                    if (section === 'basics.profiles') {
                        return {
                            resume: {
                                ...state.resume,
                                basics: {
                                    ...state.resume.basics,
                                    profiles: state.resume.basics.profiles.filter((item) => item.id !== id),
                                },
                            },
                        };
                    }

                    const sectionKey = section as ArraySectionKey;
                    return {
                        resume: {
                            ...state.resume,
                            [sectionKey]: state.resume[sectionKey].filter((item) => item.id !== id),
                        },
                    };
                }),

            updateEntry: (section, id, data) =>
                set((state) => {
                    if (section === 'basics.profiles') {
                        return {
                            resume: {
                                ...state.resume,
                                basics: {
                                    ...state.resume.basics,
                                    profiles: state.resume.basics.profiles.map((item) =>
                                        item.id === id ? { ...item, ...data } : item
                                    ),
                                },
                            },
                        };
                    }

                    const sectionKey = section as ArraySectionKey;
                    return {
                        resume: {
                            ...state.resume,
                            [sectionKey]: state.resume[sectionKey].map((item) =>
                                item.id === id ? { ...item, ...data } : item
                            ),
                        },
                    };
                }),

            reorderEntry: (section, fromIndex, toIndex) =>
                set((state) => {
                    if (section === 'basics.profiles') {
                        const array = [...state.resume.basics.profiles];
                        const [removed] = array.splice(fromIndex, 1);
                        array.splice(toIndex, 0, removed);
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

                    const sectionKey = section as ArraySectionKey;
                    const array = [...state.resume[sectionKey]];
                    const [removed] = array.splice(fromIndex, 1);
                    array.splice(toIndex, 0, removed);

                    return {
                        resume: {
                            ...state.resume,
                            [sectionKey]: array,
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
            name: STORAGE_KEY,
            version: STORAGE_VERSION,
            migrate: (persistedState: unknown, version: number) => {
                const state = persistedState as { resume?: IResumeSchema } | null;

                // Ensure sectionOrder exists for backward compatibility
                if (state?.resume?.meta) {
                    if (!Array.isArray(state.resume.meta.sectionOrder)) {
                        state.resume.meta.sectionOrder = [...DEFAULT_SECTION_ORDER];
                    }

                    // Migration: Add IDs to existing entries if missing
                    if (version < STORAGE_VERSION) {
                        const addIdsToArray = <T extends { id?: string }>(arr: T[]): T[] =>
                            arr.map((item) => (item.id ? item : { ...item, id: generateId() }));

                        state.resume.work = addIdsToArray(state.resume.work);
                        state.resume.education = addIdsToArray(state.resume.education);
                        state.resume.skills = addIdsToArray(state.resume.skills);
                        state.resume.volunteer = addIdsToArray(state.resume.volunteer);
                        state.resume.languages = addIdsToArray(state.resume.languages);
                        state.resume.interests = addIdsToArray(state.resume.interests);
                        state.resume.certifications = addIdsToArray(state.resume.certifications);
                        state.resume.publications = addIdsToArray(state.resume.publications);
                        state.resume.basics.profiles = addIdsToArray(state.resume.basics.profiles);
                    }
                }
                return state;
            },
        }
    )
);
