// Current year
let currentDate = document.querySelector('.currentYear')
let date = new Date;
let year = date.getFullYear();

currentDate.innerHTML = year;

//Make navbar background color change
const nav = document.querySelector('header');
const aLink = document.querySelectorAll('.desktop-nav a');
const logo = document.querySelector('.logo');
  window.addEventListener("scroll", function(event) {
    if(window.scrollY > 0){
      nav.classList.add('navbar-color', window.scrollY > 0)
        aLink.forEach((link) => {
          link.style.color = 'var(--primary-x-dark)';
        link.onmouseover = () => {
          link.style.color = 'var(--accent-dark)';
        };
        link.onmouseout = () => {
          link.style.color = 'var(--primary-x-dark)';
        };   
        });
        logo.src = '/img/logo-dark.svg';
    }
    else{
      nav.classList.remove('navbar-color', window.scrollY > 0)
      aLink.forEach((link) => {
        link.style.color = '#fff';
          link.onmouseover = () => {
            link.style.color = '#84c7ff';
          };
          link.onmouseout = () => {
            link.style.color = '#fff';
          };
      });
      logo.src = '/img/logo-light.svg';
    }
});

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


// Make navbar mobile appear and disappear.
const btnToggle = document.querySelector('.mfe-toggle');
const mobileNav = document.querySelector('.mfe-mobile-nav');
const menuTxt = document.querySelector('.text-menu');
btnToggle.addEventListener('click', function () {
  this.classList.toggle('activate');
  mobileNav.style.visibility = 'visible';
  mobileNav.style.transition = 'transform .9s';
  mobileNav.classList.toggle('show-nav');
  menuTxt.classList.toggle('activate');
});