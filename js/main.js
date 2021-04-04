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

// Hamburger menu
var menu = document.querySelector(".menu")
var hamburger = document.querySelector(".hamburger")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

hamburger.addEventListener("click", toggleMenu)

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
}

var menuLinks = document.querySelectorAll(".menuLinks")

menuLinks.forEach(
  function (menuLinks) {
    menuLinks.addEventListener("click", toggleMenu)
  }
)