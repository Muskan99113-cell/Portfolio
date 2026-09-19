const notebook = document.querySelector('.notebook');

const portfolio = document.querySelector('#portfolio');

notebook?.addEventListener('click', () => {
  portfolio.scrollIntoView({
    behavior: 'smooth'
  });
});


const links = [...document.querySelectorAll('.nav a[href^="#"]')];

const sections = links
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);


const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        links.forEach(link => {

          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );

        });

      }

    });

  },
  {
    rootMargin: '-35% 0px -55% 0px'
  }
);


sections.forEach(section => {
  observer.observe(section);
});


const revealObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


document.querySelectorAll('.reveal').forEach(element => {
  revealObserver.observe(element);
});


const dot = document.querySelector('.cursor-dot');


if (dot && matchMedia('(pointer:fine)').matches) {

  window.addEventListener('pointermove', event => {

    dot.style.transform =
      `translate(${event.clientX}px, ${event.clientY}px)`;

  });

}


const navToggle = document.querySelector('.nav-toggle');

const navMenu = document.querySelector('#primary-nav');


function setMenu(open) {

  if (!navToggle || !navMenu) return;

  navMenu.classList.toggle('open', open);

  navToggle.setAttribute('aria-expanded', String(open));

  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');

}


navToggle?.addEventListener('click', () => {
  setMenu(!navMenu.classList.contains('open'));
});


navMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});


document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) setMenu(false);
});


document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setMenu(false);
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 850) setMenu(false);
});