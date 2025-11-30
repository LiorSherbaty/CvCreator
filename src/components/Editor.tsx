import { useState } from 'react';
import { ChevronDown, ChevronUp, User, Briefcase, GraduationCap, Wrench, Heart, Globe, Award, BookOpen, Settings, Smile, GripVertical } from 'lucide-react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core';
import {
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { BasicsForm } from './forms/BasicsForm';
import { WorkForm } from './forms/WorkForm';
import { EducationForm } from './forms/EducationForm';
import { SkillsForm } from './forms/SkillsForm';
import { VolunteerForm } from './forms/VolunteerForm';
import { LanguagesForm } from './forms/LanguagesForm';
import { InterestsForm } from './forms/InterestsForm';
import { CertificationsForm } from './forms/CertificationsForm';
import { PublicationsForm } from './forms/PublicationsForm';
import { SettingsForm } from './forms/SettingsForm';
import { useResumeStore } from '../store';

type Section = 'settings' | 'basics' | 'work' | 'education' | 'skills' | 'volunteer' | 'languages' | 'interests' | 'certifications' | 'publications';

interface SectionConfig {
    id: Section;
    title: string;
    icon: React.ReactNode;
    component: React.ReactNode;
}

// Sortable Section Item Component
function SortableSection({
    section,
    isExpanded,
    onToggle
}: {
    section: SectionConfig;
    isExpanded: boolean;
    onToggle: () => void;
}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: section.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${
                isExpanded
                    ? 'border-blue-200 shadow-md ring-1 ring-blue-100'
                    : 'border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
        >
            <button
                onClick={onToggle}
                className={`w-full px-5 py-4 flex items-center justify-between text-left transition-colors ${
                    isExpanded ? 'bg-slate-50/50' : 'bg-white hover:bg-slate-50'
                }`}
            >
                <div className="flex items-center gap-3">
                    <div
                        {...attributes}
                        {...listeners}
                        className="cursor-grab active:cursor-grabbing p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                        <GripVertical className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className={`p-2 rounded-lg ${
                        isExpanded ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                    }`}>
                        {section.icon}
                    </div>
                    <span className={`font-semibold ${
                        isExpanded ? 'text-slate-800' : 'text-slate-700'
                    }`}>
                        {section.title}
                    </span>
                </div>
                {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
            </button>

            {isExpanded && (
                <div className="px-5 py-5 border-t border-slate-100 animate-in slide-in-from-top-2 duration-200">
                    {section.component}
                </div>
            )}
        </div>
    );
}

// Regular (non-sortable) Section Component for Settings
function RegularSection({
    section,
    isExpanded,
    onToggle
}: {
    section: SectionConfig;
    isExpanded: boolean;
    onToggle: () => void;
}) {
    return (
        <div
            className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${
                isExpanded
                    ? 'border-blue-200 shadow-md ring-1 ring-blue-100'
                    : 'border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
        >
            <button
                onClick={onToggle}
                className={`w-full px-5 py-4 flex items-center justify-between text-left transition-colors ${
                    isExpanded ? 'bg-slate-50/50' : 'bg-white hover:bg-slate-50'
                }`}
            >
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                        isExpanded ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
                    }`}>
                        {section.icon}
                    </div>
                    <span className={`font-semibold ${
                        isExpanded ? 'text-slate-800' : 'text-slate-700'
                    }`}>
                        {section.title}
                    </span>
                </div>
                {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
            </button>

            {isExpanded && (
                <div className="px-5 py-5 border-t border-slate-100 animate-in slide-in-from-top-2 duration-200">
                    {section.component}
                </div>
            )}
        </div>
    );
}

export function Editor() {
    const [expandedSection, setExpandedSection] = useState<Section | null>('settings');
    const sectionOrder = useResumeStore((state) => state.resume.meta.sectionOrder);
    const reorderSections = useResumeStore((state) => state.reorderSections);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    // Define all sections with their configs
    const allSectionConfigs: Record<Section, SectionConfig> = {
        settings: { id: 'settings', title: 'Settings & Template', icon: <Settings className="w-4 h-4" />, component: <SettingsForm /> },
        basics: { id: 'basics', title: 'Personal Information', icon: <User className="w-4 h-4" />, component: <BasicsForm /> },
        work: { id: 'work', title: 'Work Experience', icon: <Briefcase className="w-4 h-4" />, component: <WorkForm /> },
        education: { id: 'education', title: 'Education', icon: <GraduationCap className="w-4 h-4" />, component: <EducationForm /> },
        skills: { id: 'skills', title: 'Skills', icon: <Wrench className="w-4 h-4" />, component: <SkillsForm /> },
        volunteer: { id: 'volunteer', title: 'Volunteer Work', icon: <Heart className="w-4 h-4" />, component: <VolunteerForm /> },
        certifications: { id: 'certifications', title: 'Certifications', icon: <Award className="w-4 h-4" />, component: <CertificationsForm /> },
        publications: { id: 'publications', title: 'Publications', icon: <BookOpen className="w-4 h-4" />, component: <PublicationsForm /> },
        languages: { id: 'languages', title: 'Languages', icon: <Globe className="w-4 h-4" />, component: <LanguagesForm /> },
        interests: { id: 'interests', title: 'Hobbies & Interests', icon: <Smile className="w-4 h-4" />, component: <InterestsForm /> },
    };

    // Get ordered sections (excluding settings)
    const orderedSections = sectionOrder.map(id => allSectionConfigs[id as Section]).filter(Boolean);

    const toggleSection = (section: Section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = sectionOrder.indexOf(active.id as string);
            const newIndex = sectionOrder.indexOf(over.id as string);
            reorderSections(oldIndex, newIndex);
        }
    };

    return (
        <div className="w-full h-full overflow-auto bg-slate-50 border-r border-slate-200 custom-scrollbar">
            <div className="p-6 max-w-2xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-800">Editor</h2>
                    <p className="text-slate-500 text-sm mt-1">Customize your CV content and appearance</p>
                </div>

                <div className="space-y-3">
                    {/* Settings section - always first, not draggable */}
                    <RegularSection
                        section={allSectionConfigs.settings}
                        isExpanded={expandedSection === 'settings'}
                        onToggle={() => toggleSection('settings')}
                    />

                    {/* Draggable sections */}
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={sectionOrder}
                            strategy={verticalListSortingStrategy}
                        >
                            {orderedSections.map((section) => (
                                <SortableSection
                                    key={section.id}
                                    section={section}
                                    isExpanded={expandedSection === section.id}
                                    onToggle={() => toggleSection(section.id)}
                                />
                            ))}
                        </SortableContext>
                    </DndContext>
                </div>
            </div>
        </div>
    );
}
