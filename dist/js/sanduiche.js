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