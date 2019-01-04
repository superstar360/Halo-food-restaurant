var header = document.getElementById("header");

window.addEventListener("load", changeImage)

var i = 0,
    images = [],
    time = 5000;

    images[0] = '/Resources/CSS/Image/hero1.jpg';
    images[1] = '/Resources/CSS/Image/hero2.jpg';
    images[2] = '/Resources/CSS/Image/hero3.jpg';

function changeImage() {
  header.style.backgroundImage = "linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(" + images[i] + ")";

 
  if(i < images.length - 1) {
    i++
  } else {
    i = 0
  }

   
  setTimeout(function(){
    changeImage();
    
  }, time)
   
}

