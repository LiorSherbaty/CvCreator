export function Footer() {
    return (
        <footer className="border-t bg-gray-50 px-6 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    <span>Created by Lior Sherbaty, developed with React and Vite</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                    <span>Open Source</span>
                    <span>•</span>
                    <a
                        href="https://github.com/LiorSherbaty/CvCreator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
