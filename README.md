# u\_ Autofill

Script auto prefix

## Description

1. Script ensures that the input box always starts with set prefix.
2. Script should work with dynamically loaded content, will reapply the prefix if it's removed.

## Installation

1. **Install Tampermonkey**: Chrome extension

2. **Add script**: Open the Tampermonkey dashboard and create a new script.

3. **Test**: Visit the webpage and test script.

## Script

```javascript
// ==UserScript==
// @name         Autofill u_
// @version      1.1
// @description  Automatically fill in the input box with custom prefix
// @match        www.www.www
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  // Set prefix text
  const PREFIX = "u_";
  const SELECTOR = "#__next > section > section > main > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span > span > input";
  const STORAGE_KEY = "toggleScriptEnabled";
  let scriptEnabled = localStorage.getItem(STORAGE_KEY) === null ? true : localStorage.getItem(STORAGE_KEY) === "true";

  GM_addStyle(`
  .toggle-button {
      position: fixed;
      top: 16px;
      right: 120px;
      background-color: #1890ff;
      color: #fff;
      border: none;
      height: 32px;
      padding: 4px 15px;
      font-size: 14px;
      cursor: pointer;
      z-index: 1000;
      transition: background-color 0.3s;
  }
  .toggle-button:hover {
      background-color: #40a9ff;
  }
  .toggle-button:active {
      background-color: #1a6dd9;
  }
`);

  function updateInputValue(inputBox) {
    if (scriptEnabled) {
      let valueWithoutPrefix = inputBox.value.replace(new RegExp(`^${PREFIX}|(?<!^)${PREFIX}`, "g"), "");
      inputBox.value = PREFIX + valueWithoutPrefix;
    }
  }

  function setupEventListeners(inputBox) {
    inputBox.addEventListener("input", function () {
      setTimeout(() => updateInputValue(inputBox), 0);
    });
  }

  setInterval(function () {
    const inputBox = document.querySelector(SELECTOR);
    if (inputBox) {
      updateInputValue(inputBox);
      setupEventListeners(inputBox);
    }
  }, 1000);

  createToggleButton();
})();
```
