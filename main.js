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
         about__animation.classList.add('avatar__animation');
         } else {
         about__link.classList.remove('menu__item_active');
         about__animation.classList.remove('avatar__animation');
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



























