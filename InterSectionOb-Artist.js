/* JS FOR THE INTERSECTION OBSERVER */

/* 
HOW TO:
https://www.youtube.com/watch?v=T8EYosX4NOo&ab_channel=KevinPowell
https://www.youtube.com/watch?v=RxnV9Xcw914&ab_channel=KevinPowell
https://www.youtube.com/watch?v=huVJW23JHKQ&ab_channel=KevinPowell

*/

const sectionToOBserve = document.getElementById("under-hero-section");
const buttonsToChange = document.getElementsByClassName(
  "artist-main-play-button"
);

const navBarToToggle = document.querySelector(".nav-wrapper-inner");
const navTextToggle = document.querySelector(".nav-text-toggling");

console.log(navBarToToggle);
console.log(buttonsToChange);

const options = {
  root: null,
  threshold: 0.8,
  rootMargin: "-150px",
};

const observerNav = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    /* console.log(entry);
        console.log(entry.target); */
    console.log(entry.isIntersecting);

    if (!entry.isIntersecting) {
      buttonsToChange[0].classList.remove("d-none");
      buttonsToChange[1].classList.add("d-none");
      navBarToToggle.classList.add("nav-background-toggle-artist");
      navTextToggle.classList.remove("d-none");
      return;
    }

    if (entry.isIntersecting) {
      buttonsToChange[0].classList.add("d-none");
      buttonsToChange[1].classList.remove("d-none");
      navBarToToggle.classList.remove("nav-background-toggle-artist");
      navTextToggle.classList.add("d-none");
    }
  });
}, options);

observerNav.observe(sectionToOBserve);

/* JS FOR THE INTERSECTION OBSERVER END */
    root: null,
    threshold: 0.8,
    rootMargin: "-150px",
 };

const observerNav = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        /* console.log(entry);
        console.log(entry.target); */
        console.log(entry.isIntersecting);
       
        if (!entry.isIntersecting) {
          buttonsToChange[0].classList.remove("d-none");
          buttonsToChange[1].classList.add("d-none");
          navBarToToggle.classList.add("nav-background-toggle-artist");
          navTextToggle.classList.remove("d-none");
          return;
        }
        
        
        if (entry.isIntersecting) {
            buttonsToChange[0].classList.add("d-none");
            buttonsToChange[1].classList.remove("d-none");
            navBarToToggle.classList.remove("nav-background-toggle-artist");
            navTextToggle.classList.add("d-none");            
        }
    });
}, options);

observerNav.observe(sectionToOBserve);
