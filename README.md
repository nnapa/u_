# u\_ Autofill

Script automatically "u\_" to an input box.

## Description

1. Script ensures that the input box always starts with "u\_".
2. Script should work with dynamically loaded content, will reapply the prefix if it's removed.

## Installation

1. **Install Tampermonkey**: Chrome extension

2. **Add script**: Open the Tampermonkey dashboard and create a new script.

3. **Test**: Visit the webpage and test script.

## Script

// ==UserScript==
// @name Autofill u*
// @version 1.0
// @description Automatically fill in the input box with "u*"
// @match www.www.www
// ==/UserScript==

(function () {
"use strict";

function ensurePrefix() {
var inputBox = document.querySelector("#\__next > section > section > main > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span > span > input");
if (inputBox && !inputBox.value.startsWith("u_")) {
inputBox.value = "u\_" + inputBox.value;
}
}

ensurePrefix();
setInterval(ensurePrefix, 500);

document.addEventListener(
"focus",
function (e) {
if (e.target === document.querySelector("#\_\_next > section > section > main > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span > span > input")) {
ensurePrefix();
}
},
true
);
})();
