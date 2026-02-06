import React from 'react';

export default function Certifications() {
  const items = [
    'Python Training - Besant Technologies (2025)',
    'Generative AI Basics - LinkedIn Learning',
    'Copilot for Teams - LinkedIn Learning',
  ];

  return (
    <section id="certifications" className="mb-16">
      <h2 className="section-title text-slate-900 dark:text-slate-100 mb-4">Certifications</h2>
      <div className="glass-card p-5">
        <ul className="list-disc ml-5 text-sm text-slate-600 dark:text-slate-300 space-y-2">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
