console.log("hello world");


const header = document.querySelector(".header");
const about = document.querySelector(".about");

window.addEventListener("scroll", function(){
    let scrollPos = window.scrollY;

    if (scrollPos >= 935){
        header.classList.add("fixed-head");
        about.classList.add("more-height");
    }

   else {
        header.classList.remove("fixed-head");
        about.classList.remove("more-height");
    }

});
