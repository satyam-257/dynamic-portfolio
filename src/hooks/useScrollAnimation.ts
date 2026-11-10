import { useEffect } from 'react';

/**
 * useScrollAnimation:
 * Sets up an IntersectionObserver to automatically detect elements
 * with the `.reveal-on-scroll` class and add `.is-revealed` when
 * they enter the viewport.
 */
export function useScrollAnimation(dependencies: any[] = []) {
  useEffect(() => {
    // If reduced motion is requested, reveal all elements immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || document.documentElement.classList.contains('reduced-motion-active')) {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, we can unobserve for performance
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12,
    });

    const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, dependencies);
}
