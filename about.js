// about.js
document.addEventListener('DOMContentLoaded', () => {
  // Init AOS
  AOS.init({ duration: 600, once: true });

  // Optionnel : scroll smooth pour ancres
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
              .scrollIntoView({ behavior: 'smooth' });
    });
  });
});
