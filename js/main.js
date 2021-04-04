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