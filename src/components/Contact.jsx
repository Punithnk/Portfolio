import React from 'react';

export default function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

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

  function onSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // Here you would normally send to an API or email service.
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }
  }

  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-slate-700">
          <p className="mb-2">Bengaluru, India</p>
          <p className="mb-2">Email: <a className="text-teal-600 underline" href="mailto:punithnk1932003@gmail.com">punithnk1932003@gmail.com</a></p>
          <p className="mb-2">LinkedIn: <a className="text-teal-600 underline" href="https://www.linkedin.com/in/punith-n-k-900a5a256" target="_blank" rel="noreferrer">punith-n-k</a></p>
          <p className="mb-2">GitHub: <a className="text-teal-600 underline" href="https://github.com/Punithnk" target="_blank" rel="noreferrer">Punithnk</a></p>

          <div className="mt-4 text-sm text-slate-600">
            <p><strong>Languages:</strong> English (Professional), Kannada (Native), Hindi (Limited)</p>
            <p className="mt-2"><strong>Interests:</strong> Software Development, Data Analytics, IoT, Automation</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
          {submitted && <div className="text-sm text-green-600 mb-2">Thanks — your message was received (demo only).</div>}

          <label className="block text-sm mb-1">Name</label>
          <input name="name" value={form.name} onChange={onChange} className="w-full border rounded-md p-2 mb-2" />
          {errors.name && <div className="text-xs text-red-600 mb-2">{errors.name}</div>}

          <label className="block text-sm mb-1">Email</label>
          <input name="email" value={form.email} onChange={onChange} className="w-full border rounded-md p-2 mb-2" />
          {errors.email && <div className="text-xs text-red-600 mb-2">{errors.email}</div>}

          <label className="block text-sm mb-1">Message</label>
          <textarea name="message" value={form.message} onChange={onChange} rows={4} className="w-full border rounded-md p-2 mb-2" />
          {errors.message && <div className="text-xs text-red-600 mb-2">{errors.message}</div>}

          <div className="flex items-center justify-between">
            <button type="submit" className="inline-flex items-center gap-2 bg-slate-900 text-white py-2 px-4 rounded-md button-ripple">Send</button>
            <a className="text-sm text-teal-600 hover:underline" href="/resume.pdf" download>Download Resume</a>
          </div>
        </form>
      </div>

    </section>
  );
}
