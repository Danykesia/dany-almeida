import { projectDetails } from './project-details';

function renderProjectCards() {
  const projectCardsContainer = document.querySelector('.portfolio-wrapper');

  projectDetails.forEach((details) => {
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="card">
        <img src="${details.thumbnail}" alt="${details.title}">
        <div class="overlay">
          <p class="text-medium">${details.title}</p>
          <i class="material-icons">visibility</i>
        </div>
      </div>
    `;
    projectCardsContainer.appendChild(template.content.cloneNode(true));
  });
}

renderProjectCards();

// Scroll to top button - Make page go to top
let scrollToTop = document.querySelector('#scrollToTop');

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    scrollToTop.style.display = "flex";
  } else {
    scrollToTop.style.display = "none";
  }
}

scrollToTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

// Language dropdown - Change language
let arrowMobileDown = document.querySelector('.btn-m-languages');
let arrowDesktopDown = document.querySelector('.btn-d-languages');
let hiddenMobileFlag = document.querySelector('.language-m-hidden');
let hiddenDesktopFlag = document.querySelector('.language-d-hidden');
let body = document.querySelector('body');

arrowMobileDown.addEventListener('click', () => {
  hiddenMobileFlag.classList.toggle('show');
});

arrowDesktopDown.addEventListener('click', () => {
  hiddenDesktopFlag.classList.toggle('show');
});

window.onclick = function(e){
  if (!e.target.matches('.btn-m-languages') && hiddenMobileFlag.classList.contains('show')) {
    hiddenMobileFlag.classList.remove('show');
  }

  if (!e.target.matches('.btn-d-languages') && hiddenDesktopFlag.classList.contains('show')) {
    hiddenDesktopFlag.classList.remove('show');
  }

  if (e.target.matches('.modal')) {
    modal.classList.remove('show');
  };
}

// NAVBAR MOBILE
// Make navbar mobile appear and disappear.
const btnToggle = document.querySelector('.toggle');
const mobileNav = document.querySelector('.mobile-nav');
btnToggle.addEventListener('click', function () {
  this.classList.toggle('activate');
  mobileNav.style.visibility = 'visible';
  mobileNav.style.transition = 'transform .4s';
  mobileNav.classList.toggle('show-nav');
});

//Make navbar background color change
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('navbar-color', window.scrollY > 0)
});

// Current year
let currentDate = document.getElementById('currentYear')
let date = new Date;
let year = date.getFullYear();

currentDate.innerHTML = year;

// Modal
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
  body.style.overflow = 'auto';
});

function renderProjectDetails(details) {
  const projectTitle = document.querySelector('.project-title');
  const imageHeader = document.querySelector('.project-image-header');
  const desktopImagesContainer = document.querySelector('.desktop-images');
  const mobileImagesContainer = document.querySelector('.mobile-images');

  // clear existing images
  desktopImagesContainer.innerHTML = '';
  mobileImagesContainer.innerHTML = '';

  // set the details
  projectTitle.innerHTML = details.title
  imageHeader.src = details.imgHeader;

  details.desktopImages.forEach(imageSrc => {
    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.alt = details.title;
    desktopImagesContainer.appendChild(imageElement);
  });
  details.mobileImages.forEach(imageSrc => {
    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.alt = details.title;
    mobileImagesContainer.appendChild(imageElement);
  });
}

const elements = document.querySelectorAll('.scroll-right, .fade')
const scrollPosition = window.innerHeight * 0.7;

function fadeScroll() {
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top - scrollPosition;

    if (elementTop < 100) {
      element.classList.add('active')
    } else {
      element.classList.remove('active')
    }
  })
}
window.addEventListener('scroll', fadeScroll);

// Show overlay on mobile devices
const cardProjects = document.querySelectorAll('.portfolio-wrapper .card');
const cardOverlay = document.querySelectorAll('.overlay');

cardProjects.forEach(card => {
  card.addEventListener('click', () => {
    cardOverlay.forEach(overlay => {
      overlay.classList.add('show');
    })
  });
});

cardOverlay.forEach((overlay, index) => {
  overlay.addEventListener('click', () => {
    modal.classList.toggle('show');
    renderProjectDetails(projectDetails[index]);
  });
});

