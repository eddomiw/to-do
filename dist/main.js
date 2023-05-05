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

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"bodyContainer\": () => (/* binding */ bodyContainer),\n/* harmony export */   \"closeForm\": () => (/* binding */ closeForm),\n/* harmony export */   \"closeFormHandler\": () => (/* binding */ closeFormHandler),\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"formContainer\": () => (/* binding */ formContainer),\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst addTask = document.querySelector(\".addTask\");\nconst formContainer = document.querySelector(\".form-container\");\nconst closeForm = document.querySelector(\".close-form\");\n\nconst header = document.querySelector(\".header\");\nconst bodyContainer = document.querySelector(\".body-container\");\nconst footer = document.querySelector(\".footer\");\n\nfunction closeFormHandler() {\n  formContainer.style.display = \"none\";\n  header.classList.remove(\"blur\");\n  bodyContainer.classList.remove(\"blur\");\n  footer.classList.remove(\"blur\");\n  bodyContainer.style.pointerEvents(\"auto\");\n  bodyContainer.style.zIndex = 1;\n  bodyContainer.style.display = \"block\";\n  formContainer.style.pointerEvents = \"none\";\n}\n\n\n//# sourceURL=webpack://to-do/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ \"./src/form.js\");\n\n\n//When the user clicks the \"Add Task\" button, the form is displayed.\n_form_js__WEBPACK_IMPORTED_MODULE_0__.addTask.addEventListener(\"click\", () => {\n  if (_form_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.style.display == \"none\") {\n    _form_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.style.display = \"grid\";\n    _form_js__WEBPACK_IMPORTED_MODULE_0__.header.classList.add(\"blur\");\n    _form_js__WEBPACK_IMPORTED_MODULE_0__.bodyContainer.classList.add(\"blur\");\n    _form_js__WEBPACK_IMPORTED_MODULE_0__.bodyContainer.style.pointerEvents = \"none\";\n    _form_js__WEBPACK_IMPORTED_MODULE_0__.footer.classList.add(\"blur\");\n    _form_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.style.pointerEvents = \"auto\"; // added this line to fix issue with clicking inputs\n    _form_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.style.zIndex = \"1\";\n  } else {\n    (0,_form_js__WEBPACK_IMPORTED_MODULE_0__.closeFormHandler)();\n  }\n});\n\n// //When the user clicks the \"Close\" button, the form is hidden.\n_form_js__WEBPACK_IMPORTED_MODULE_0__.closeForm.addEventListener(\"click\", _form_js__WEBPACK_IMPORTED_MODULE_0__.closeFormHandler);\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

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