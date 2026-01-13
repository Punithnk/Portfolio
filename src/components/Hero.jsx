import React from 'react';

export default function Hero() {
  return (
    <header className="mb-12 motion-safe:animate-fade-up surface-card p-6 rounded-xl shadow-sm">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl"
          aria-hidden="true"
        >
          PN
        </div>
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
            Punith N K
          </h1>
          <p className="mt-1 text-teal-600 dark:text-teal-300 font-medium">Aspiring Full-Stack Developer</p>

          <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-2xl">
            I build practical, maintainable web applications and automate workflows to improve
            productivity. I pair strong analytical problem-solving with clear communication to ship
            reliable features as part of small teams.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 bg-teal-600 dark:bg-teal-500 text-white py-2 px-4 rounded-md shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 button-ripple"
              href="/resume.pdf"
              download
              aria-label="Download resume"
            >
              Download Resume
            </a>
            <a
              className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 py-2 px-4 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition"
              href="#projects"
              aria-label="View projects section"
            >
              View Projects
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            Bengaluru, India ·{' '}
            <a
              className="text-slate-900 dark:text-slate-100 underline hover:text-slate-700 dark:hover:text-slate-300"
              href="mailto:punithnk1932003@gmail.com"
            >
              punithnk1932003@gmail.com
            </a>
            {' '}· <a className="text-teal-600 dark:text-teal-300 underline hover:text-teal-700 dark:hover:text-teal-400" href="https://www.linkedin.com/in/punith-n-k-900a5a256" target="_blank" rel="noreferrer">LinkedIn</a> · <a className="text-teal-600 dark:text-teal-300 underline hover:text-teal-700 dark:hover:text-teal-400" href="https://github.com/Punithnk" target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </header>
  );
}
