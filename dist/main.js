/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n\n\n\nfunction homePage () {\n    const content = document.getElementById('\\content')\n    const header = document.createElement('header')\n    header.classList.add('header')\n    content.append(header)\n\n    const navLinks = document.createElement('div')\n    navLinks.classList.add('navLinks')\n    header.append(navLinks)\n\n        const homeLink = document.createElement('div')\n        homeLink.classList.add('home')\n        homeLink.textContent = 'Home'\n\n        const menuLink = document.createElement('div')\n        menuLink.classList.add('menu')\n        menuLink.textContent = 'Menu'\n\n        const contactLink = document.createElement('div')\n        contactLink.classList.add('contact')\n        contactLink.textContent = 'Contact Us'\n\n        navLinks.append(homeLink, menuLink, contactLink)\n\n    const h1 = document.createElement('h1')\n    h1. textContent = 'Restaurant Name'\n    header.append(h1)\n\n    const headerInfo = document.createElement('div')\n    headerInfo.classList.add('headerInfo')\n    header.append(headerInfo)\n\n    const phone = document.createElement('p')\n    phone.classList.add('headerPhone')\n    phone.textContent = '555-123-4567'\n    const address = document.createElement('p')\n    address.classList.add('headerAddress')\n    address.textContent = \"987 65th St. Sitka, AK\"\n    headerInfo.append(phone, address)\n}\n\n\n// const newElement = (el, att, cont) => {\n//     const element = document.createElement(el)\n//     element.setAttribute('class', att)\n//     element.textContent = cont\n//     return element\n// }\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homePage)()\n\n\n\n\n// document.querySelector('.homeLink').addEventListener('click', () => {\n//     clearPage()\n//     homePage()\n// })\n\n// document.querySelector('.menuLink').addEventListener('click', () => {\n//     clearPage()\n//     menuPage()\n// })\n\n// document.querySelector('.contactLink').addEventListener('click', () => {\n//     clearPage()\n//     contactPage()\n// })\n\n\n// function clearPage(){\n//     const content = document.querySelector('#content')\n//     while (content.firstChild) {\n//         document.removeChild(content.firstChild)\n//     }\n// }\n\n\n\n\n// paragliding site with home/adventures/contact us\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;