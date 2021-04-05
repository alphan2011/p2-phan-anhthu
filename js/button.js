// Read More button
var details = document.getElementsByClassName("details");

function togglePara() {
  this.children[1].classList.toggle("display");
}

for(i=0; i < details.length; i++) {
  details[i].addEventListener("mouseenter", togglePara);
  details[i].addEventListener("mouseleave", togglePara);
}