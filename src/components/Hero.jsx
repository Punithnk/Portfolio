import React from 'react';

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <header className="mb-16 motion-safe:animate-fade-up">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr,0.85fr] gap-6">
        <div className="glass-card p-6 sm:p-8">
          <p className="section-kicker">Entry-level Software Engineer</p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white leading-tight">
            Punith N K
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
            I build practical, maintainable web applications and automate workflows to improve productivity. I pair
            analytical problem-solving with clear communication to ship reliable features in collaborative teams.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href={resumeUrl} download>
              Download Resume
            </a>
            <a className="btn-ghost" href="#projects">
              View Projects
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Bengaluru, India
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <a className="hover:text-slate-900 dark:hover:text-white" href="mailto:punithnk1932003@gmail.com">
              punithnk1932003@gmail.com
            </a>
            <span className="hidden sm:inline text-slate-400">|</span>
            <a className="text-sky-600 dark:text-cyan-300 hover:underline" href="https://www.linkedin.com/in/punith-n-k-900a5a256" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="text-sky-600 dark:text-cyan-300 hover:underline" href="https://github.com/Punithnk" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card p-4 col-span-2">
            <p className="section-kicker">Focus</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Full-stack foundations, API development, and UI polish for fast, reliable product delivery.
            </p>
          </div>
          <div className="glass-card p-4">
            <p className="section-kicker">Strengths</p>
            <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <li>- React + API integration</li>
              <li>- Clean UI + UX</li>
              <li>- Reliable delivery</li>
            </ul>
          </div>
          <div className="glass-card p-4">
            <p className="section-kicker">Highlights</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-slate-700 dark:text-slate-200">
              <div>
                <p className="text-xl font-semibold">2</p>
                <p className="text-xs text-slate-500">Internships</p>
              </div>
              <div>
                <p className="text-xl font-semibold">3</p>
                <p className="text-xs text-slate-500">Projects</p>
              </div>
              <div>
                <p className="text-xl font-semibold">1</p>
                <p className="text-xs text-slate-500">Trainee role</p>
              </div>
              <div>
                <p className="text-xl font-semibold">2025</p>
                <p className="text-xs text-slate-500">Grad year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
