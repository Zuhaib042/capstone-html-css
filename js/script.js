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
  });
});

// dynamic data

const speakersContainer = document.getElementById('speaker-container');
const speakers = [
  {
    name: 'Osman Khalid Butt',
    profession: 'Drama and Film Actor',
    description:
      'He is best known for his role as Wali Sohaib Khan in Diyar-E-Dil , Faaz Ibrahim in Chupke Chupke and Malik Shahzain in Ehd-e-Wafa .',
    src: './images/osman-khalid2.jpeg',
    alt: 'Actor Osman Khalid Butt',
  },
  {
    name: 'Nouman Ijaz',
    profession: 'Actor, Anchorperson and Show representer',
    description:
      'Active since 1988, he is considered a legend in Pakistani Drama Industry. he has played many roles and has been a senior actor on state Television PTV.',
    src: './images/nouman-ijaz.webp',
    alt: 'Actor Nouman Ijaz',
  },
  {
    name: 'Imran Ashraf',
    profession: 'Actor and Writer',
    description:
      'Ashraf appeared in Dil Lagi, Alif Allah Aur Insaan and Raqs-e-Bismil. He is best known for portraying mentally challenged Bhola in Ranjha Ranjha Kardi for which earned him the Best Actor award at the Lux Style Awards.',
    src: './images/imran-ashraf.jpeg',
    alt: 'Actor Imran Ashraf',
  },
  {
    name: 'Ahmad Ali Akbar',
    profession: 'Actor',
    description:
      'He guest-starred in his film debut with the 2013 film Siyaah and started his professional television career in 2014, since then he has appeared in several television series.',
    src: './images/ahmad-ali.jpeg',
    alt: 'Actor Ahmad Ali Akbar',
  },
  {
    name: 'Bilal Ashraf',
    profession: 'Actor , Director and Producer',
    description:
      'He is a Pakistani film actor, producer and visual effects director. After studying visual effects from the Franklin Marshall College, he started his career as a visual effects director and then pursued his career in acting after making a brief appearance in the 2014 thriller O21.',
    src: './images/bilali.jpeg',
    alt: 'Actor Bilal Ashraf',
  },
  {
    name: 'Shehryar Munawwar',
    profession: 'Model, Actor and Producer',
    description:
      'He is a Pakistani actor, film producer and director. He made his film debut as a lead actor and producer in 2016 with Ho Mann Jahaan. He is notable for his role in Asim Raza"s Parey Hut Love, which became Pakistan"s highest grossing movie in the year 2019',
    src: './images/shehryar.jpeg',
    alt: 'Actor Shehryar Munawar',
  },
];

window.onload = () => {
  speakers.forEach((speaker) => {
    speakersContainer.innerHTML += `<article class="flex justify-start">
          <div class="min-w-[140px] md:flex flex-col">
          <img class="trans-img-back" src="images/transparent.jpg" alt="transparent image background">
              <img class="speaker-img" src=${speaker.src} alt=${speaker.alt}>
          </div>
          <div class="card-content md:ml-4 ml-8">
              <h2 class="card-title text-xl font-bold">${speaker.name}</h2>
              <h3 class="card-pro font-medium text-sm pt-1">${speaker.profession}</h3>
              <div class="line-small my-1"></div>
              <p class="w-max-64 md:w-48 text-sm card-desc">${speaker.description}</p>
          </div>
      </article>`;
  });
};
