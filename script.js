// ==UserScript==
// @name         Autofill u_
// @version      1.1
// @description  Automatically fill in the input box with custom prefix
// @match        www.www.www
// ==/UserScript==

(function () {
  "use strict";

  // Set prefix text
  const PREFIX = "u_";

  const SELECTOR = "#__next > section > section > main > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span > span > input";
  let lastValue = "";

  function ensurePrefix() {
    const inputBox = document.querySelector(SELECTOR);
    if (inputBox && !inputBox.value.startsWith(PREFIX)) {
      inputBox.value = PREFIX + inputBox.value;
      lastValue = inputBox.value;
    }
  }

  function checkInputExistence() {
    const inputBox = document.querySelector(SELECTOR);
    if (inputBox && inputBox.value !== lastValue) {
      ensurePrefix();
    }
  }

  document.addEventListener("focusin", function (event) {
    if (event.target.matches(SELECTOR)) {
      ensurePrefix();
    }
  });

  setInterval(checkInputExistence, 500);

  ensurePrefix();
})();
