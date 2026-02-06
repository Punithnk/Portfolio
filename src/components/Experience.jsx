import React from 'react';

const roles = [
  {
    title: 'Software Development Trainee',
    company: 'KodNest',
    period: 'Jun 2025 - Present',
    bullets: [
      'Developed REST APIs and frontend features using Python and React to deliver MVP capabilities.',
      'Automated data validation tasks and created dashboards to surface defects, reducing manual verification time.',
      'Collaborated in Agile sprints, wrote unit tests, and participated in code reviews to maintain quality.',
    ],
  },
  {
    title: 'Intern',
    company: 'Vramps Ingenious Pvt. Ltd.',
    period: 'Jan 2025 - May 2025',
    bullets: [
      'Led data validation and reporting efforts to improve product data accuracy and operational efficiency.',
      'Produced technical reports and actionable insights used by engineers for testing and release decisions.',
    ],
  },
  {
    title: 'Intern',
    company: 'AP Design & Construction Ltd.',
    period: 'Nov 2023 - Dec 2023',
    bullets: [
      'Improved on-site data capture and streamlined documentation processes to support project coordination.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-16">
      <h2 className="section-title text-slate-900 dark:text-slate-100 mb-4">Experience & Internships</h2>
      <div className="relative pl-6">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-slate-200/70 dark:bg-slate-700/70"></div>
        <div className="space-y-4">
          {roles.map((role) => (
            <div key={`${role.company}-${role.period}`} className="relative glass-card p-5">
              <span className="absolute -left-3 top-6 w-3 h-3 rounded-full bg-sky-500 shadow-md shadow-sky-500/40"></span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {role.title} - {role.company}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-300">{role.period}</span>
              </div>
              <ul className="list-disc ml-5 mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
