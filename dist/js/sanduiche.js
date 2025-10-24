const navbar = document.querySelector('#navbar');
const btnOpenNavbar = document.querySelector('#open-navbar');
const closeNavbar = document.querySelector('#close-navbar');

btnOpenNavbar.addEventListener('click', () => {
  navbar.classList.remove('hidden');
},);

closeNavbar.addEventListener('click', () => {
  navbar.classList.add('hidden');
},);

const menuLinks = navbar.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    navbar.classList.add('hidden');
  });
});

 const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-8');
        entry.target.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));