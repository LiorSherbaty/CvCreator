# Project Context: Static CV Creator

* **Role:** You are a Senior React Architect and UI/UX Specialist.
* **Goal:** Build a purely static, client-side CV Creator application.
* **Constraint:** No backend, no user authentication, desktop-first UI.

## 1. Technology Stack

* **Framework:** React 18+ (Vite)
* **Language:** TypeScript
* **Styling (App):** Tailwind CSS (for the editor interface)
* **Styling (CV Preview):** Raw CSS (injected into iframe)
* **State Management:** Zustand (with persist middleware)
* **Templating Engine:** Mustache.js (Logic-less templates)
* **Icons:** Lucide React
* **Drag & Drop:** `@dnd-kit/core` (for reordering list items)

## 2. Architectural Guidelines

### A. Separation of Concerns (The "Iframe Firewall")
To prevent the CV styles from conflicting with the Application UI (Tailwind), the CV Preview must be rendered inside a sandboxed `<iframe>`.
* The **Editor** runs in the main window using React + Tailwind.
* The **Preview** runs inside the iframe.
* **Communication:** The React app renders the Mustache template to a string and injects it into the iframe's `srcDoc` or `contentDocument.body`.

### B. Template System ("Templates as Data")
Templates are not React components. They are raw HTML strings with Mustache placeholders.
* **Storage:** `/src/templates/{templateName}/index.html` (imported via Vite `?raw` suffix).
* **Styling:** `/src/templates/{templateName}/styles.css` (imported via Vite `?inline` or `?raw` suffix).
* **Rendering:** `Mustache.render(templateString, resumeData)`.

### C. PDF Generation Strategy
Do **NOT** use jspdf or html2canvas (quality is poor/blurry).
* **Method:** Native Browser Print.
* **Implementation:**
    * The Template CSS must contain `@media print` rules (e.g., `@page { size: A4; margin: 0; }`).
    * The "Download PDF" button triggers `iframeRef.current.contentWindow.print()`.
    * The user saves the file as PDF via the browser dialog.

### D. Data Persistence
Use `zustand/middleware/persist` to save the state to `localStorage`.
* **Images (Profile Pictures):** Must be converted to Base64 strings before storing.

## 3. Data Schema (JSON Resume Standard)

The app must adhere to this interface to support standard Import/Export.

```typescript
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
  // Custom meta field for app state, not part of official schema
  meta: {
    templateName: string;
    themeColor: string; // Hex code
  };
}
```

## 4. Implementation Phases

* **Phase 1: Core Setup & Store**
    * Initialize Vite project.
    * Setup `useResumeStore` with Zustand.
    * Implement `updateSection`, `addEntry`, `removeEntry`, `reorderEntry` actions.
* **Phase 2: The Template Engine**
    * Create a `TemplateRenderer` utility.
    * Create a "Modern" dummy template (HTML + CSS) using Mustache tags (e.g., `{{basics.name}}`).
    * Ensure the utility accepts `(templateName, data)` and returns the final HTML string.
* **Phase 3: The Split Layout**
    * **Left Panel:** Editor (Accordion style).
    * **Right Panel:** Live Preview (Iframe).
    * **Sync:** `useEffect` in the Preview component listens to store changes -> re-renders Mustache -> updates Iframe body.
* **Phase 4: Inputs & Forms**
    * Create generic `FormSection` components.
    * Handle Array fields (Work/Education) with "Add Item" buttons.
    * Handle Image Upload -> Base64 conversion.
* **Phase 5: Import/Export**
    * **Export JSON:** `JSON.stringify` state to blob.
    * **Import JSON:** FileReader -> Parse -> Validate -> Set State.
    * **Export HTML:** Save the rendered string to `.html`.
    * **Print:** Trigger iframe print.

## 5. Execution Commands (Prompts for Gemini CLI)

* **Step 1: Scaffolding & State**
    > "Using the context provided, generate the useResumeStore.ts using Zustand. It should strictly follow the ResumeSchema interface defined in the context. Include the persist middleware. Also, provide the ResumeSchema TypeScript interface in a separate file types.ts."

* **Step 2: Template Engine**
    > "Create a sample HTML template (modern.html) using Mustache syntax and a corresponding CSS file (modern.css) that uses CSS variables for colors. Then, write a React hook or utility function useTemplateRenderer that takes the resume data and template name, and returns the combined HTML string. Use Vite's ?raw import for loading the files."

* **Step 3: Preview Component**
    > "Generate the Preview component. It should contain an <iframe>. The component must subscribe to the useResumeStore. On data change, use the renderer from Step 2 to generate HTML and write it into the iframe. Ensure the iframe height adjusts to content or fills the screen."

* **Step 4: Editor Components**
    > "Generate the Editor Sidebar components. Create a BasicsForm for simple fields and a ListForm for array fields (Work/Education). Use Tailwind CSS for styling. These forms must connect to the useResumeStore actions."

* **Step 5: Main App Integration**
    > "Put it all together in App.tsx. Create a split-screen layout (Left: Editor, Right: Preview). Add a Toolbar at the top with 'Export JSON', 'Import JSON', and 'Download PDF' buttons. Implement the export logic."