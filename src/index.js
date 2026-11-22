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
updateTime();
setInterval(updateTime, 1000);
