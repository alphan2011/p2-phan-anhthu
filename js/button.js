// Read More button
var button = document.querySelector(".read");
var para = document.querySelector(".para");

button.addEventListener("click",
  function() {
    para.style.display = "block";
  }, false
);