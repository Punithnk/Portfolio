import React from 'react';

export default function Contact() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = React.useState({});
  const [sending, setSending] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState('');
  const [serverError, setServerError] = React.useState('');
  const formRef = React.useRef(null);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  }

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    setSuccessMsg('');
    setServerError('');
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const endpoint = 'https://formsubmit.co/ajax/punithnk1932003@gmail.com';
    setSending(true);

    try {
      const fd = new FormData(formRef.current);
      const res = await fetch(endpoint, { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
      const data = await res.json();

      if (res.ok) {
        setSuccessMsg('Thanks, your message was sent.');
        setForm({ name: '', email: '', message: '' });
      } else {
        setServerError(data.message || 'Something went wrong. Please try again later.');
      }
    } catch (err) {
      setServerError('Network error, please try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="mb-16">
      <h2 className="section-title text-slate-900 dark:text-slate-100 mb-4">Contact</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="glass-card p-5 text-slate-700 dark:text-slate-300">
          <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
          <p className="mt-1">Bengaluru, India</p>

          <div className="mt-4 space-y-2 text-sm">
            <p>
              Email: <a className="text-sky-600 dark:text-cyan-300 hover:underline" href="mailto:punithnk1932003@gmail.com">punithnk1932003@gmail.com</a>
            </p>
            <p>
              LinkedIn: <a className="text-sky-600 dark:text-cyan-300 hover:underline" href="https://www.linkedin.com/in/punith-n-k-900a5a256" target="_blank" rel="noreferrer">punith-n-k</a>
            </p>
            <p>
              GitHub: <a className="text-sky-600 dark:text-cyan-300 hover:underline" href="https://github.com/Punithnk" target="_blank" rel="noreferrer">Punithnk</a>
            </p>
          </div>

          <div className="mt-6 text-sm text-slate-600 dark:text-slate-400">
            <p><strong>Languages:</strong> English (Professional), Kannada (Native), Hindi (Limited)</p>
            <p className="mt-2"><strong>Interests:</strong> Software Development, Data Analytics, IoT, Automation</p>
          </div>

          <a className="mt-6 inline-flex btn-ghost" href={resumeUrl} download>
            Download Resume
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="glass-card p-5"
        >
          <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
          <input type="hidden" name="_subject" value="Website Contact - Portfolio" />

          {successMsg && (
            <div className="text-sm text-emerald-600 mb-2" role="status" aria-live="polite">
              {successMsg}
            </div>
          )}
          {serverError && (
            <div className="text-sm text-red-600 mb-2" role="alert" aria-live="assertive">
              {serverError}
            </div>
          )}

          <label className="block text-sm mb-1 text-slate-600 dark:text-slate-300">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            className="w-full border rounded-lg p-2 mb-2 bg-transparent text-slate-900 dark:text-slate-100 border-slate-200/60 dark:border-slate-700/60"
            autoComplete="name"
            required
          />
          {errors.name && <div className="text-xs text-red-600 mb-2">{errors.name}</div>}

          <label className="block text-sm mb-1 text-slate-600 dark:text-slate-300">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className="w-full border rounded-lg p-2 mb-2 bg-transparent text-slate-900 dark:text-slate-100 border-slate-200/60 dark:border-slate-700/60"
            autoComplete="email"
            required
          />
          {errors.email && <div className="text-xs text-red-600 mb-2">{errors.email}</div>}

          <label className="block text-sm mb-1 text-slate-600 dark:text-slate-300">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={5}
            className="w-full border rounded-lg p-2 mb-3 bg-transparent text-slate-900 dark:text-slate-100 border-slate-200/60 dark:border-slate-700/60"
            required
          />
          {errors.message && <div className="text-xs text-red-600 mb-2">{errors.message}</div>}

          <button
            type="submit"
            disabled={sending}
            className={`btn-primary ${sending ? 'opacity-70' : ''}`}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
