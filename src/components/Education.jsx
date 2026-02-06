import React from 'react';

export default function Education() {
  return (
    <section id="education" className="mb-16">
      <h2 className="section-title text-slate-900 dark:text-slate-100 mb-4">Education</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="glass-card p-5">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
            Bachelor of Engineering (B.E.), Civil Engineering
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            Dr. Ambedkar Institute of Technology, Bengaluru
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">2021 - 2025 | CGPA: 7.23</p>
          <p className="text-sm mt-3 text-slate-600 dark:text-slate-300">
            Relevant coursework: Structural analysis, materials, data-driven investigations, and foundational software
            engineering topics.
          </p>
        </div>

        <div className="glass-card p-5">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">School</h3>
          <ul className="list-disc ml-5 mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2">
            <li>12th Grade - Govt. PU College, Shivamogga (71.33%, 2021)</li>
            <li>10th Grade - Seva Sagara High School (79.5%, 2019)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
