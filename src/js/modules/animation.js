document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3,
  });

  const elements = [
    document.querySelector('.about__title'),
    document.querySelectorAll('.community__number'),
    document.querySelector('.price__title'),
    document.querySelector('.work__title'),
    document.querySelector('.certificate__title'),
    document.querySelector('.certificate__content .button'),
    document.querySelector('.certificate__image'),
  ];

  elements.forEach((el) => {
    if (!el) {
      return;
    }

    if (el instanceof NodeList) {
      el.forEach((item) => observer.observe(item));
    } else {
      observer.observe(el);
    }
  });
});
