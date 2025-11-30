import Mustache from 'mustache';
import { ResumeSchema } from './types';

// Import templates
import modernHtml from './templates/modern/index.html?raw';
import modernCss from './templates/modern/styles.css?raw';
import classicHtml from './templates/classic/index.html?raw';
import classicCss from './templates/classic/styles.css?raw';
import minimalHtml from './templates/minimal/index.html?raw';
import minimalCss from './templates/minimal/styles.css?raw';
import creativeHtml from './templates/creative/index.html?raw';
import creativeCss from './templates/creative/styles.css?raw';
import professionalHtml from './templates/professional/index.html?raw';
import professionalCss from './templates/professional/styles.css?raw';
import atsHtml from './templates/ats/index.html?raw';
import atsCss from './templates/ats/styles.css?raw';
import corporateHtml from './templates/corporate/index.html?raw';
import corporateCss from './templates/corporate/styles.css?raw';
import elegantHtml from './templates/elegant/index.html?raw';
import elegantCss from './templates/elegant/styles.css?raw';
import compactHtml from './templates/compact/index.html?raw';
import compactCss from './templates/compact/styles.css?raw';

interface TemplateConfig {
    html: string;
    css: string;
}

const templates: Record<string, TemplateConfig> = {
    modern: {
        html: modernHtml,
        css: modernCss,
    },
    classic: {
        html: classicHtml,
        css: classicCss,
    },
    minimal: {
        html: minimalHtml,
        css: minimalCss,
    },
    creative: {
        html: creativeHtml,
        css: creativeCss,
    },
    professional: {
        html: professionalHtml,
        css: professionalCss,
    },
    ats: {
        html: atsHtml,
        css: atsCss,
    },
    corporate: {
        html: corporateHtml,
        css: corporateCss,
    },
    elegant: {
        html: elegantHtml,
        css: elegantCss,
    },
    compact: {
        html: compactHtml,
        css: compactCss,
    },
};

/**
 * Reorders sections in the rendered HTML based on sectionOrder
 * @param html - The rendered HTML string
 * @param sectionOrder - Array of section names in desired order
 * @returns HTML string with sections reordered
 */
function reorderSections(html: string, sectionOrder: string[]): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Find all elements with data-section attribute
    const sectionElements = doc.querySelectorAll('[data-section]');

    if (sectionElements.length === 0) {
        return html;
    }

    // Group sections by their parent element
    const sectionsByParent = new Map<Element, Element[]>();

    sectionElements.forEach((section) => {
        const parent = section.parentElement;
        if (parent) {
            if (!sectionsByParent.has(parent)) {
                sectionsByParent.set(parent, []);
            }
            sectionsByParent.get(parent)!.push(section);
        }
    });

    // Reorder sections within each parent
    sectionsByParent.forEach((sections, parent) => {
        // Sort sections based on sectionOrder
        const sortedSections = [...sections].sort((a, b) => {
            const aSection = a.getAttribute('data-section') || '';
            const bSection = b.getAttribute('data-section') || '';
            const aIndex = sectionOrder.indexOf(aSection);
            const bIndex = sectionOrder.indexOf(bSection);

            // If not in sectionOrder, keep at end
            const aPos = aIndex === -1 ? Infinity : aIndex;
            const bPos = bIndex === -1 ? Infinity : bIndex;

            return aPos - bPos;
        });

        // Find the position of the first section in the parent
        const firstSectionIndex = Array.from(parent.children).findIndex(
            (child) => sections.includes(child)
        );

        // Remove all sections from parent
        sections.forEach((section) => section.remove());

        // Insert sorted sections at the original position
        const referenceNode = parent.children[firstSectionIndex] || null;
        sortedSections.forEach((section) => {
            parent.insertBefore(section, referenceNode);
        });
    });

    // Serialize back to HTML string
    return doc.documentElement.outerHTML;
}

/**
 * Renders a CV template with the provided resume data
 * @param templateName - Name of the template to use
 * @param resumeData - Resume data conforming to ResumeSchema
 * @returns Complete HTML string with embedded styles
 */
export function renderTemplate(
    templateName: string,
    resumeData: ResumeSchema
): string {
    const template = templates[templateName];

    if (!template) {
        throw new Error(`Template "${templateName}" not found`);
    }

    // First, render the CSS with the theme color
    const renderedCss = Mustache.render(template.css, {
        themeColor: resumeData.meta.themeColor,
    });

    // Prepare data for Mustache rendering
    const templateData = {
        ...resumeData,
        styles: renderedCss, // Inject the rendered CSS
    };

    // Render the complete HTML
    let renderedHtml = Mustache.render(template.html, templateData);

    // Reorder sections based on sectionOrder
    if (resumeData.meta.sectionOrder && resumeData.meta.sectionOrder.length > 0) {
        renderedHtml = reorderSections(renderedHtml, resumeData.meta.sectionOrder);
    }

    return renderedHtml;
}

/**
 * Hook for rendering templates in React components
 */
export function useTemplateRenderer() {
    return {
        renderTemplate,
        availableTemplates: Object.keys(templates),
    };
}
