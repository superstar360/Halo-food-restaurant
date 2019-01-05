var slider = document.getElementById("home"),
    arrowRight= document.getElementById("arrow-right"),
    arrowLeft= document.getElementById("arrow-left");


window.addEventListener("load", init)
arrowRight.addEventListener("click", moveRight);
arrowLeft.addEventListener("click", moveLeft);


var i = 0,
    images = [],
    time = 5000;

    images[0] = '/Resources/CSS/Image/hero1.jpg';
    images[1] = '/Resources/CSS/Image/hero2.jpg';
    images[2] = '/Resources/CSS/Image/hero3.jpg';

// start Init
 function init() {
    slider.style.backgroundImage = "linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(" + images[0] + ")";

 }

// Move Right
function moveRight() {
  slider.style.backgroundImage = "linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(" + images[i] + ")";
  if(i < images.length - 1) {
    i++
  } else {
    i = 0
  }
  
}

// Move Left
function moveLeft() {
  slider.style.backgroundImage = "linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(" + images[i] + ")";
  if(i === 0) {
    i = images.length - 1
  } else {
    i--
  }
  
}

//start startSlider
function startSlider() {
  setInterval(() => {
    moveRight();
  }, time);
}

startSlider();