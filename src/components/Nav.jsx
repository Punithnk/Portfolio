import React from 'react';

export default function Nav({ onToggleTheme, isDark }) {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <nav className="sticky top-0 z-40 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white font-bold">
            PN
          </div>
          <div className="hidden sm:flex gap-3 text-slate-700 dark:text-slate-200">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1Zm0 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5-3.5a1 1 0 1 1 0 2H18a1 1 0 1 1 0-2h1.5ZM6 12a1 1 0 1 1 0 2H4.5a1 1 0 1 1 0-2H6Zm11.06-6.56a1 1 0 0 1 1.42 0l.7.7a1 1 0 1 1-1.41 1.42l-.71-.71a1 1 0 0 1 0-1.41ZM5.22 17.38a1 1 0 0 1 1.41 0l.71.71a1 1 0 1 1-1.41 1.41l-.71-.71a1 1 0 0 1 0-1.41ZM18.48 17.38a1 1 0 0 1 0 1.41l-.71.71a1 1 0 0 1-1.41-1.41l.7-.71a1 1 0 0 1 1.42 0ZM6.64 5.44a1 1 0 0 1 0 1.41l-.71.71A1 1 0 0 1 4.5 6.14l.71-.7a1 1 0 0 1 1.43 0ZM12 17a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1Z"
                />
              </svg>
            )}
          </button>

          <a
            className="hidden sm:inline-flex items-center gap-2 bg-slate-900 text-white py-2 px-3 rounded-md shadow-sm hover:shadow-md transition button-ripple"
            href={resumeUrl}
            download
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
