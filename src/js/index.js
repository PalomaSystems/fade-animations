export function fadeIn(el, timeout) {
  if (timeout === undefined) {
    timeout = 500
  }

  addClass(timeout);
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

  addClass(timeout);
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

  addClass(timeout);
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

  addClass(timeout);
  el.classList.remove("fadeIn");
  el.classList.add("fadeOut");
  setTimeout(function () {
    el.classList.add("d-none");
    el.classList.remove("showElement");
  }, timeout);
};
const addClass = (timeout) => {
  var style = document.createElement("style");
  style.innerHTML = `.fadeIn { opacity: 1 !important; transition: opacity ${timeout}ms; } .fadeOut { opacity: 0; transition: opacity 500ms; }`;
  document.getElementsByTagName("head")[0].appendChild(style);
}