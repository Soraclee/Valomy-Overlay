let overlay = document.querySelectorAll("#overlay");

setInterval(function () {
  if (overlay[0].classList.contains("slide-in")) {
    overlay[0].classList.remove("slide-in");
    overlay[0].classList.add("slide-out");
  } else {
    overlay[0].classList.remove("slide-out");
    overlay[0].classList.add("slide-in");
  }
  console.log(overlay[0].classList);
}, 180000);
