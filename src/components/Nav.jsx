import React from 'react';

export default function Nav({ onToggleTheme, isDark }) {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
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
            {isDark ? '🌙' : '☀️'}
          </button>

          <a
            className="hidden sm:inline-flex items-center gap-2 bg-slate-900 text-white py-2 px-3 rounded-md shadow-sm hover:shadow-md transition button-ripple"
            href="/resume.pdf"
            download
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
