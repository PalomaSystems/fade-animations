export function fadeIn(el) {
  el.classList.remove("fadeOut");
  setTimeout(function () {
    el.classList.remove("d-none");
    el.classList.add("showElement");
    setTimeout(function () {
      el.classList.add("fadeIn");
    }, 500);
  }, 500);
};
export function fadeOut (el) {
  el.classList.remove("fadeIn");
  el.classList.add("fadeOut");
  setTimeout(function () {
    el.classList.add("d-none");
    el.classList.remove("showElement");
  }, 500);
};
window.fadeIn = function (el) {
  el.classList.remove("fadeOut");
  setTimeout(function () {
    el.classList.remove("d-none");
    el.classList.add("showElement");
    setTimeout(function () {
      el.classList.add("fadeIn");
    }, 500);
  }, 500);
};
window.fadeOut = function (el) {
  el.classList.remove("fadeIn");
  el.classList.add("fadeOut");
  setTimeout(function () {
    el.classList.add("d-none");
    el.classList.remove("showElement");
  }, 500);
};
