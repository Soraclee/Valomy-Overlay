let overlay = document.querySelectorAll("#overlay");

let ms = settingsvar.overlayOut.time * 60 * 1000;

setInterval(function () {
  if (overlay[0].classList.contains("slide-in")) {
    overlay[0].classList.remove("slide-in");
    overlay[0].classList.add("slide-out");
  } else {
    overlay[0].classList.remove("slide-out");
    overlay[0].classList.add("slide-in");
  }
}, ms);
