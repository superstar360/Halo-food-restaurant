
let scroll = document.getElementById("scroll");
let nav    = document.getElementById("navid");
let span   = document.getElementById("span-scroll")

window.addEventListener("scroll", () => {
    
    const scrolled = window.scrollY;
    if (scrolled > 0) {
        scroll.classList.add("backgrd-clr");
        nav.classList.add("scroll-nav");
        span.classList.add("scroll-nav");
    } else {
        scroll.classList.remove("backgrd-clr");
        nav.classList.remove("scroll-nav");
        span.classList.remove("scroll-nav");
    }
    
});