import React from 'react';

function Card({ project, onOpen }) {
  return (
    <article className="border rounded-lg p-5 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transform transition hover:-translate-y-1 motion-safe:animate-fade-up">
      <div className="h-40 md:h-44 bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center mb-3">
        <div className="text-sm text-slate-700 dark:text-slate-300">{project.title}</div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-slate-800 dark:text-slate-100">{project.title}</h3>
        <div className="text-sm text-slate-500 dark:text-slate-300">{project.tech}</div>
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-200">{project.summary}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {project.link && (
            <a className="text-teal-600 hover:underline" href={project.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a className="text-teal-600 hover:underline" href={project.demo} target="_blank" rel="noreferrer">
              Live demo
            </a>
          )}
        </div>
        <button aria-label={`Open details for ${project.title}`} aria-haspopup="dialog" onClick={() => onOpen(project)} className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-300">
          Details →
        </button>
      </div>
    </article>
  );
}

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" role="dialog" aria-modal="true">
      <div className="max-w-2xl w-full bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-xl">{project.title}</h3>
          <button aria-label="Close" onClick={onClose} className="text-slate-500 hover:text-slate-700">✕</button>
        </div>
        <p className="mt-4 text-sm text-slate-700 dark:text-slate-200">{project.detail}</p>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300"><strong>Tech:</strong> {project.tech}</p>
        <div className="mt-6 flex gap-3">
          {project.link && (
            <a className="inline-flex items-center gap-2 bg-slate-900 text-white py-2 px-3 rounded-md" href={project.link} target="_blank" rel="noreferrer">View on GitHub</a>
          )}
          {project.demo && (
            <a className="inline-flex items-center gap-2 border border-slate-300 py-2 px-3 rounded-md hover:bg-slate-100" href={project.demo} target="_blank" rel="noreferrer">Live demo</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      id: 'taskify',
      title: 'Taskify — Full‑Stack Task Manager',
      summary: 'A lightweight task manager to practice full-stack development and ship usable features.',
      detail:
        'Built CRUD features, task filtering, and lightweight auth flows using React, Python APIs and MySQL. Focused on testability and UX. See the GitHub repo for code and deployment notes.',
      tech: 'React, Python, MySQL',
      link: 'https://github.com/Punithnk/Taskify',
      demo: '',
    },
    {
      id: 'concrete',
      title: 'Investigation of Self‑Healing Concrete',
      summary: 'Experimental study to evaluate materials that can autonomously heal cracks to improve service life.',
      detail:
        'Led experiments, measured healing metrics over time, and summarized findings with actionable recommendations for material selection and future work.',
      tech: 'Experimental research, Data analysis',
    },
    {
      id: 'bamboo',
      title: 'Bamboo Fiber Reinforced Concrete',
      summary: 'Explored sustainable material substitutions and evaluated mechanical performance.',
      detail:
        'Designed specimen tests, collected and analyzed strength data, and presented conclusions in a technical report.',
      tech: 'Material testing, Data analysis',
    },
  ];

  const [open, setOpen] = React.useState(null);

  React.useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function handleOpen(p) {
    setOpen(p);
  }

  function handleClose() {
    setOpen(null);
  }

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <Card key={p.id} project={p} onOpen={handleOpen} />
        ))}
      </div>

      <Modal project={open} onClose={handleClose} />
    </section>
  );
}
