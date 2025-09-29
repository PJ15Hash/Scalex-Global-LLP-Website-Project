// assets/js/main.js
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('primary-navigation');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
      toggle.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Simple reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => obs.observe(el));
  } else {
    // fallback: show everything if IntersectionObserver not supported
    reveals.forEach(el => el.classList.add('visible'));
  }

  // Basic client-side form validation (doesn't block actual submission if form action set)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      let ok = true;
      [name, email, message].forEach(field => {
        if (!field || !field.value.trim()) {
          field.classList.add('input-error');
          ok = false;
        } else {
          field.classList.remove('input-error');
        }
      });

      if (!ok) {
        e.preventDefault();
        // lightweight feedback
        alert('Please fill in all required fields (name, email, message).');
      }
    });
  }
});
