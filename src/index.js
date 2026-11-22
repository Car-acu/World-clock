function updateTime() {
  let melbourneDate = document.querySelector("#melb-date");
  let melbourneTime = document.querySelector("#melb-time");

  melbourneDate.innerHTML = moment()
    .tz("Australia/Melbourne")
    .format("dddd MMMM Do YYYY");
  melbourneTime.innerHTML = moment()
    .tz("Australia/Melbourne")
    .format("h:mm [<small>]A[</small>]");

  let radaDate = document.querySelector("#rada-date");
  let radaTime = document.querySelector("#rada-time");

  radaDate.innerHTML = moment()
    .tz("America/Argentina/Rio_Gallegos")
    .format("dddd MMMM Do YYYY");
  radaTime.innerHTML = moment()
    .tz("America/Argentina/Rio_Gallegos")
    .format("h:mm [<small>]A[</small>]");
}

function updateCity(event) {
  let chosenTimezone = event.target.value;
  let cityName;

  if (chosenTimezone === "Europe/Madrid") {
    cityName = "🇪🇸 Barcelona";
  } else if (chosenTimezone === "America/Santiago") {
    cityName = "🇨🇱 Arica";
  } else if (chosenTimezone === "America/Chicago") {
    cityName = "🇺🇸 Houston";
  } else if (chosenTimezone === "Asia/Tokyo") {
    cityName = "🇯🇵 Tokyo";
  } else if (chosenTimezone === "Africa/Johannesburg") {
    cityName = "🇿🇦 Cape Town";
  } else if (chosenTimezone === "current") {
    chosenTimezone = moment.tz.guess();
    cityName = "🗺️ My location";
  }

  if (chosenTimezone !== "") {
    let newTimezone = moment().tz(chosenTimezone);
    resultCity.innerHTML = `<div class="fixed-city">
          <div>
            <h2>${cityName}</h2>
            <div class="current-date">
            ${newTimezone.format("dddd MMMM Do YYYY")}
            </div>
          </div>
          <div class="current-time">${newTimezone.format("h:mm")} <small>${newTimezone.format("A")}</small>
        </div>
        </div>`;
  } else {
    resultCity.innerHTML = ogHTML;
    updateTime();
  }
}

let resultCity = document.querySelector("#result-city");
let ogHTML = resultCity.innerHTML;

updateTime();
setInterval(updateTime, 1000);

let chosenCity = document.querySelector("#chosen-city");
chosenCity.addEventListener("change", updateCity);
