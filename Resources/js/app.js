var slider = document.getElementById("home"),
    arrowRight= document.getElementById("arrow-right"),
    arrowLeft= document.getElementById("arrow-left");


window.addEventListener("load", startSlider)
arrowRight.addEventListener("click", moveRight);
arrowLeft.addEventListener("click", moveLeft);


var i = 0,
    images = [],
    time = 3000;

    images[0] = '/Resources/CSS/Image/hero1.jpg';
    images[1] = '/Resources/CSS/Image/hero2.jpg';
    images[2] = '/Resources/CSS/Image/hero3.jpg';

// start slider
 function startSlider() {
    slider.style.backgroundImage = "linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(" + images[i] + ")";
    i++;
  setTimeout(() => {
      if (i >= 3){
          i = 0;
      }
      startSlider(i)

  }, time);
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

