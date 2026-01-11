import React from 'react'

function Card({title, problem, solution, tech, link, focus}){
  return (
    <article className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-slate-800">{title}</h3>
        <div className="text-sm text-slate-500">{tech}</div>
      </div>
      <p className="mt-3 text-sm text-slate-600"><strong>Problem:</strong> {problem}</p>
      <p className="mt-2 text-sm text-slate-600"><strong>Solution:</strong> {solution}</p>
      <p className="mt-2 text-sm text-slate-600"><strong>Tech:</strong> <span className="text-slate-700">{tech}</span></p>
      <div className="mt-4 flex items-center justify-between">
        <a className="text-teal-600 hover:underline" href={link} target="_blank" rel="noreferrer">View on GitHub</a>
        <span className="text-sm text-slate-500">Focus: <span className="text-slate-700">{focus}</span></span>
      </div>
    </article>
  )
}

export default function Projects(){
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Projects</h2>
      <div className="grid gap-4">
        <Card
          title="Taskify — Full‑Stack Task Manager"
          problem="Needed a lightweight, easy-to-extend task manager for productivity and learning full-stack development."
          solution="Built a CRUD-based productivity app with React.js front-end, Python APIs for backend, and MySQL for persistence; deployed via GitHub Pages. Implemented UI workflows, debugging routines, and GitHub-based version control."
          tech="React.js, JavaScript, Python, MySQL, GitHub Pages"
          focus="UI workflows, debugging, and deployment"
          link="https://github.com/Punithnk/Taskify"
        />

        <Card
          title="Investigation of Self‑Healing Concrete Technology"
          problem="Explore materials that autonomously heal structural cracks to improve durability."
          solution="Conducted literature review and experiments to evaluate healing mechanisms and material performance."
          tech="Experimental research, Data analysis"
          focus="Experimental evaluation and materials analysis"
          link="#"
        />

        <Card
          title="Experimental Investigations on Bamboo Fiber Reinforced Concrete"
          problem="Study sustainable construction materials with improved mechanical properties."
          solution="Designed and executed experiments to measure strength and durability improvements when using bamboo fibers."
          tech="Experimental research, Material testing"
          focus="Material testing and strength analysis"
          link="#"
        />

        <Card
          title="Extensive Survey Project"
          problem="Collect and analyze land survey data for project planning and decision making."
          solution="Performed detailed land surveys and data-driven analysis to inform designs and reports."
          tech="Surveying, Data analysis"
          focus="Survey data collection and analysis"
          link="#"
        />
      </div>
    </section>
  )
} 
