
function myFunction() {
  var element = document.getElementById("wrapp");
  element.classList.toggle("collapse");
}

function resize() {
  var x = document.getElementById("nav_bar_resize");

 
  if (window.screen.width <= 900) {
    x.style.display = "block";
  }else if (window.screen.width >= 900){
  x.style.display = "none";
   }
} 
