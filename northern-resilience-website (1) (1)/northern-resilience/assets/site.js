// Northern Resilience Initiatives - Site JS
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open');
    });
  }

  // Auto-update year in footer
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
