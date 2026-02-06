import React from 'react';

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <header className="mb-14 motion-safe:animate-fade-up glass-card p-6 sm:p-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white font-semibold text-2xl">
          PN
        </div>

        <div className="flex-1">
          <p className="section-kicker">Entry-Level Software Engineer</p>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white leading-tight">
            Punith N K
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">
            I build practical, maintainable web applications and automate workflows to improve productivity. I pair
            analytical problem-solving with clear communication to ship reliable features in collaborative teams.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-primary" href={resumeUrl} download>
              Download Resume
            </a>
            <a className="btn-ghost" href="#projects">
              View Projects
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span>Bengaluru, India</span>
            <span className="hidden sm:inline">|</span>
            <a className="hover:text-slate-900 dark:hover:text-white" href="mailto:punithnk1932003@gmail.com">
              punithnk1932003@gmail.com
            </a>
            <span className="hidden sm:inline">|</span>
            <a className="text-sky-600 dark:text-cyan-300 hover:underline" href="https://www.linkedin.com/in/punith-n-k-900a5a256" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="text-sky-600 dark:text-cyan-300 hover:underline" href="https://github.com/Punithnk" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
