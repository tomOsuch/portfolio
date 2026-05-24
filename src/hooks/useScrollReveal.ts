import { useEffect, useRef } from 'react';

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const element = el.querySelectorAll('.fade-in');
    const targets = element.length > 0 ? Array.from(element) : [el];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, i * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
};

export default useScrollReveal;
