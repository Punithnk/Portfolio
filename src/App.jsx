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

  function toggleTheme() {
    setIsDark((v) => !v);
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Nav onToggleTheme={toggleTheme} isDark={isDark} />
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 md:py-20">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </div>

      <BackToTop />
    </div>
  );
}
