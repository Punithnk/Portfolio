import React from 'react';

export default function Hero() {
  return (
    <header className="mb-12 motion-safe:animate-fade-up">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg"
          aria-hidden="true"
        >
          PN
        </div>
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Punith N K
          </h1>
          <p className="mt-3 text-slate-700 max-w-2xl">
            Detail-oriented Engineering graduate skilled in full-stack development. Experienced in
            supporting software development, debugging, data validation, and process workflows. A
            strong analytical thinker with fast learning ability and a team-focused mindset. Seeking
            entry-level opportunities in software development.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 bg-teal-600 text-white py-2 px-4 rounded-md shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              href="#projects"
              aria-label="View projects section"
            >
              View Projects
            </a>
            <a
              className="inline-flex items-center gap-2 border border-slate-300 text-slate-900 py-2 px-4 rounded-md hover:bg-slate-100 transition"
              href="/resume.pdf"
              download
              aria-label="Download resume"
            >
              Download Resume
            </a>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Bengaluru, India ·{' '}
            <a
              className="text-teal-600 underline hover:text-teal-700"
              href="mailto:punithnk1932003@gmail.com"
            >
              punithnk1932003@gmail.com
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}
