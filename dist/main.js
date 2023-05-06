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

/***/ "./src/form-display.js":
/*!*****************************!*\
  !*** ./src/form-display.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskBtn\": () => (/* binding */ addTaskBtn),\n/* harmony export */   \"bodyContainer\": () => (/* binding */ bodyContainer),\n/* harmony export */   \"closeForm\": () => (/* binding */ closeForm),\n/* harmony export */   \"closeFormHandler\": () => (/* binding */ closeFormHandler),\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"formContainer\": () => (/* binding */ formContainer),\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst addTaskBtn = document.querySelector(\".addTaskBtn\");\nconst formContainer = document.querySelector(\".form-container\");\nconst closeForm = document.querySelector(\".close-form\");\n\nconst header = document.querySelector(\".header\");\nconst bodyContainer = document.querySelector(\".body-container\");\nconst footer = document.querySelector(\".footer\");\n\nfunction closeFormHandler() {\n  formContainer.style.display = \"none\";\n  header.classList.remove(\"blur\");\n  bodyContainer.classList.remove(\"blur\");\n  footer.classList.remove(\"blur\");\n  formContainer.style.pointerEvents = \"none\";\n}\n\n//When the user clicks the \"Add Task\" button, the form is displayed.\naddTaskBtn.addEventListener(\"click\", () => {\n  if (formContainer.style.display == \"none\") {\n    formContainer.style.display = \"grid\";\n    header.classList.add(\"blur\");\n    bodyContainer.classList.add(\"blur\");\n    footer.classList.add(\"blur\");\n    formContainer.style.pointerEvents = \"auto\";\n    formContainer.style.zIndex = \"1\";\n  } else {\n    closeFormHandler();\n  }\n});\n\n// //When the user clicks the \"Close\" button, the form is hidden.\ncloseForm.addEventListener(\"click\", closeFormHandler);\n\n\n//# sourceURL=webpack://to-do/./src/form-display.js?");

/***/ }),

/***/ "./src/form-info.js":
/*!**************************!*\
  !*** ./src/form-info.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"addToTasksBtn\": () => (/* binding */ addToTasksBtn),\n/* harmony export */   \"addedTasks\": () => (/* binding */ addedTasks),\n/* harmony export */   \"highBtn\": () => (/* binding */ highBtn),\n/* harmony export */   \"lowBtn\": () => (/* binding */ lowBtn),\n/* harmony export */   \"mediumBtn\": () => (/* binding */ mediumBtn),\n/* harmony export */   \"priority\": () => (/* binding */ priority)\n/* harmony export */ });\n/* harmony import */ var _form_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-display.js */ \"./src/form-display.js\");\n\n\nconst lowBtn = _form_display_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.querySelector(\"#low\");\nconst mediumBtn = _form_display_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.querySelector(\"#medium\");\nconst highBtn = _form_display_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.querySelector(\"#high\");\nconst addToTasksBtn = _form_display_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.querySelector(\"#add-to-tasks\");\nconst addedTasks = document.querySelector(\".added-tasks\");\n\nconst priority = \"\";\n\n//Update the priority of a task based on the user's button selection\nlowBtn.addEventListener(\"click\", () => {\n  priority = \"Low\";\n});\n\nmediumBtn.addEventListener(\"click\", () => {\n  priority = \"Medium\";\n});\n\nhighBtn.addEventListener(\"click\", () => {\n  priority = \"High\";\n});\n//store the new task in class variable\n\nclass Task {\n  constructor(task, details, date, priority) {\n    this.task = task;\n    this.details = details;\n    this.date = date;\n    this.priority = priority;\n  }\n}\n\n//send new task to the server\nfunction addTask() {\n  const task = _form_display_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.querySelector(\"#task-name\").value;\n  const details = _form_display_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.querySelector(\"#details\").value;\n  const date = _form_display_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.querySelector(\"#date\").value;\n  const todoTask = new Task(task, details, date, priority);\n\n  //Create a new display container element for each new task\n\n  const newTaskDiv = document.createElement(\"div\");\n  newTaskDiv.classList.add(\"new-task\");\n\n  const checkBoxBtn = document.createElement(\"button\");\n  checkBoxBtn.classList.add(\"checkbox-btn\");\n  const titleDisplay = document.createElement(\"div\");\n  titleDisplay.textContent = todoTask.task;\n  const DetailsBtn = document.createElement(\"button\");\n  DetailsBtn.textContent = \"Details\";\n  DetailsBtn.classList.add(\"details-btn\");\n  const dateDisplay = document.createElement(\"div\");\n  dateDisplay.textContent = todoTask.date;\n  const deleteBtn = document.createElement(\"button\");\n  deleteBtn.textContent = \"Delete\";\n  deleteBtn.classList.add(\"delete-btn\");\n\n  newTaskDiv.appendChild(checkBoxBtn);\n  newTaskDiv.appendChild(titleDisplay);\n  newTaskDiv.appendChild(DetailsBtn);\n  newTaskDiv.appendChild(dateDisplay);\n  newTaskDiv.appendChild(deleteBtn);\n\n  addedTasks.appendChild(newTaskDiv);\n\n  // //Create a details div element for each new task\n  // const newTaskDivDetails = document.createElement(\"div\");\n\n  // // Create a new div element for each task property\n  // const taskDiv = document.createElement(\"div\");\n  // taskDiv.textContent = `Task: ${todoTask.task}`;\n\n  // const detailsDiv = document.createElement(\"div\");\n  // detailsDiv.textContent = `Details: ${todoTask.details}`;\n\n  // const dateDiv = document.createElement(\"div\");\n  // dateDiv.textContent = `Date: ${todoTask.date}`;\n\n  // const priorityDiv = document.createElement(\"div\");\n  // priorityDiv.textContent = `Priority: ${todoTask.priority}`;\n\n  // // Add each div element to the details section of newTaskDiv\n  // newTaskDivDetails.appendChild(taskDiv);\n  // newTaskDivDetails.appendChild(detailsDiv);\n  // newTaskDivDetails.appendChild(dateDiv);\n  // newTaskDivDetails.appendChild(priorityDiv);\n\n  // //Add newTaskDiv to addedTasks\n  // addedTasks.appendChild(newTaskDivDetails);\n}\n\n// addToTasksBtn.addEventListener(\"click\", (event) => {\n//   event.preventDefault();\n//   addTask();\n// });\n\naddToTasksBtn.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  addTask();\n});\n\n\n//# sourceURL=webpack://to-do/./src/form-info.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-display.js */ \"./src/form-display.js\");\n/* harmony import */ var _form_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-info.js */ \"./src/form-info.js\");\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

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