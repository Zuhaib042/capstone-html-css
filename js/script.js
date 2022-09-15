const hamburger = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const body = document.querySelector('body');
const links = document.querySelectorAll('.mobile-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('ham-open');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
  body.classList.toggle('active');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('ham-open');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    body.classList.toggle('active');
    console.log('body active');
  });
});
AOS.init();
