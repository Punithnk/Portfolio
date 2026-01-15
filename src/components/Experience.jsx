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
            <li>Developed REST APIs and frontend features using Python and React to deliver MVP capabilities.</li>
            <li>Automated data validation tasks and created dashboards to surface defects—reduced manual verification time and improved visibility for stakeholders.</li>
            <li>Collaborated in Agile sprints, wrote unit tests, and participated in code reviews to maintain quality.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">
            Intern — Vramps Ingenious Pvt. Ltd.{' '}
            <span className="text-sm text-slate-500">(Jan 2025 – May 2025)</span>
          </h3>
          <ul className="list-disc ml-5 mt-2 text-sm">
            <li>Led data validation and reporting efforts to improve product data accuracy and operational efficiency.</li>
            <li>Produced technical reports and actionable insights used by engineers for testing and release decisions.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">
            Intern — AP Design & Construction Ltd.{' '}
            <span className="text-sm text-slate-500">(Nov 2023 – Dec 2023)</span>
          </h3>
          <ul className="list-disc ml-5 mt-2 text-sm">
            <li>Improved on-site data capture and streamlined documentation processes to support project coordination.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Selected Projects</h3>
          <ul className="list-disc ml-5 mt-2 text-sm">
            <li>
              <strong>Taskify</strong> — Built a full‑stack task manager (React frontend, Python APIs, MySQL); owned UI workflows and deployment; <a className="text-teal-600 underline" href="https://github.com/Punithnk/Taskify" target="_blank" rel="noreferrer">GitHub</a>.
            </li>
            <li>
              Academic investigations on self-healing concrete and bamboo-fiber reinforced concrete; led experiments, analyzed data, and wrote technical summaries.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
