'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

btnScrollTo.addEventListener('click', e => {
  // Current position off the element
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  // Curent scroll position
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // Dimension off the viewport
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // OLD SCHOOL WAY
  // Scroling
  //   window.scrollTo(
  //     s1coords.left + window.pageXOffset,
  //     s1coords.top + window.pageYOffset
  //   );
  //   // Smooth Scrolling
  //   window.scrollTo({
  //     left: s1coords.left + window.pageXOffset,
  //     top: s1coords.top + window.pageYOffset,
  //     behavior: 'smooth',
  //   });

  // NEW SCHOOL WAY (only work on modern browser)
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Sticky navigation : The scroll event

// Old School
/*const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll', function (e) {
  console.log(window.scrollY);
  if (this.window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
});
*/

// With intersection Observer API
/*const obsCallback = function (entries, observer) {
  entries.array.forEach(entry => {
    console.log(entry);
  });
};
const obsOption = {
  root: null,
  threshold: [0,0.2],
};

const observer = new IntersectionObserver();
observer.observe(section1);
*/
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
