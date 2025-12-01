export const MobileWarning = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center">
                <div className="mb-6">
                    <svg
                        className="w-24 h-24 mx-auto text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Desktop Only
                </h1>

                <p className="text-lg text-gray-600 mb-6">
                    This CV Creator application is optimized for desktop use only.
                </p>

                <p className="text-base text-gray-500">
                    Please visit this application from a desktop or laptop computer for the best experience.
                </p>
            </div>
        </div>
    );
};
