let scroll = document.getElementById("scroll");
let nav    = document.getElementById("navid");
let span   = document.getElementById("span-scroll");
let imgsize = document.getElementById("img-size");

window.addEventListener("scroll", () => {
    
    const scrolled = window.scrollY;
    if (scrolled > 0) {
        scroll.classList.add("backgrd-clr");
        nav.classList.add("scroll-nav");
        span.classList.add("scroll-nav");
        imgsize.classList.add("logo1");
        imgsize.classList.remove("logo");
    } else {
        scroll.classList.remove("backgrd-clr");
        nav.classList.remove("scroll-nav");
        span.classList.remove("scroll-nav");
        imgsize.classList.remove("logo1");
        imgsize.classList.add("logo");
    }
    
});