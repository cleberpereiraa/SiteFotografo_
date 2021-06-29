var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
/********************************************************** */
function clicou1(){
    var img = document.getElementById("ges");
    img.style.width = "500px"          /*testeeee*////
}
function saiu1(){
    let img = document.getElementById("ges");
    img.style.width = "350px"
}

function clicou2(){
    let img = document.getElementById("pre");
    img.style.width = "500px"          /*testeeee*////
}
function saiu2(){
    let img = document.getElementById("pre");
    img.style.width = "350px"
}

function clicou3(){
    let img = document.getElementById("casal");
    img.style.width = "500px"          /*testeeee*//// 
}
function saiu3(){
    let img = document.getElementById("casal");
    img.style.width = "350px"
}
function clicou4(){
    let img = document.getElementById("ani");
    img.style.width = "500px"          /*testeeee*////
}
function saiu4(){
    let img = document.getElementById("ani");
    img.style.width = "350px"
}
