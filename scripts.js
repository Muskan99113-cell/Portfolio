const notebook = document.querySelector('.notebook');

const portfolio = document.querySelector('#portfolio');

notebook?.addEventListener('click', () => {
  portfolio.scrollIntoView({
    behavior: 'smooth'
  });
});


const links = [...document.querySelectorAll('.nav a')];

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