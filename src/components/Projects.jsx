import React from 'react';

function Card({ project, onOpen }) {
  return (
    <article className={`glass-card p-5 flex flex-col gap-4 ${project.featured ? 'md:col-span-2 xl:col-span-2' : ''}`}>
      <div className={`h-28 rounded-xl border border-slate-200/40 dark:border-slate-700/40 ${project.accent}`}></div>
      <div className="flex items-start justify-between gap-3">
        <div>
          {project.featured && <p className="section-kicker">Featured</p>}
          <h3 className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-300">{project.tech}</div>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">{project.summary}</p>

      {project.tags?.length ? (
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip text-xs">
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-auto flex items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          {project.link && (
            <a className="text-sky-600 dark:text-cyan-300 hover:underline" href={project.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a className="text-sky-600 dark:text-cyan-300 hover:underline" href={project.demo} target="_blank" rel="noreferrer">
              Live demo
            </a>
          )}
        </div>
        <button
          aria-label={`Open details for ${project.title}`}
          aria-haspopup="dialog"
          onClick={() => onOpen(project)}
          className="text-xs text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
        >
          Details &rarr;
        </button>
      </div>
    </article>
  );
}

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="max-w-2xl w-full glass-card p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100">{project.title}</h3>
          <button aria-label="Close" onClick={onClose} className="text-slate-500 hover:text-slate-900 dark:text-slate-300">
            X
          </button>
        </div>
        <p className="mt-4 text-sm text-slate-700 dark:text-slate-200">{project.detail}</p>
        {project.points?.length ? (
          <ul className="mt-4 list-disc ml-5 text-sm text-slate-600 dark:text-slate-300 space-y-2">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300"><strong>Tech:</strong> {project.tech}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.link && (
            <a className="btn-primary" href={project.link} target="_blank" rel="noreferrer">View on GitHub</a>
          )}
          {project.demo && (
            <a className="btn-ghost" href={project.demo} target="_blank" rel="noreferrer">Live demo</a>
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
      title: 'Taskify - Full-Stack Task Manager',
      summary: 'A lightweight task manager to practice full-stack development and ship usable features.',
      detail:
        'Built CRUD features, task filtering, and lightweight auth flows using React, Python APIs, and MySQL. Focused on testability and UX.',
      points: [
        'CRUD tasks with status and priority filters.',
        'API integration and structured MySQL schema.',
        'Clean, responsive UI optimized for clarity.',
      ],
      tech: 'React, Python, MySQL',
      tags: ['Full-stack', 'API', 'MySQL', 'React'],
      link: 'https://github.com/Punithnk/Taskify',
      demo: '',
      featured: true,
      accent: 'bg-gradient-to-br from-sky-500/25 via-cyan-400/15 to-transparent dark:from-sky-400/20 dark:via-cyan-300/10',
    },
    {
      id: 'concrete',
      title: 'Investigation of Self-Healing Concrete',
      summary: 'Experimental study to evaluate materials that can autonomously heal cracks to improve service life.',
      detail:
        'Led experiments, measured healing metrics over time, and summarized findings with actionable recommendations for material selection and future work.',
      points: [
        'Designed experiments and tracked healing behavior.',
        'Analyzed results and documented insights.',
      ],
      tech: 'Experimental research, Data analysis',
      tags: ['Research', 'Data analysis'],
      accent: 'bg-gradient-to-br from-indigo-500/20 via-sky-400/15 to-transparent dark:from-indigo-400/15 dark:via-sky-300/10',
    },
    {
      id: 'bamboo',
      title: 'Bamboo Fiber Reinforced Concrete',
      summary: 'Explored sustainable material substitutions and evaluated mechanical performance.',
      detail:
        'Designed specimen tests, collected and analyzed strength data, and presented conclusions in a technical report.',
      points: [
        'Evaluated sustainable material performance.',
        'Produced a concise technical report.',
      ],
      tech: 'Material testing, Data analysis',
      tags: ['Materials', 'Sustainability'],
      accent: 'bg-gradient-to-br from-emerald-500/20 via-cyan-400/10 to-transparent dark:from-emerald-400/15 dark:via-cyan-300/10',
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

  return (
    <section id="projects" className="mb-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="section-title text-slate-900 dark:text-slate-100">Projects</h2>
        <p className="text-sm text-slate-500 dark:text-slate-300">Selected work</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((p) => (
          <Card key={p.id} project={p} onOpen={setOpen} />
        ))}
      </div>

      <Modal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
