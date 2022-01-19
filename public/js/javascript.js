window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("navbar").style.backgroundColor = "#F8F3D7";
    document.getElementById("navbar").style.color = "black";
}
  else{
    document.getElementById("navbar").style.backgroundColor = "transparent";
  } 
}