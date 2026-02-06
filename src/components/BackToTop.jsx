import React from 'react';

export default function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
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
    <button
      aria-label="Back to top"
      onClick={scrollTop}
      className="fixed right-5 bottom-5 bg-slate-900/90 text-white px-3 py-2 rounded-full shadow-lg hover:scale-105 transition"
    >
      Top
    </button>
  );
}
