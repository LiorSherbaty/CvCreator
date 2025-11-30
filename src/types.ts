// JSON Resume Schema (official standard with custom meta field)
export interface ResumeSchema {
    basics: {
        name: string;
        label: string; // Job Title
        image: string; // Base64 URL
        email: string;
        phone: string;
        url: string;
        summary: string;
        location: {
            address: string;
            postalCode: string;
            city: string;
            countryCode: string;
            region: string;
        };
        profiles: Array<{
            network: string;
            username: string;
            url: string;
        }>;
    };
    work: Array<{
        name: string; // Company
        position: string;
        url: string;
        startDate: string;
        endDate: string;
        summary: string;
        highlights: string[]; // Bullet points
    }>;
    education: Array<{
        institution: string;
        url: string;
        area: string;
        studyType: string;
        startDate: string;
        endDate: string;
        score: string;
    }>;
    skills: Array<{
        name: string;
        level: string;
        keywords: string[];
    }>;
    volunteer: Array<{
        organization: string;
        position: string;
        url: string;
        startDate: string;
        endDate: string;
        summary: string;
        highlights: string[];
    }>;
    languages: Array<{
        language: string;
        fluency: string; // e.g., "Native", "Fluent", "Professional"
    }>;
    interests: Array<{
        name: string;
        keywords: string[];
    }>;
    certifications: Array<{
        name: string;
        date: string;
        issuer: string;
        url: string;
    }>;
    publications: Array<{
        name: string;
        publisher: string;
        releaseDate: string;
        url: string;
        summary: string;
    }>;
    // Custom meta field for app state, not part of official schema
    meta: {
        templateName: string;
        themeColor: string; // Hex code
        onePageMode: boolean;
        sectionOrder: string[]; // Order of sections (excluding 'settings' which is always first)
    };
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
