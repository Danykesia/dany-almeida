// Current year
let currentDate = document.querySelector('.currentYear')
let date = new Date;
let year = date.getFullYear();

currentDate.innerHTML = year;

// Make navbar mobile appear and disappear.
const btnToggle = document.querySelector('.mfe-toggle');
const mobileNav = document.querySelector('.mfe-mobile-nav');
const menuTxt = document.querySelector('.text-menu');
const projectNavA = document.querySelectorAll('.mfe-mobile-nav li a');

btnToggle.addEventListener('click', function () {
  this.classList.toggle('activate');
  mobileNav.style.visibility = 'visible';
  mobileNav.style.transition = 'transform .9s';
  mobileNav.classList.toggle('show-nav');
  menuTxt.classList.toggle('activate');
});
projectNavA.forEach((a) => {
  a.addEventListener('click', function() {
    mobileNav.classList.remove('show-nav');
    btnToggle.classList.remove('activate');
  });
});

// Modal
const projectModal = document.querySelector('.project-modal');
const modalImg = document.querySelector('.modal-img');
const closeModal = document.querySelector('.project-modal i');

closeModal.addEventListener('click', () => {
  projectModal.style.display = 'none';
})

const modalBox = document.querySelector('.mfe-modal-box');
modalBox.addEventListener('click', (e) => {
  if (e.target.matches('.mapping-img')) {
    projectModal.style.display = 'flex';
    modalImg.src = '/metal-for-everyone-img/sitemapping.webp'
  }
})