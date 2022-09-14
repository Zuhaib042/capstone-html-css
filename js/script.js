const hamburger = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('ham-open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});

AOS.init();
