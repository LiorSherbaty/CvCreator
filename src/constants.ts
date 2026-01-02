// Constants file following CLAUDE.md naming conventions (CAPITAL_LETTERS)

// Storage keys
export const STORAGE_KEY = 'cv-creator-storage';
export const STORAGE_VERSION = 1;

// Timing constants (in milliseconds)
export const HEIGHT_ADJUST_DELAY_INITIAL = 100;
export const HEIGHT_ADJUST_DELAY_FINAL = 500;

// Responsive breakpoints
export const MOBILE_BREAKPOINT = 1024;

// File size limits (in bytes)
export const MAX_IMAGE_SIZE_BYTES = 1024 * 1024; // 1MB
export const MAX_IMAGE_SIZE_MB = 1;

// Default values
export const DEFAULT_THEME_COLOR = '#3b82f6';
export const DEFAULT_TEMPLATE = 'modern';

// Section order
export const DEFAULT_SECTION_ORDER = [
    'basics',
    'work',
    'education',
    'skills',
    'volunteer',
    'certifications',
    'publications',
    'languages',
    'interests',
] as const;

// Template names
export const TEMPLATE_NAMES = [
    'modern',
    'classic',
    'minimal',
    'creative',
    'professional',
    'ats',
    'corporate',
    'elegant',
    'compact',
] as const;

// Mobile detection regex
export const MOBILE_USER_AGENT_REGEX = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
