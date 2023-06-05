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
let arrowDown = document.querySelector('.btn-languages');
let hiddenFlag = document.querySelector('.language-hidden');
let body = document.querySelector('body');

arrowDown.addEventListener('click', () => {
  hiddenFlag.classList.toggle('show');
});

window.onclick = function(e){
  if (!e.target.matches('.btn-languages') && hiddenFlag.classList.contains('show')) {
    hiddenFlag.classList.remove('show');
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
