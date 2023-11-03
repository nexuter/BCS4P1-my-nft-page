const clock = document.querySelector(".clock");

function getTime() {
  var date = new Date();
  var ampm = "AM";
  var hours = date.getHours();

  if (hours >= 12) ampm = "PM";
  if (hours > 12) hours = String(hours % 12).padStart(2, "0");

  var minutes = String(date.getMinutes()).padStart(2, "0");
  var seconds = String(date.getSeconds()).padStart(2, "0");
  var formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  clock.innerHTML = formattedTime;
}

getTime();
setInterval(getTime, 1000);
