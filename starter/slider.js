// Slider
// const slider = document.querySelector('.slider');
// // slider.style.transform = 'scale(0.3) translateX(-1200px)';
// slider.style.overflow = 'visible';

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const maxSlide = slides.length;

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const goToSlide = function (slide) {
  slides.forEach(
    (s, index) => (s.style.transform = `translateX(${100 * (index - slide)}%)`)
  );
};
goToSlide(0);

// Next slide
const nextSlide = () => {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
    goToSlide(currentSlide);
  }
};

// Previous slide
const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
    goToSlide(currentSlide);
  }
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
