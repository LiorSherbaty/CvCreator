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
};

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
    const renderedHtml = Mustache.render(template.html, templateData);

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
