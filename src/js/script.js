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
const imgProjects = document.querySelectorAll('.mobile-images img');
// Select project images
const projectImg1 = document.querySelector('.project-image1');
const projectImg2 = document.querySelector('.project-image2');
const projectImg3 = document.querySelector('.project-image3');
const projectImg4 = document.querySelector('.project-image4');
const projectImg5 = document.querySelector('.project-image5');
const projectImg6 = document.querySelector('.project-image6');
const projectImg7 = document.querySelector('.project-image7');
const projectImg8 = document.querySelector('.project-image8');
const projectImg9 = document.querySelector('.project-image9');
const projectImg10 = document.querySelector('.project-image10');
const projectImg11 = document.querySelector('.project-image11');
const projectImg12 = document.querySelector('.project-image12');
const projectImg13 = document.querySelector('.project-image13');
const projectImg14 = document.querySelector('.project-image14');
const projectImg15 = document.querySelector('.project-image15');
const projectImg16 = document.querySelector('.project-image16');

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
  body.style.overflow = 'auto';

  imgProjects.src = '';
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
      projectDetails('SESMT Digital', './img/projects/sesmt/sesmt-header-img.webp');
      projectImg1.src = './img/projects/sesmt/sesmt-dsk-1.webp';
      projectImg2.src = './img/projects/sesmt/sesmt-dsk-2.webp';
      projectImg3.src = './img/projects/sesmt/sesmt-mobile-1.webp';
      projectImg4.src = './img/projects/sesmt/sesmt-mobile-2.webp';
      projectImg5.src = './img/projects/sesmt/sesmt-mobile-3.webp';
      projectImg6.src = './img/projects/sesmt/sesmt-mobile-4.webp';
      projectImg7.src = './img/projects/sesmt/sesmt-mobile-5.webp';
      projectImg8.src = './img/projects/sesmt/sesmt-mobile-6.webp';
      projectImg9.src = './img/projects/sesmt/sesmt-mobile-7.webp';
      projectImg10.style.display = 'none';
      projectImg11.style.display = 'none';
      projectImg14.style.display = 'none';
      projectImg15.style.display = 'none';
      projectImg16.style.display = 'none';
    }
    if (index === 1) {
      projectDetails('Ampla +', './img/projects/ampla-mais/amplamais-header.webp');
      projectImg1.src = './img/projects/ampla-mais/ampla-dsk-1.webp';
      projectImg2.src = './img/projects/ampla-mais/ampla-dsk-2.webp';
      projectImg3.src = './img/projects/ampla-mais/ampla-mobile-1.webp';
      projectImg4.src = './img/projects/ampla-mais/ampla-mobile-2.webp';
      projectImg5.src = './img/projects/ampla-mais/ampla-mobile-3.webp';
      projectImg6.src = './img/projects/ampla-mais/ampla-mobile-4.webp';
      projectImg7.src = './img/projects/ampla-mais/ampla-mobile-5.webp';
      projectImg8.src = './img/projects/ampla-mais/ampla-mobile-6.webp';
      projectImg9.src = './img/projects/ampla-mais/ampla-mobile-7.webp';
      projectImg10.src = './img/projects/ampla-mais/ampla-mobile-8.webp';
      projectImg11.src = './img/projects/ampla-mais/ampla-mobile-9.webp';
    }
    if (index === 2) {
      projectDetails('LH Homeopatia', './img/projects/lh-homeopatia/lh-homeopatia-header-img.webp')
      projectImg1.src = './img/projects/lh-homeopatia/lh-homeopatia-dsk-1.webp';
      projectImg2.src = './img/projects/lh-homeopatia/lh-homeopatia-dsk-2.webp';
      projectImg3.src = './img/projects/lh-homeopatia/lh-homeopatia-mobile-1.webp';
      projectImg4.src = './img/projects/lh-homeopatia/lh-homeopatia-mobile-2.webp';
      projectImg5.src = './img/projects/lh-homeopatia/lh-homeopatia-mobile-3.webp';
      projectImg6.src = './img/projects/lh-homeopatia/lh-homeopatia-mobile-4.webp';
      projectImg7.src = './img/projects/lh-homeopatia/lh-homeopatia-mobile-5.webp';
      projectImg8.src = './img/projects/lh-homeopatia/lh-homeopatia-mobile-6.webp';
      projectImg9.style.display = 'none';
      projectImg10.style.display = 'none';
      projectImg11.style.display = 'none';
      projectImg14.style.display = 'none';
      projectImg15.style.display = 'none';
      projectImg16.style.display = 'none';
    }
    if (index === 3) {
      projectDetails('Kelly Niglio', './img/projects/kelly/kelly-header.webp');
      projectImg1.src = './img/projects/kelly/kelly-dsk-1.webp';
      projectImg2.src = './img/projects/kelly/kelly-dsk-2.webp';
      projectImg12.src = './img/projects/kelly/kelly-dsk-3.webp';
      projectImg13.src = './img/projects/kelly/kelly-dsk-4.webp';
      projectImg3.src = './img/projects/kelly/kelly-mobile-1.webp';
      projectImg4.src = './img/projects/kelly/kelly-mobile-2.webp';
      projectImg5.src = './img/projects/kelly/kelly-mobile-3.webp';
      projectImg6.src = './img/projects/kelly/kelly-mobile-4.webp';
      projectImg7.src = './img/projects/kelly/kelly-mobile-5.webp';
      projectImg8.src = './img/projects/kelly/kelly-mobile-6.webp';
      projectImg9.src = './img/projects/kelly/kelly-mobile-7.webp';
      projectImg8.src = './img/projects/kelly/kelly-mobile-8.webp';
      projectImg9.src = './img/projects/kelly/kelly-mobile-9.webp';
      projectImg10.src = './img/projects/kelly/kelly-mobile-10.webp';
      projectImg11.src = './img/projects/kelly/kelly-mobile-11.webp';
      projectImg14.src = './img/projects/kelly/kelly-mobile-12.webp';
      projectImg15.src = './img/projects/kelly/kelly-mobile-13.webp';
      projectImg16.src = './img/projects/kelly/kelly-mobile-14.webp';
    }
    if (index === 4) {
      projectDetails('B4S Marketing Digital - Landing Page Advocacia', './img/projects/b4s-adv/b4s-adv-header-img.webp');
      projectImg1.src = './img/projects/b4s-adv/b4s-adv-dsk-1.webp';
      projectImg2.src = './img/projects/b4s-adv/b4s-adv-dsk-2.webp';
      projectImg3.src = './img/projects/b4s-adv/b4s-adv-mobile-1.webp';
      projectImg4.src = './img/projects/b4s-adv/b4s-adv-mobile-2.webp';
      projectImg5.src = './img/projects/b4s-adv/b4s-adv-mobile-3.webp';
      projectImg6.src = './img/projects/b4s-adv/b4s-adv-mobile-4.webp';
      projectImg7.src = './img/projects/b4s-adv/b4s-adv-mobile-5.webp';
      projectImg8.src = './img/projects/b4s-adv/b4s-adv-mobile-6.webp';
      projectImg9.src = './img/projects/b4s-adv/b4s-adv-mobile-7.webp';
      projectImg10.style.display = 'none';
      projectImg11.style.display = 'none';
      projectImg14.style.display = 'none';
      projectImg15.style.display = 'none';
      projectImg16.style.display = 'none';
    }
    if (index === 5) {
      projectDetails('Motion Studio', './img/projects/motion/motion-header-img.webp');
      projectImg1.src = './img/projects/motion/motion-dsk-1.webp';
      projectImg2.src = './img/projects/motion/motion-dsk-2.webp';
      projectImg3.src = './img/projects/motion/motion-mobile-1.webp';
      projectImg4.src = './img/projects/motion/motion-mobile-2.webp';
      projectImg5.src = './img/projects/motion/motion-mobile-3.webp';
      projectImg6.src = './img/projects/motion/motion-mobile-4.webp';
      projectImg7.src = './img/projects/motion/motion-mobile-5.webp';
      projectImg8.src = './img/projects/motion/motion-mobile-6.webp';
      projectImg9.style.display = 'none';
      projectImg10.style.display = 'none';
      projectImg11.style.display = 'none';
      projectImg11.style.display = 'none';
      projectImg14.style.display = 'none';
      projectImg15.style.display = 'none';
      projectImg16.style.display = 'none';
    }
    if (index === 6) {
      projectDetails('Soho Hair', './img/projects/soho/soho-header-img.webp');
      projectImg1.src = './img/projects/soho/soho-dsk-1.webp';
      projectImg2.src = './img/projects/soho/soho-dsk-2.webp';
      projectImg12.src = './img/projects/soho/soho-dsk-3.webp';
      projectImg13.style.display = 'none';
      projectImg3.src = './img/projects/soho/soho-mobile-1.webp';
      projectImg4.src = './img/projects/soho/soho-mobile-2.webp';
      projectImg5.src = './img/projects/soho/soho-mobile-3.webp';
      projectImg6.src = './img/projects/soho/soho-mobile-4.webp';
      projectImg7.src = './img/projects/soho/soho-mobile-5.webp';
      projectImg8.src = './img/projects/soho/soho-mobile-6.webp';
      projectImg9.src = './img/projects/soho/soho-mobile-7.webp';
      projectImg10.style.display = 'none';
      projectImg11.style.display = 'none';
      projectImg14.style.display = 'none';
      projectImg15.style.display = 'none';
      projectImg16.style.display = 'none';
    }
    if (index === 7) {
      projectDetails('Dr. Caramelo', './img/projects/drcaramelo/drcaramelo-header-img.webp');
      projectImg1.src = './img/projects/drcaramelo/drcaramelo-dsk-1.webp';
      projectImg2.src = './img/projects/drcaramelo/drcaramelo-dsk-2.webp';
      projectImg3.src = './img/projects/drcaramelo/drcaramelo-mobile-1.webp';
      projectImg4.src = './img/projects/drcaramelo/drcaramelo-mobile-2.webp';
      projectImg5.src = './img/projects/drcaramelo/drcaramelo-mobile-3.webp';
      projectImg6.src = './img/projects/drcaramelo/drcaramelo-mobile-4.webp';
      projectImg7.src = './img/projects/drcaramelo/drcaramelo-mobile-5.webp';
      projectImg8.src = './img/projects/drcaramelo/drcaramelo-mobile-6.webp';
      projectImg9.style.display = 'none';
      projectImg10.style.display = 'none';
      projectImg11.style.display = 'none';
      projectImg12.style.display = 'none';
      projectImg14.style.display = 'none';
      projectImg15.style.display = 'none';
      projectImg16.style.display = 'none';
    }
    if (index === 8) {
      projectDetails('B4S Marketing Digital - Landing Page Energia Solar', './img/projects/b4s-solar/b4s-solar-header-img.webp');
      projectImg1.src = './img/projects/b4s-solar/b4s-solar-dsk-1.webp';
      projectImg2.src = './img/projects/b4s-solar/b4s-solar-dsk-2.webp';
      projectImg3.src = './img/projects/b4s-solar/b4s-solar-mobile-1.webp';
      projectImg4.src = './img/projects/b4s-solar/b4s-solar-mobile-2.webp';
      projectImg5.src = './img/projects/b4s-solar/b4s-solar-mobile-3.webp';
      projectImg6.src = './img/projects/b4s-solar/b4s-solar-mobile-4.webp';
      projectImg7.src = './img/projects/b4s-solar/b4s-solar-mobile-5.webp';
      projectImg8.src = './img/projects/b4s-solar/b4s-solar-mobile-6.webp';
      projectImg9.src = './img/projects/b4s-solar/b4s-solar-mobile-7.webp';
      projectImg10.src = './img/projects/b4s-solar/b4s-solar-mobile-8.webp';
      projectImg11.style.display = 'none';
      projectImg14.style.display = 'none';
      projectImg15.style.display = 'none';
      projectImg16.style.display = 'none';
    }
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
window.addEventListener('scroll', fadeScroll);

// Show overlay on mobile devices
const cardProjects = document.querySelectorAll('.portfolio-wrapper .card');
const cardOverlay = document.querySelector('.overlay');

cardProjects.forEach(card => {
  card.addEventListener('click', () => {
    cardOverlay.classList.add('show')
  });
});