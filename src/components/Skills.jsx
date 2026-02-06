import React from 'react';

function Group({ title, items, note }) {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
        {note ? <span className="text-xs text-slate-500 dark:text-slate-300">{note}</span> : null}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <span key={i} className="chip">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mb-16">
      <h2 className="section-title text-slate-900 dark:text-slate-100 mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Group title="Frontend" items={['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind']} />
        <Group title="Backend" items={['Python', 'Java', 'Node.js', 'SQL', 'REST APIs']} />
        <Group title="Tools" items={['Git & GitHub', 'VS Code', 'Docker (basic)', 'Unit Testing', 'CI/CD', 'Figma (basic)']} />
        <Group title="Languages" items={['English', 'Kannada', 'Hindi']} note="Professional + native" />
      </div>
    </section>
  );
}
