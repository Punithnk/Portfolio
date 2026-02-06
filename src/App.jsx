import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

export default function App() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {}
  }, [isDark]);

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100">
      <Nav onToggleTheme={() => setIsDark((v) => !v)} isDark={isDark} />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}
