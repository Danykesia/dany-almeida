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
const projectDetailsBtn = document.querySelectorAll('.overlay .material-icons');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-background');
const closeModal = document.querySelector('.close-modal');
// Select project images
const projectImg1 = document.querySelector('.project-image1');
const projectImg2 = document.querySelector('.project-image2');
const projectImg3 = document.querySelector('.project-image3');
const projectImg4 = document.querySelector('.project-image4');
const projectImg5 = document.querySelector('.project-image5');
const projectImg6 = document.querySelector('.project-image6');
const projectImg7 = document.querySelector('.project-image7');
const projectImg8 = document.querySelector('.project-image8');

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
  body.style.overflow = 'auto';
})

function projectDetails(title, header) {
  const projectTitle = document.querySelector('.project-title');
  const imageHeader = document.querySelector('.project-image-header');

  projectTitle.innerHTML = title
  imageHeader.src = header;
}

projectDetailsBtn.forEach((button, index) => {
  button.addEventListener('click', () => {
    modal.classList.toggle('show');
    if(window.scrollY < 800) {
      body.style.overflow = 'auto';
    }
    body.style.overflow = 'hidden';

    if (index === 0) {
      projectDetails('Motion Studio', './img/motion-header-img.webp');
      projectImg1.src = './img/motion-dk-1.webp';
      projectImg2.src = './img/motion-dk-2.webp';
      projectImg3.src = './img/motion-mobile-1.webp';
      projectImg4.src = './img/motion-mobile-2.webp';
      projectImg5.src = './img/motion-mobile-3.webp';
      projectImg6.src = './img/motion-mobile-4.webp';
      projectImg7.src = './img/motion-mobile-5.webp';
      projectImg8.src = './img/motion-mobile-6.webp';
    }
    if (index === 1) {
      projectDetails('Ampla Mais')
    }
    if (index === 2) {
      projectDetails('Faz Bem Pet')
    }
    if (index === 3) {
      projectDetails('Alessandra Vieira')
    }
    if (index === 4) {
      projectDetails('Kelly Niglio')
    }
    if (index === 5) {
      projectDetails('DL Doces')
    }
    if (index === 6) {
      projectDetails('Soho Hair')
    }
    if (index === 7) {
      projectDetails('Dr. Caramelo')
    }
    if (index === 8) {
      projectDetails('Gerador Curriculum')
    }

    // const project = index

    // switch(project) {
    //   case index === 0:
    //     modalContent.innerHTML = 'motion';
    //   case 1:
    //     modalContent.innerHTML = 'alpha';
    //   case 2:
    //   modalContent.innerHTML = 'faz bem pet';
    //   case 3:
    //     modalContent.innerHTML = 'alessandra';
    //   case 4:
    //   modalContent.innerHTML = 'kelly';
    //   case 5:
    //   modalContent.innerHTML = 'dl doces';
    //   case 6:
    //   modalContent.innerHTML = 'soho';
    //   case 7:
    //     modalContent.innerHTML = 'dr caramelo';
    //   case 8:
    //   modalContent.innerHTML = 'curriculum';
    //   break;
    // }
  });
});

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
window.addEventListener('scroll', fadeScroll)
