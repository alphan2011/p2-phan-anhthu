// Air quality API
var city = document.getElementById("city");
var country = document.getElementById("country");
var aqius = document.getElementById("aqius");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        city.innerHTML = apiResult.data.city;

        country.innerHTML = apiResult.data.country;

        aqius.innerHTML = apiResult.data.current.pollution.aqius;
    }
};
xmlhttp.open('GET', 'http://api.airvisual.com/v2/nearest_city?key=536bcd9b-c208-4f46-9b2a-75bc3ed56ac1', true);
xmlhttp.send();

// Read More button
var button = document.querySelector(".read");
var para = document.querySelector(".para");

button.addEventListener("click",
  function() {
    para.style.display = "block";
  }, false
);

// Hamburger menu
var menu = document.querySelector(".menu");
var hamburger = document.querySelector(".hamburger");
var xIcon = document.querySelector(".xIcon");
var menuIcon = document.querySelector(".menuIcon");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
};

var menuLinks = document.querySelectorAll(".menuLinks");

menuLinks.forEach(
  function (menuLinks) {
    menuLinks.addEventListener("click", toggleMenu)
  }
);

// Pop-up ad
window.addEventListener("load",
  function() {
    document.querySelector(".pop-up").classList.add("show");
    document.querySelector("main").style.opacity = "0.1";
  }, false
);

var close = document.getElementById("exit");
close.addEventListener("click",
  function() {
    document.querySelector(".pop-up").classList.remove("show");
    document.querySelector("main").style.opacity = "1";
    close.style.display = "none";
  }, false
);