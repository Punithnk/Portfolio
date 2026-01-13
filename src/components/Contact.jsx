import React from 'react';

export default function Contact() {
  // Form state and submission (submits to Formsubmit.co via AJAX)
  // Note: Formsubmit will email messages to the address used in the endpoint.
  // First-time submissions may require email confirmation from Formsubmit.
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

    // POST to Formsubmit AJAX endpoint. Replace the email below if you want messages sent elsewhere.
    const endpoint = 'https://formsubmit.co/ajax/punithnk1932003@gmail.com';
    setSending(true);

    try {
      const fd = new FormData(formRef.current);
      const res = await fetch(endpoint, { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
      const data = await res.json();

      if (res.ok) {
        setSuccessMsg('Thanks — your message was sent.');
        setForm({ name: '', email: '', message: '' });
      } else {
        setServerError(data.message || 'Something went wrong. Please try again later.');
      }
    } catch (err) {
      setServerError('Network error — please try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-slate-700 dark:text-slate-300">
          <p className="mb-2">Bengaluru, India</p>
          <p className="mb-2">Email: <a className="text-teal-600 underline dark:text-teal-300" href="mailto:punithnk1932003@gmail.com">punithnk1932003@gmail.com</a></p>
          <p className="mb-2">LinkedIn: <a className="text-teal-600 underline dark:text-teal-300" href="https://www.linkedin.com/in/punith-n-k-900a5a256" target="_blank" rel="noreferrer">punith-n-k</a></p>
          <p className="mb-2">GitHub: <a className="text-teal-600 underline dark:text-teal-300" href="https://github.com/Punithnk" target="_blank" rel="noreferrer">Punithnk</a></p>

          <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            <p><strong>Languages:</strong> English (Professional), Kannada (Native), Hindi (Limited)</p>
            <p className="mt-2"><strong>Interests:</strong> Software Development, Data Analytics, IoT, Automation</p>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm"
        >
          {/* Hidden anti-bot honey pot and metadata for Formsubmit */}
          <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
          <input type="hidden" name="_subject" value="Website Contact — Portfolio" />

          {successMsg && (
            <div className="text-sm text-green-600 mb-2" role="status" aria-live="polite">
              {successMsg}
            </div>
          )}
          {serverError && (
            <div className="text-sm text-red-600 mb-2" role="alert" aria-live="assertive">
              {serverError}
            </div>
          )}

          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            className="w-full border rounded-md p-2 mb-2 bg-transparent text-slate-900 dark:text-slate-100"
            required
          />
          {errors.name && <div className="text-xs text-red-600 mb-2">{errors.name}</div>}

          <label className="block text-sm mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className="w-full border rounded-md p-2 mb-2 bg-transparent text-slate-900 dark:text-slate-100"
            required
          />
          {errors.email && <div className="text-xs text-red-600 mb-2">{errors.email}</div>}

          <label className="block text-sm mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={5}
            className="w-full border rounded-md p-2 mb-2 bg-transparent text-slate-900 dark:text-slate-100"
            required
          />
          {errors.message && <div className="text-xs text-red-600 mb-2">{errors.message}</div>}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={sending}
              className={`inline-flex items-center gap-2 bg-slate-900 text-white py-2 px-4 rounded-md ${sending ? 'opacity-70' : ''}`}
            >
              {sending ? 'Sending…' : 'Send'}
            </button>

            <a className="text-sm text-teal-600 hover:underline" href="/resume.pdf" download>
              Download Resume
            </a>
          </div>
        </form>
      </div>

    </section>
  );
}
