/* Slider
const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.3) translateX(-1200px)';
slider.style.overflow = 'visible';
*/

const slider = () => {
  // Selectors
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  const maxSlide = slides.length;

  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  const dotContainer = document.querySelector('.dots');

  // Functions
  // Create Dots
  const createDots = () => {
    slides.forEach((s, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class='dots__dot' data-slide ='${i}'></button>`
      );
    });
  };

  // Activate Dots
  const activateDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, index) =>
        (s.style.transform = `translateX(${100 * (index - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = () => {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
      goToSlide(currentSlide);
      activateDots(currentSlide);
    }
  };

  // Previous slide
  const prevSlide = () => {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
      goToSlide(currentSlide);
      activateDots(currentSlide);
    }
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDots(0);
  };
  init();

  // Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // Keyboard event
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide(currentSlide);
      activateDots(currentSlide);
    } else {
      e.preventDefault();
      nextSlide(currentSlide);
      activateDots(currentSlide);
    }
  });

  // Dots
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDots(curSlide);
    }
  });
};
slider();
