# Sample CV Data

This folder contains sample CV/resume data files in JSON format that you can use to test the CV Creator application. Each file represents a different professional profile with realistic data.

## Available Samples

### 1. **software-developer.json**
- **Profile:** Sarah Chen - Senior Full Stack Developer
- **Template:** Modern
- **Color:** Blue (#3b82f6)
- **Features:**
  - Comprehensive work experience with 3 positions
  - Multiple technical skills categories
  - Certifications (AWS, MongoDB)
  - Publications (technical blog posts)
  - Volunteer work
  - 3 languages

### 2. **ux-designer.json**
- **Profile:** Marcus Rodriguez - Senior UX/UI Designer
- **Template:** Creative
- **Color:** Purple (#8b5cf6)
- **Features:**
  - Design-focused work history
  - Design tool proficiencies
  - UX research skills
  - Certifications (Google UX, CUA)
  - Publications (design articles)
  - Volunteer design work
  - Portfolio links (Dribbble, Behance)

### 3. **data-scientist.json**
- **Profile:** Dr. Emily Watson - Senior Data Scientist
- **Template:** Classic
- **Color:** Green (#059669)
- **Features:**
  - PhD qualification
  - Research publications (4 academic papers)
  - Advanced technical skills (ML, Python, R)
  - Multiple certifications
  - Demonstrates academic background
  - Publication-heavy profile

### 4. **marketing-manager.json**
- **Profile:** Alex Thompson - Digital Marketing Manager
- **Template:** Minimal
- **Color:** Pink (#ec4899)
- **Features:**
  - One-page mode enabled
  - Marketing-specific skills
  - Multiple certifications (Google Analytics, HubSpot, etc.)
  - Social media profiles
  - Demonstrates B2B marketing experience
  - Volunteer mentorship

## How to Use

1. **Import via UI:**
   - Click the "Import JSON" button in the toolbar
   - Select any of the sample files
   - The CV data will load into the application

2. **Test Different Templates:**
   - Each sample uses a different template
   - After importing, go to Settings to try other templates
   - Change colors to see different variations

3. **Test Features:**
   - **Section Reordering:** Drag sections to reorder them
   - **Section Collapsing:** Click sections to expand/collapse
   - **Drag Items:** Within sections, drag individual items to reorder
   - **Export:** Test JSON/HTML/PDF export with pre-filled data

4. **Modify Data:**
   - Edit any field to see live preview updates
   - Add/remove items from sections
   - Test empty states by removing all items

## File Structure

All files follow the JSON Resume Schema with a custom `meta` section:

```json
{
  "basics": { ... },
  "work": [ ... ],
  "education": [ ... ],
  "skills": [ ... ],
  "volunteer": [ ... ],
  "languages": [ ... ],
  "interests": [ ... ],
  "certifications": [ ... ],
  "publications": [ ... ],
  "meta": {
    "templateName": "modern" | "classic" | "minimal" | "creative",
    "themeColor": "#hexcolor",
    "onePageMode": true | false,
    "sectionOrder": [ ... ]
  }
}
```

## Tips

- **Mix and Match:** Import a sample and modify it with your own data
- **Compare Templates:** Import the same sample multiple times and try different templates
- **Test Edge Cases:** Try removing sections or leaving them empty to see how the app handles it
- **Custom Order:** Each sample has a different `sectionOrder` to demonstrate the reordering feature

## Creating Your Own Samples

You can create your own sample files by:
1. Using the application to build a CV
2. Exporting it as JSON
3. Saving it to this folder for future use

All samples are compatible with the standard JSON Resume Schema, making them portable to other CV tools.
