/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const addTask = document.querySelector(\".addTask\");\nconst formContainer = document.querySelector(\".form-container\");\nconst closeForm = document.querySelector(\".close-form\");\n\nconst header = document.querySelector(\".header\");\nconst bodyContainer = document.querySelector(\".body-container\");\nconst footer = document.querySelector(\".footer\");\n\nfunction closeFormHandler() {\n  formContainer.style.display = \"none\";\n  header.classList.remove(\"blur\");\n  bodyContainer.classList.remove(\"blur\");\n  footer.classList.remove(\"blur\");\n  formContainer.style.pointerEvents = \"none\";\n}\n\n//When the user clicks the \"Add Task\" button, the form is displayed.\naddTask.addEventListener(\"click\", () => {\n  if (formContainer.style.display == \"none\") {\n    formContainer.style.display = \"grid\";\n    header.classList.add(\"blur\");\n    bodyContainer.classList.add(\"blur\");\n    footer.classList.add(\"blur\");\n    formContainer.style.pointerEvents = \"auto\"; // added this line to fix issue with clicking inputs\n    formContainer.style.zIndex = \"1\";\n  } else {\n    closeFormHandler();\n  }\n});\n\n// //When the user clicks the \"Close\" button, the form is hidden.\ncloseForm.addEventListener(\"click\", closeFormHandler);\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;