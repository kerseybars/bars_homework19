
var helloWorld = "Hello World!";

console.log(helloWorld);

function fade() {
$(".preloader").fadeOut("slow");
}
    
setTimeout(fade, 3000);

mybutton = document.getElementById("myBtn")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
