// indx.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Init AOS
  AOS.init({ duration: 800, once: true });

  // 2. Sticky header on scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // 3. Modal behavior
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');

  document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
      const title = item.querySelector('h2').innerText;
      const text  = item.querySelector('p').innerText;
      modalBody.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
      modal.style.display = 'flex';
    });
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // 4. Close modal on outside click
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
});





