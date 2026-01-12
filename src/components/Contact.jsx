import React from 'react';

export default function Contact() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact</h2>
      <p className="text-slate-700">
        Bengaluru, India · Email:{' '}
        <a className="text-teal-600" href="mailto:punithnk1932003@gmail.com">
          punithnk1932003@gmail.com
        </a>
      </p>
      <p className="mt-2 text-slate-700">
        LinkedIn:{' '}
        <a
          className="text-teal-600"
          href="https://www.linkedin.com/in/punith-n-k-900a5a256"
          target="_blank"
          rel="noreferrer"
        >
          punith-n-k
        </a>{' '}
        · GitHub:{' '}
        <a
          className="text-teal-600"
          href="https://github.com/Punithnk"
          target="_blank"
          rel="noreferrer"
        >
          Punithnk
        </a>
      </p>

      <div className="mt-4 text-slate-700">
        <h3 className="font-semibold">Additional info</h3>
        <p className="mt-2 text-sm">
          Languages: English (Professional), Kannada (Native), Hindi (Limited)
        </p>
        <p className="mt-1 text-sm">
          Interests: Software Development, Data Analytics, Cybersecurity, IoT, Automation
        </p>
        <p className="mt-1 text-sm">
          Strengths: Quick Learner · Adaptable · Team-Oriented · Process-Driven
        </p>
      </div>
    </section>
  );
}
