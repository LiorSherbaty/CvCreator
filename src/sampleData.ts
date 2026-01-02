import { IResumeSchema, generateId } from './types';

/**
 * Sample data to demonstrate template design when user hasn't entered their own data yet
 */
export const sampleResumeData: Omit<IResumeSchema, 'meta'> = {
    basics: {
        name: 'John Doe',
        label: 'Full Stack Developer',
        image: '',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        url: 'https://johndoe.dev',
        summary: 'Experienced software developer with a passion for creating elegant solutions to complex problems. Specialized in modern web technologies and cloud architecture.',
        location: {
            address: '',
            postalCode: '',
            city: 'San Francisco',
            countryCode: 'US',
            region: 'California',
        },
        profiles: [
            {
                id: generateId(),
                network: 'LinkedIn',
                username: 'johndoe',
                url: 'https://linkedin.com/in/johndoe',
            },
            {
                id: generateId(),
                network: 'GitHub',
                username: 'johndoe',
                url: 'https://github.com/johndoe',
            },
        ],
    },
    work: [
        {
            id: generateId(),
            name: 'Tech Company Inc',
            position: 'Senior Software Engineer',
            url: 'https://techcompany.com',
            startDate: 'Jan 2020',
            endDate: 'Present',
            summary: 'Leading development of cloud-native applications and microservices.',
            highlights: [
                'Architected and deployed scalable microservices handling 1M+ requests/day',
                'Reduced deployment time by 60% through CI/CD pipeline optimization',
                'Mentored junior developers and conducted code reviews',
            ],
        },
        {
            id: generateId(),
            name: 'StartUp Co',
            position: 'Full Stack Developer',
            url: '',
            startDate: 'Jun 2018',
            endDate: 'Dec 2019',
            summary: 'Built web applications from concept to production.',
            highlights: [
                'Developed responsive web applications using React and Node.js',
                'Implemented real-time features using WebSockets',
            ],
        },
    ],
    education: [
        {
            id: generateId(),
            institution: 'University of Technology',
            url: '',
            area: 'Computer Science',
            studyType: 'Bachelor of Science',
            startDate: '2014',
            endDate: '2018',
            score: '3.8 GPA',
        },
    ],
    skills: [
        {
            id: generateId(),
            name: 'Frontend Development',
            level: 'Expert',
            keywords: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
        },
        {
            id: generateId(),
            name: 'Backend Development',
            level: 'Advanced',
            keywords: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
        },
        {
            id: generateId(),
            name: 'DevOps',
            level: 'Intermediate',
            keywords: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
        },
    ],
    volunteer: [
        {
            id: generateId(),
            organization: 'Code for Good',
            position: 'Volunteer Developer',
            url: '',
            startDate: '2019',
            endDate: 'Present',
            summary: 'Building websites for non-profit organizations.',
            highlights: [
                'Created websites for 5+ local charities',
            ],
        },
    ],
    languages: [
        {
            id: generateId(),
            language: 'English',
            fluency: 'Native',
        },
        {
            id: generateId(),
            language: 'Spanish',
            fluency: 'Professional',
        },
    ],
    interests: [
        {
            id: generateId(),
            name: 'Open Source',
            keywords: ['Contributing to OSS projects', 'Building developer tools'],
        },
        {
            id: generateId(),
            name: 'Photography',
            keywords: ['Landscape', 'Street photography'],
        },
    ],
    certifications: [
        {
            id: generateId(),
            name: 'AWS Certified Solutions Architect',
            date: '2022',
            issuer: 'Amazon Web Services',
            url: '',
        },
    ],
    publications: [
        {
            id: generateId(),
            name: 'Building Scalable Web Applications',
            publisher: 'Tech Blog',
            releaseDate: '2023',
            url: 'https://techblog.com/article',
            summary: 'An in-depth guide to building and scaling modern web applications.',
        },
    ],
};

/**
 * Check if the resume data is mostly empty (user hasn't started filling it out)
 */
export function isResumeEmpty(resume: IResumeSchema): boolean {
    const hasBasicInfo = resume.basics.name.trim() !== '' || resume.basics.email.trim() !== '';
    const hasContent = resume.work.length > 0 || resume.education.length > 0 || resume.skills.length > 0;

    return !hasBasicInfo && !hasContent;
}

/**
 * Get resume data with sample data fallback for preview
 */
export function getPreviewData(resume: IResumeSchema): IResumeSchema {
    if (isResumeEmpty(resume)) {
        return {
            ...sampleResumeData,
            meta: resume.meta, // Keep user's template and color choices
        };
    }
    return resume;
}
