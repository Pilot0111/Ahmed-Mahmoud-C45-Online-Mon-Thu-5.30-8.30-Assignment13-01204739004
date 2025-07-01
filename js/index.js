var data;
function search(city) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.open(
    "get",
    `https://api.weatherapi.com/v1/forecast.json?key=5277360942a948fabec200511252706&q=${city}&days=3`
  );

  httpRequest.responseType = "json";
  httpRequest.send();

  httpRequest.addEventListener("load", function () {
  //    if (httpRequest.status !== 200 || !httpRequest.response || !httpRequest.response.location) {
  //   alert("City not found or API error");
  //   return;
  // }
    data = httpRequest.response;
    var short = data.forecast.forecastday;

    var Mdate = short[0].date;
    document.getElementsByClassName("day")[0].innerHTML =
      days[new Date(Mdate).getDay()];
    document.getElementsByClassName("date")[0].innerHTML =
      new Date(Mdate).getDate() + " " + monthNames[new Date(Mdate).getMonth()];
    document.getElementsByClassName("city")[0].innerHTML = data.location.name;
    document.querySelector(".numb").innerHTML = data.current.temp_c;
    document.getElementById("statusImg").src =
      "https:" + data.current.condition.icon;
    document.querySelector(".status").innerHTML = data.current.condition.text;
    document.querySelector(".humidity").innerHTML = data.current.humidity;
    document.querySelector(".wind").innerHTML = data.current.wind_kph;
    document.querySelector(".direction").innerHTML =
      WindDirectionDescription[data.current.wind_dir];
    for (let i = 1; i < 3; i++) {
      Mdate = short[i].date;
      document.getElementsByClassName(`day${i}`)[0].innerHTML =
        days[new Date(Mdate).getDay()];
      document.getElementsByClassName(`date${i}`)[0].innerHTML =
        new Date(Mdate).getDate() +
        " " +
        monthNames[new Date(Mdate).getMonth()];
      document.getElementsByClassName(`city${i}`)[0].innerHTML =
        data.location.name;
      document.querySelector(`.numb${i}`).innerHTML = short[i].day.maxtemp_c;
      document.querySelector(`.numb${i}-1`).innerHTML = short[i].day.mintemp_c;
      document.getElementById(`statusImg${i}`).src =
        "https:" + short[i].day.condition.icon;
      document.querySelector(`.status${i}`).innerHTML =
        short[i].day.condition.text;
      document.querySelector(`.humidity${i}`).innerHTML =
        short[i].day.avghumidity;
      document.querySelector(`.wind${i}`).innerHTML = short[i].day.maxwind_kph;
    }
  });
}

document.getElementById("search").addEventListener("input", function (e) {
  if (e.target.value.length >= 3) {
    search(e.target.value);
  }
});
document.getElementById("submit").addEventListener("click", function () {
  search(document.getElementById("search").value)
  console.log("hi")
});

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var WindDirectionDescription = {
  N: "North",
  NNE: "North-Northeast",
  NE: "Northeast",
  ENE: "East-Northeast",
  E: "East",
  ESE: "East-Southeast",
  SE: "Southeast",
  SSE: "South-Southeast",
  S: "South",
  SSW: "South-Southwest",
  SW: "Southwest",
  WSW: "West-Southwest",
  W: "West",
  WNW: "West-Northwest",
  NW: "Northwest",
  NNW: "North-Northwest",
};
search("paris");

navigator.geolocation.getCurrentPosition(
  function (p) {
    var lat = p.coords.latitude;
    var lon = p.coords.longitude;

    search(`${lat},${lon}`);
  },
  function (error) {}
);

// search(`${lat},${lon}`);

// var Mdate = new Date("2025-06-20");

// Mdate.getFullYear(); // 2025
// Mdate.getMonth(); // 5 (June)
// Mdate.getDate(); // 28
// Mdate.getDay(); // 6 (Saturday, 0 = Sunday)

//   end of first day-----------------------------------
// var Mdate1 = data.forecast.forecastday[1].date;
// document.getElementsByClassName("day1")[0].innerHTML =
//   days[new Date(Mdate1).getDay()];
// document.getElementsByClassName("date1")[0].innerHTML =
//   new Date(Mdate1).getDate() +
//   " " +
//   monthNames[new Date(Mdate1).getMonth()];
// document.getElementsByClassName("city1")[0].innerHTML = data.location.name;
// document.querySelector(".numb1").innerHTML =
//   data.forecast.forecastday[1].day.maxtemp_c;
// document.querySelector(".numb1-1").innerHTML =
//   data.forecast.forecastday[1].day.mintemp_c;
// document.getElementById("statusImg1").src =
//   "https:" + data.forecast.forecastday[1].day.condition.icon;
// document.querySelector(".status1").innerHTML =
//   data.forecast.forecastday[1].day.condition.text;
// document.querySelector(".humidity1").innerHTML =
//   data.forecast.forecastday[1].day.avghumidity;
// document.querySelector(".wind1").innerHTML =
//   data.forecast.forecastday[1].day.maxwind_kph;

//   end of second day-----------------------------------

// var Mdate2 = data.forecast.forecastday[2].date;
// document.getElementsByClassName("day2")[0].innerHTML =
//   days[new Date(Mdate2).getDay()];
// document.getElementsByClassName("date2")[0].innerHTML =
//   new Date(Mdate2).getDate() +
//   " " +
//   monthNames[new Date(Mdate2).getMonth()];
// document.getElementsByClassName("city2")[0].innerHTML = data.location.name;
// document.querySelector(".numb2").innerHTML =
//   data.forecast.forecastday[2].day.maxtemp_c;
// document.querySelector(".numb2-1").innerHTML =
//   data.forecast.forecastday[2].day.mintemp_c;
// document.getElementById("statusImg2").src =
//   "https:" + data.forecast.forecastday[2].day.condition.icon;
// document.querySelector(".status2").innerHTML =
//   data.forecast.forecastday[2].day.condition.text;
// document.querySelector(".humidity2").innerHTML =
//   data.forecast.forecastday[2].day.avghumidity;
// document.querySelector(".wind2").innerHTML =
//   data.forecast.forecastday[2].day.maxwind_kph;
