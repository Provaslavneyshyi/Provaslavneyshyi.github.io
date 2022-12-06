AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 50, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


const header = document.querySelector(".header");
const about = document.querySelector(".about");
const menu__active = document.querySelectorAll(".menu__item");

window.addEventListener("scroll", function(){
    let scrollPos = window.scrollY;

    if (scrollPos >= 935){
        header.classList.add("fixed-head");
        about.classList.add("more-height");
    } else {
        header.classList.remove("fixed-head");
        about.classList.remove("more-height");
    }

});



const home__link = document.querySelector(".home__link");
const about__link = document.querySelector(".about__link");
const skill__link = document.querySelector(".skill__link");
const work__link = document.querySelector(".work__link");
const cont__link = document.querySelector(".cont__link");

const about__animation = document.querySelector(".about__avatar img");


menu__active.forEach(function(item){

        window.addEventListener("scroll", function(){
        let scrollPosition = window.scrollY;

         if (scrollPosition > 0 && scrollPosition < 900){
         home__link.classList.add('menu__item_active');
         } else {
         home__link.classList.remove('menu__item_active');
         }

         if (scrollPosition > 842 && scrollPosition < 1800){
         about__link.classList.add('menu__item_active');
         } else {
         about__link.classList.remove('menu__item_active');
         }

         if (scrollPosition > 1800 && scrollPosition < 2620){
         skill__link.classList.add('menu__item_active');
         } else {
         skill__link.classList.remove('menu__item_active');
         }

         if (scrollPosition > 2620 && scrollPosition < 4200){
         work__link.classList.add('menu__item_active');
         } else {
         work__link.classList.remove('menu__item_active');
         }

         if (scrollPosition > 4200){
         cont__link.classList.add('menu__item_active');
         } else {
         cont__link.classList.remove('menu__item_active');
         }

     });


    item.addEventListener("click", function(){
        let curentBtn = item;

         menu__active.forEach(function(item){
            item.classList.remove('menu__item_active');
         });

         curentBtn.classList.add('menu__item_active');



     });
});



const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

























