import { useEffect } from 'react';

const useFadeInOnScroll = (selector) => {
  useEffect(() => {
    if (typeof window === 'undefined') return; // Check if running on server side

    const fadeInElements = document.querySelectorAll(selector);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: .4,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeInElements.forEach(element => observer.observe(element));

    return () => {
      fadeInElements.forEach(element => observer.unobserve(element));
    };
  }, []);
};

export default useFadeInOnScroll;
