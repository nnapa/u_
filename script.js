// ==UserScript==
// @name         Autofill u_
// @version      1.0
// @description  Automatically fill in the input box with custom prefix
// @match        www.www.www
// ==/UserScript==

(function () {
  "use strict";

  // Set prefix text
  const PREFIX = "u_";

  function ensurePrefix() {
    var inputBox = document.querySelector("#__next > section > section > main > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span > span > input");
    if (inputBox && !inputBox.value.startsWith(PREFIX)) {
      inputBox.value = PREFIX + inputBox.value;
    }
  }

  ensurePrefix();
  setInterval(ensurePrefix, 500);

  document.addEventListener(
    "focus",
    function (e) {
      if (e.target === document.querySelector("#__next > section > section > main > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span > span > input")) {
        ensurePrefix();
      }
    },
    true
  );
})();
