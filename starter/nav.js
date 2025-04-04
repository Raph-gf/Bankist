'use strict';

// Event delegation (Page navigation)

/* Old school way
document.querySelectorAll('.nav__link').forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();

    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
*/

// Modern Way
// 1. Add event listener to common parent element
// 2. Determine what element orginated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  // Matchting strategy (ignore clicks that are not links)
  //  if (e.target.matches('nav__link')) OR
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  } else {
    return;
  }
});

// Passing arguments To Event Handlers
// Links fade animation

// const handlHover = function (e) {
//   console.log(this, e.currentTarget);
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = this;
//     });
//     logo.style.opacity = this;
//   }
// };
// const nav = document.querySelector('.nav');

// OU fonction fleche pour eviter le .bind()

const handleHover = (opacity, e) => {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

const nav = document.querySelector('.nav');

// Passing "argument" into event handler function
// Utilisation avec fonctions fléchées pour passer l'opacité
nav.addEventListener('mouseover', e => handleHover(0.5, e));
nav.addEventListener('mouseout', e => handleHover(1, e));
// nav.addEventListener('mouseover', handlHover.bind(0.5));
// nav.addEventListener('mouseout', handlHover.bind(1));
