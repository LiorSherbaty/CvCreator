// JSON Resume Schema (official standard with custom meta field)
// Naming conventions follow CLAUDE.md: Interfaces prefixed with 'I', Enums with 'E'

// Generate unique ID for array items
// Fallback for non-secure contexts (HTTP on mobile)
export const generateId = (): string => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        try {
            return crypto.randomUUID();
        } catch {
            // Falls through to fallback
        }
    }
    // Fallback UUID generator
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

// Location interface
export interface ILocation {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
}

// Social profile interface
export interface IProfile {
    id: string;
    network: string;
    username: string;
    url: string;
}

// Work experience entry
export interface IWorkEntry {
    id: string;
    name: string; // Company
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[]; // Bullet points
}

// Education entry
export interface IEducationEntry {
    id: string;
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
}

// Skill entry
export interface ISkillEntry {
    id: string;
    name: string;
    level: string;
    keywords: string[];
}

// Volunteer entry
export interface IVolunteerEntry {
    id: string;
    organization: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

// Language entry
export interface ILanguageEntry {
    id: string;
    language: string;
    fluency: string; // e.g., "Native", "Fluent", "Professional"
}

// Interest entry
export interface IInterestEntry {
    id: string;
    name: string;
    keywords: string[];
}

// Certification entry
export interface ICertificationEntry {
    id: string;
    name: string;
    date: string;
    issuer: string;
    url: string;
}

// Publication entry
export interface IPublicationEntry {
    id: string;
    name: string;
    publisher: string;
    releaseDate: string;
    url: string;
    summary: string;
}

// Basics section
export interface IBasics {
    name: string;
    label: string; // Job Title
    image: string; // Base64 URL
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: ILocation;
    profiles: IProfile[];
}

// Meta section for app state
export interface IMeta {
    templateName: string;
    themeColor: string; // Hex code
    onePageMode: boolean;
    sectionOrder: string[]; // Order of sections (excluding 'settings' which is always first)
}

// Main Resume Schema
export interface IResumeSchema {
    basics: IBasics;
    work: IWorkEntry[];
    education: IEducationEntry[];
    skills: ISkillEntry[];
    volunteer: IVolunteerEntry[];
    languages: ILanguageEntry[];
    interests: IInterestEntry[];
    certifications: ICertificationEntry[];
    publications: IPublicationEntry[];
    meta: IMeta;
}

// Type alias for backward compatibility during migration
export type ResumeSchema = IResumeSchema;

// Array section types for type-safe store operations
export type ArraySectionKey = 'work' | 'education' | 'skills' | 'volunteer' | 'languages' | 'interests' | 'certifications' | 'publications';
export type ProfileSectionKey = 'basics.profiles';
export type AllArraySectionKey = ArraySectionKey | ProfileSectionKey;

// Type mapping for array entries
export interface IArrayEntryMap {
    work: IWorkEntry;
    education: IEducationEntry;
    skills: ISkillEntry;
    volunteer: IVolunteerEntry;
    languages: ILanguageEntry;
    interests: IInterestEntry;
    certifications: ICertificationEntry;
    publications: IPublicationEntry;
    'basics.profiles': IProfile;
}

// Initial empty resume data
export const initialResumeData: ResumeSchema = {
    basics: {
        name: '',
        label: '',
        image: '',
        email: '',
        phone: '',
        url: '',
        summary: '',
        location: {
            address: '',
            postalCode: '',
            city: '',
            countryCode: '',
            region: '',
        },
        profiles: [],
    },
    work: [],
    education: [],
    skills: [],
    volunteer: [],
    languages: [],
    interests: [],
    certifications: [],
    publications: [],
    meta: {
        templateName: 'modern',
        themeColor: '#3b82f6', // Blue by default
        onePageMode: false,
        sectionOrder: ['basics', 'work', 'education', 'skills', 'volunteer', 'certifications', 'publications', 'languages', 'interests'],
    },
};
