import React from 'react';

export default function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (!visible) return null;
  return (
    <button aria-label="Back to top" onClick={scrollTop} className="fixed right-6 bottom-6 bg-slate-900 text-white p-3 rounded-full shadow-lg hover:scale-105 transition button-ripple">
      ↑
    </button>
  );
}
