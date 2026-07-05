// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Product tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    document.querySelector(`.tab-panel[data-panel="${target}"]`).classList.add('active');
  });
});

// Reveal sections on scroll
const revealTargets = document.querySelectorAll('.about-grid, .section-head, .gallery, .offer-cards, .contact-inner');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .8s ease, transform .8s ease';
  observer.observe(el);
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
