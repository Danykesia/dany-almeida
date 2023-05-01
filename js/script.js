// Infinity carousel
const workSlider = document.querySelector('.work-slider');
const workCarousel = document.querySelector('.work-carousel')

const workArrowLeft = document.querySelector('#work-arrow-left');
const workArrowRight = document.querySelector('#work-arrow-right');

let direction = -1;

workArrowLeft.addEventListener('click', () => {
  if (direction === -1) {
    workSlider.appendChild(workSlider.firstElementChild);
    direction = 1;
  };

  workCarousel.style.justifyContent = 'flex-end'
  console.log(direction)
  workSlider.style.transform = 'translate(16.66%)';
});

workArrowRight.addEventListener('click', () => {
  if (direction === 1) {
    workSlider.prepend(workSlider.lastElementChild);
    direction = -1;
  }
  workCarousel.style.justifyContent = 'flex-start'
  console.log(direction)
  workSlider.style.transform = 'translate(-16.66%)';
});

workSlider.addEventListener('transitionend', () => {
  if (direction === -1) {
    workSlider.appendChild(workSlider.firstElementChild);
  } else if (direction === 1) {
    workSlider.prepend(workSlider.lastElementChild);
  }

  workSlider.style.transition = 'none';
  workSlider.style.transform = 'translate(0)';

  setTimeout(() => {
    workSlider.style.transition = 'all .5s';
  });
});

// Expanded section
const viewMore = document.querySelector('.view-more-icon');
const viewLess = document.querySelector('.view-less-icon');
const infoSection = document.querySelector('.work-card');
const workDescription = document.querySelector('.work-info-description');

viewMore.addEventListener('click', () => {
  viewMore.classList.toggle('hide');
  infoSection.classList.add('expand-section');
  workDescription.style.display = "flex"

  if (viewMore.classList.contains('hide')) {
    viewLess.classList.add('show');
    console.log('show')
  }
})

viewLess.addEventListener('click', () => {
  viewLess.classList.toggle('show');
  infoSection.classList.remove('expand-section');
  workDescription.style.display = "none";
  viewMore.classList.remove('hide');
})