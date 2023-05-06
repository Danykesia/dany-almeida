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
})

// Infinity carousel
// const workSlider = document.querySelector('.work-slider');
// const workCarousel = document.querySelector('.work-carousel')

// const workArrowLeft = document.querySelector('#work-arrow-left');
// const workArrowRight = document.querySelector('#work-arrow-right');

// let direction = -1;

// workArrowLeft.addEventListener('click', () => {
//   if (direction === -1) {
//     workSlider.appendChild(workSlider.firstElementChild);
//     direction = 1;
//   };

//   workCarousel.style.justifyContent = 'flex-end';
//   workSlider.style.transform = 'translate(16.66%)';
// });

// workArrowRight.addEventListener('click', () => {
//   if (direction === 1) {
//     workSlider.prepend(workSlider.lastElementChild);
//     direction = -1;
//   }
//   workCarousel.style.justifyContent = 'flex-start'
//   workSlider.style.transform = 'translate(-16.66%)';
// });

// workSlider.addEventListener('transitionend', () => {
//   if (direction === -1) {
//     workSlider.appendChild(workSlider.firstElementChild);
//   } else if (direction === 1) {
//     workSlider.prepend(workSlider.lastElementChild);
//   }

//   workSlider.style.transition = 'none';
//   workSlider.style.transform = 'translate(0)';

//   setTimeout(() => {
//     workSlider.style.transition = 'all .5s';
//   });
// });

// // Expanded section
// const viewMore = document.querySelectorAll('.view-more-icon');
// const viewLess = document.querySelectorAll('.view-less-icon');
// const infoSection = document.querySelectorAll('.work-card');
// const workDescription = document.querySelectorAll('.work-info-description');

// viewMore.forEach(arrowMore => {
//   arrowMore.addEventListener('click', () => {
//     viewMore.forEach(arrowUp => {
//       arrowUp.classList.toggle('hide');
//     });

//     infoSection.forEach(info => {
//       info.classList.add('expand-section');
//     });

//     workDescription.forEach(description => {
//       description.style.display = "flex";
//     });

//     viewLess.forEach(arrowLess => {
//       if (arrowMore.classList.contains('hide')) {
//         arrowLess.classList.add('show');
//       }
//     })
//   })
// });

// viewLess.forEach(arrowLess => {
//   arrowLess.addEventListener('click', () => {
//     arrowLess.classList.toggle('show');

//     infoSection.forEach(info => {
//       info.classList.remove('expand-section');
//     });

//     workDescription.forEach(description => {
//       description.style.display = "none";
//     })

//     viewMore.forEach(arrowMore => {
//       arrowMore.classList.remove('hide');
//     });
//   });
// });