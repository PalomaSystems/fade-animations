export function fadeIn(el, timeout) {
  if (timeout === undefined) {
    timeout = 500
  }
  el.classList.remove("fadeOut");
  setTimeout(function () {
    el.classList.remove("d-none");
    el.classList.add("showElement");
    setTimeout(function () {
      el.classList.add("fadeIn");
    }, timeout);
  }, timeout);
};
export function fadeOut(el, timeout) {
  if (timeout === undefined) {
    timeout = 500;
  }
  el.classList.remove("fadeIn");
  el.classList.add("fadeOut");
  setTimeout(function () {
    el.classList.add("d-none");
    el.classList.remove("showElement");
  }, timeout);
};
window.fadeIn = function (el, timeout) {
  if (timeout === undefined) {
    timeout = 500;
  }
  el.classList.remove("fadeOut");
  setTimeout(function () {
    el.classList.remove("d-none");
    el.classList.add("showElement");
    setTimeout(function () {
      el.classList.add("fadeIn");
    }, timeout);
  }, timeout);
};
window.fadeOut = function (el, timeout) {
  if (timeout === undefined) {
    timeout = 500;
  }
  el.classList.remove("fadeIn");
  el.classList.add("fadeOut");
  setTimeout(function () {
    el.classList.add("d-none");
    el.classList.remove("showElement");
  }, timeout);
};
