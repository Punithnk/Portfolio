import React from 'react';

export default function Education() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Education & Certifications</h2>
      <div className="space-y-4 text-slate-700">
        <div>
          <h3 className="font-semibold">
            Bachelor of Engineering (B.E.), Civil Engineering —{' '}
            <em>Dr. Ambedkar Institute of Technology, Bengaluru</em>{' '}
            <span className="text-sm text-slate-500">(2021 – 2025) · CGPA: 7.23</span>
          </h3>
          <p className="text-sm mt-2">
            Relevant coursework: Structural analysis, Materials, Data-driven investigations, and
            foundational software engineering topics.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Certifications</h3>
          <ul className="list-disc ml-5 mt-2 text-sm">
            <li>Python Training — Besant Technologies (2025)</li>
            <li>Generative AI Basics — LinkedIn Learning</li>
            <li>Copilot for Teams — LinkedIn Learning</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">School</h3>
          <ul className="list-disc ml-5 mt-2 text-sm">
            <li>12th Grade — Govt. PU College, Shivamogga (71.33%, 2021)</li>
            <li>10th Grade — Seva Sagara High School (79.5%, 2019)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
