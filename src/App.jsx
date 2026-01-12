import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
    </div>
  );
}
