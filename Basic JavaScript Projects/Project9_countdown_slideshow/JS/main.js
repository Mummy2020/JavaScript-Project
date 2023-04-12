function countdown() {//count down slide show function
    var seconds = document.getElementById("seconds").value;//This code sets the variable seconds and the value to be entered
    function tick() { //tick function:counting the number of ticks
        seconds = seconds - 1;//this codes sets timer so when it hits 0 it will dispaly 'time is up!'
        timer.innerHTML = seconds;//set the timer to the value entered on the screen
        var time = setTimeout(tick, 1000);//The program is pausing for 1000 melliseconds 
        if (seconds == -1){//This sets the time to zero
            alert("Time's up!");//This wil;l make the alert pop up on the screen
            clearTimeout(time);
            timer.innerHTML = "";
        }

    }
    tick();
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {//Slide show function
  let i;
  let slides = document.getElementsByClassName("mySlides");//Setting the variable slides to mySlide
  let dots = document.getElementsByClassName("dot");//Setting the variable dots to mySlide
  if (n > slides.length) {slideIndex = 1}//This code sets the slide lenght condition
  if (n < 1) {slideIndex = slides.length}//This code sets the slide lenth condition
  for (i = 0; i < slides.length; i++) {//This code sets the conditon for the slide display on the port
    slides[i].style.display = "none";//This code sets the slide default dispaly to none
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";//This code displays slides in block style
  dots[slideIndex-1].className += " active";//This code links the onclick in the html
}