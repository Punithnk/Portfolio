import React from 'react'

function Group({title, items}) {
  return (
    <div>
      <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map(i => <span key={i} className="inline-flex items-center bg-slate-100 text-slate-800 text-sm px-3 py-1 rounded-full border border-slate-200">{i}</span>)}
      </div>
    </div>
  )
}

export default function Skills(){
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Group title="Frontend" items={['React.js','JavaScript (ES6+)','HTML5','CSS3']} />
        <Group title="Backend & Data" items={['Python','Java','SQL','REST APIs']} />
        <Group title="Languages" items={['JavaScript','Python','Java','C (Basic)']} />
        <Group title="Tools & Practices" items={['Git & GitHub','VS Code','Unit Testing','CI basics','Documentation','Teamwork']} />
      </div>
    </section>
  )
} 
