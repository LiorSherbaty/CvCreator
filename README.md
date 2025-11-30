# Static CV Creator

A powerful, privacy-focused, and purely client-side application for building professional resumes/CVs. Built with React, TypeScript, and Tailwind CSS.

![CV Creator Screenshot](https://placehold.co/1200x600/e2e8f0/1e293b?text=CV+Creator+Preview)

## 🚀 Features

*   **100% Client-Side:** No server, no database. Your data never leaves your browser.
*   **Live Preview:** See changes instantly as you edit your resume.
*   **Multiple Templates:** Choose from Classic, Modern, Minimal, and Creative designs.
*   **PDF Export:** Generate high-quality PDFs using native browser printing.
*   **Data Persistence:** Auto-saves your progress to LocalStorage.
*   **Import/Export:** Save your data as JSON to backup or move between devices.
*   **Drag & Drop:** Easily reorder your work experience, education, and skills.
*   **Customizable:** Change theme colors and layout to match your style.

## 🛠️ Tech Stack

*   **Framework:** React 18 (Vite)
*   **Language:** TypeScript
*   **State Management:** Zustand
*   **Styling:** Tailwind CSS (Editor), Raw CSS (Resume Templates)
*   **Templating:** Mustache.js
*   **Icons:** Lucide React
*   **Drag & Drop:** @dnd-kit

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd cv-creator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  Open your browser and visit `http://localhost:5173`

## 📖 Usage

### Creating a Resume
1.  Fill in your details in the **Editor** panel on the left.
2.  Use the sidebar to navigate between sections (Basics, Work, Education, etc.).
3.  Click "Add Item" to add entries to lists (e.g., a new job).
4.  Drag and drop items to reorder them.

### Switching Templates
1.  Go to the **Settings** tab in the editor.
2.  Select a template from the dropdown menu.
3.  Pick a primary color for your resume.

### Exporting
*   **Download PDF:** Click the "Download PDF" button in the toolbar. This triggers the browser's print dialog. Choose "Save as PDF" as the destination.
*   **Export JSON:** Saves your resume data to a `.json` file. Useful for backups.
*   **Import JSON:** Load a previously saved `.json` file to restore your resume.

## 📂 Project Structure

```
src/
├── components/        # React components
│   ├── forms/         # Editor forms for each section
│   ├── Editor.tsx     # Main editor container
│   ├── Preview.tsx    # Iframe-based preview component
│   └── ...
├── templates/         # Resume templates
│   ├── classic/       # HTML/CSS for Classic template
│   ├── modern/        # HTML/CSS for Modern template
│   └── ...
├── store.ts           # Zustand store for state management
├── templateRenderer.ts # Logic to render Mustache templates
└── types.ts           # TypeScript interfaces (ResumeSchema)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
