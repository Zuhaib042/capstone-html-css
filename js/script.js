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
      'He is best known for his role as Wali Sohaib Khan in Diyar-E-Dil , Faaz Ibrahim in Chupke Chupke and Malik Shahzain in Ehd-e-Wafa . He is the recipient of several accolades, including two Hum Awards and an ARY Film Award.',
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
];

window.onload = () => {
  speakers.forEach((speaker) => {
    speakersContainer.innerHTML += `<article class="flex items-start ">
          <div class="card-img">
              <img src=${speaker.src} alt=${speaker.alt}>
          </div>
          <div class="card-content flex flex-col pl-3">
              <h2 class="card-title text-xl font-bold">${speaker.name}</h2>
              <h3 class="card-pro pt-1">${speaker.profession}</h3>
              <p class="w-max-64 md:w-48 text-sm font-light">${speaker.description}</p>
          </div>
      </article>`;
  });
};
