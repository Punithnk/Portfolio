import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="mb-12">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Experience & Internships</h2>
      <div className="space-y-6 text-slate-700 dark:text-slate-300">
        <div>
          <h3 className="font-semibold">
            Software Development Trainee — KodNest{' '}
            <span className="text-sm text-slate-500 dark:text-slate-400">(Jun 2025 – Present)</span>
          </h3>
          <ul className="list-disc ml-5 mt-2 text-sm">
            <li>Gained hands-on experience in Python, Java, SQL, and frontend development through structured coding and debugging exercises.</li>
            <li>Built automation scripts and dashboards to support learning workflows and improve process efficiency.</li>
            <li>Collaborated in Agile-based activities, contributing to improved code quality and development practices.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">
            Intern — Vramps Ingenious Pvt. Ltd.{' '}
            <span className="text-sm text-slate-500">(Jan 2025 – May 2025)</span>
          </h3>
          <ul className="list-disc ml-5 mt-2 text-sm">
            <li>Performed data validation, reporting, and documentation to support operational processes.</li>
            <li>Maintained structured records and contributed to improving data accuracy.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">
            Intern — AP Design & Construction Ltd.{' '}
            <span className="text-sm text-slate-500">(Nov 2023 – Dec 2023)</span>
          </h3>
          <ul className="list-disc ml-5 mt-2 text-sm">
            <li>Assisted with project documentation and ensured on-site data accuracy.</li>
            <li>Developed experience in structured reporting and cross-team coordination.</li>
          </ul>
        </div>

        {/* <div>
          <h3 className="font-semibold">Selected Projects</h3>
          <ul className="list-disc ml-5 mt-2 text-sm">
            <li>
              <strong>Taskify</strong> — Built a full‑stack task manager (React frontend, Python APIs, MySQL); owned UI workflows and deployment; <a className="text-teal-600 underline" href="https://github.com/Punithnk/Taskify" target="_blank" rel="noreferrer">GitHub</a>.
            </li>
            <li>
              Academic investigations on self-healing concrete and bamboo-fiber reinforced concrete; led experiments, analyzed data, and wrote technical summaries.
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}
