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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskBtn\": () => (/* binding */ addTaskBtn),\n/* harmony export */   \"bodyContainer\": () => (/* binding */ bodyContainer),\n/* harmony export */   \"closeForm\": () => (/* binding */ closeForm),\n/* harmony export */   \"closeFormHandler\": () => (/* binding */ closeFormHandler),\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"formContainer\": () => (/* binding */ formContainer),\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst addTaskBtn = document.querySelector(\".addTaskBtn\");\nconst formContainer = document.querySelector(\".form-container\");\nconst closeForm = document.querySelector(\".close-form\");\n\nconst header = document.querySelector(\".header\");\nconst bodyContainer = document.querySelector(\".body-container\");\nconst footer = document.querySelector(\".footer\");\n\nfunction closeFormHandler() {\n  formContainer.style.display = \"none\";\n  header.classList.remove(\"blur\");\n  bodyContainer.classList.remove(\"blur\");\n  footer.classList.remove(\"blur\");\n  formContainer.style.pointerEvents = \"none\";\n  formContainer.reset();\n}\n\n//When the user clicks the \"Add Task\" button, the form is displayed.\naddTaskBtn.addEventListener(\"click\", () => {\n  if (formContainer.style.display == \"none\") {\n    formContainer.style.display = \"grid\";\n    header.classList.add(\"blur\");\n    bodyContainer.classList.add(\"blur\");\n    footer.classList.add(\"blur\");\n    formContainer.style.pointerEvents = \"auto\";\n    formContainer.style.zIndex = \"1\";\n  } else {\n    closeFormHandler();\n  }\n});\n\n// //When the user clicks the \"Close\" button, the form is hidden.\ncloseForm.addEventListener(\"click\", closeFormHandler);\n\n\n//# sourceURL=webpack://to-do/./src/form-display.js?");

/***/ }),

/***/ "./src/form-info.js":
/*!**************************!*\
  !*** ./src/form-info.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"addToTasksBtn\": () => (/* binding */ addToTasksBtn),\n/* harmony export */   \"addedTasks\": () => (/* binding */ addedTasks),\n/* harmony export */   \"detailsDisplayContainer\": () => (/* binding */ detailsDisplayContainer),\n/* harmony export */   \"highBtn\": () => (/* binding */ highBtn),\n/* harmony export */   \"inbox\": () => (/* binding */ inbox),\n/* harmony export */   \"lowBtn\": () => (/* binding */ lowBtn),\n/* harmony export */   \"mediumBtn\": () => (/* binding */ mediumBtn),\n/* harmony export */   \"priority\": () => (/* binding */ priority),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _form_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-display.js */ \"./src/form-display.js\");\n\n\nlet inbox = document.querySelector(\".inbox-count\");\nconst lowBtn = _form_display_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.querySelector(\"#low\");\nconst mediumBtn = _form_display_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.querySelector(\"#medium\");\nconst highBtn = _form_display_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.querySelector(\"#high\");\nconst addToTasksBtn = _form_display_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.querySelector(\"#add-to-tasks\");\nconst addedTasks = document.querySelector(\".added-tasks\");\nconst detailsDisplayContainer = document.querySelector(\n  \".details-display-container\"\n);\nlet priority = null;\n\n//Update the priority of a task based on the user's button selection\nlowBtn.addEventListener(\"click\", () => {\n  priority = \"Low\";\n});\n\nmediumBtn.addEventListener(\"click\", () => {\n  priority = \"Medium\";\n});\n\nhighBtn.addEventListener(\"click\", () => {\n  priority = \"High\";\n});\n\n//store the new task in class variable\nclass Task {\n  constructor(task, details, date, priority) {\n    this._id = Math.random().toString(36).substr(2, 9);\n    this._task = task;\n    this._details = details;\n    this._date = date;\n    this._priority = priority;\n  }\n  // Define getter and setter methods for each property\n  get task() {\n    return this._task;\n  }\n\n  set task(newTask) {\n    this._task = newTask;\n  }\n\n  get details() {\n    return this._details;\n  }\n\n  set details(newDetails) {\n    this._details = newDetails;\n  }\n\n  get date() {\n    return this._date;\n  }\n\n  set date(newDate) {\n    this._date = newDate;\n  }\n\n  get priority() {\n    return this._priority;\n  }\n\n  set priority(newPriority) {\n    this._priority = newPriority;\n  }\n\n  get id() {\n    return this._id;\n  }\n}\nconst tasks = []; // Array to store all created tasks\n\naddToTasksBtn.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  addTask();\n});\n\n//send new task to the server\nfunction addTask() {\n  const task = _form_display_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.querySelector(\"#task-name\").value;\n  if (task == \"\" || task.length < 3) {\n    alert(\"Please enter a valid task\");\n    return;\n  }\n\n  const details = _form_display_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.querySelector(\"#details\").value;\n  if (details == \"\" || details.length < 3) {\n    alert(\"Please enter a valid details\");\n    return;\n  }\n  const date = _form_display_js__WEBPACK_IMPORTED_MODULE_0__.formContainer.querySelector(\"#date\").value;\n\n  if (priority !== null) {\n    const todoTask = new Task(task, details, date, priority);\n    tasks.push(todoTask); // Add the new task to the tasks array\n    let inboxCount = tasks.length;\n    inbox.textContent = inboxCount;\n\n    //Create a new display container element for each new task\n\n    const newTaskDiv = document.createElement(\"div\");\n    newTaskDiv.classList.add(\"new-task\");\n    if (todoTask.priority === \"Low\") {\n      newTaskDiv.classList.add(\"low-priority\");\n    } else if (todoTask.priority === \"Medium\") {\n      newTaskDiv.classList.add(\"medium-priority\");\n    } else if (todoTask.priority === \"High\") {\n      newTaskDiv.classList.add(\"high-priority\");\n    }\n\n    const checkBoxBtn = document.createElement(\"button\");\n    checkBoxBtn.classList.add(\"checkbox-btn\");\n    checkBoxBtn.addEventListener(\"click\", function () {\n      checkBoxBtn.classList.toggle(\"checkmark\");\n    });\n\n    const titleDisplay = document.createElement(\"div\");\n    titleDisplay.textContent = todoTask.task;\n    titleDisplay.classList.add(\"title-display\");\n    const detailsBtn = document.createElement(\"button\");\n    detailsBtn.textContent = \"Details\";\n    detailsBtn.classList.add(\"details-btn\");\n\n    //DISPLAY DETAILS OF NEW TASK\n    detailsBtn.addEventListener(\"click\", () => {\n      if (newTaskDivDetails.style.display == \"none\") {\n        newTaskDivDetails.classList.add(\"new-task-details\");\n        newTaskDivDetails.style.display = \"flex\";\n        _form_display_js__WEBPACK_IMPORTED_MODULE_0__.header.classList.add(\"blur\");\n        _form_display_js__WEBPACK_IMPORTED_MODULE_0__.bodyContainer.classList.add(\"blur\");\n        _form_display_js__WEBPACK_IMPORTED_MODULE_0__.footer.classList.add(\"blur\");\n        newTaskDivDetails.style.pointerEvents = \"auto\";\n        newTaskDivDetails.style.zIndex = \"1\";\n      } else {\n        closeDetails();\n      }\n    });\n    const dateDisplay = document.createElement(\"div\");\n    dateDisplay.textContent = todoTask.date;\n    dateDisplay.classList.add(\"date-display\");\n    const dateFormatRegex = /^\\d{4}-\\d{2}-\\d{2}$/;\n\n    //EDIT TASK DETAILS\n    const editBtn = document.createElement(\"button\");\n    editBtn.textContent = \"Edit\";\n    editBtn.classList.add(\"edit-btn\");\n    editBtn.addEventListener(\"click\", () => {\n      const taskId = todoTask.id;\n\n      // Open a form for editing the task properties\n      // Retrieve the corresponding Task object from the tasks array using its id\n      const taskToUpdate = tasks.find((task) => task.id === taskId);\n\n      // Update the Task object properties based on the user input\n      let newTaskName = \"\";\n      while (newTaskName === \"\") {\n        newTaskName = prompt(\"Enter new task name\", taskToUpdate.task);\n        if (newTaskName === null) {\n          return;\n        } else if (newTaskName === \"\") {\n          alert(\"Task name cannot be empty\");\n        }\n      }\n      taskToUpdate.task = newTaskName;\n      titleDisplay.textContent = newTaskName;\n      taskDiv.textContent = `Task: ${newTaskName}`;\n\n      let newTaskDetails = \"\";\n      while (newTaskDetails === \"\") {\n        newTaskDetails = prompt(\"Enter new task details\", taskToUpdate.details);\n        if (newTaskDetails === null) {\n          return;\n        } else if (newTaskDetails === \"\") {\n          alert(\"Task details cannot be empty\");\n        }\n      }\n      taskToUpdate.details = newTaskDetails;\n      detailsBtn.textContent = \"Details\";\n      detailsDiv.textContent = `Details: ${newTaskDetails}`;\n\n      let newTaskDate = \"\";\n      while (newTaskDate === \"\" || !dateFormatRegex.test(newTaskDate)) {\n        newTaskDate = prompt(\n          \"Enter new task date (yyyy-mm-dd)\",\n          taskToUpdate.date\n        );\n        if (newTaskDate === null) {\n          return;\n        } else if (!dateFormatRegex.test(newTaskDate)) {\n          alert(\"Date must be in the format yyyy-mm-dd\");\n        }\n      }\n\n      taskToUpdate.date = newTaskDate;\n      dateDisplay.textContent = newTaskDate;\n      dateDivDetails.textContent = `Date: ${newTaskDate}`;\n\n      const newPriority = prompt(\n        \"Enter new task priority (Low/Medium/High)\",\n        taskToUpdate.priority\n      );\n      if (newPriority === null) {\n        return;\n      }\n      taskToUpdate.priority = newPriority;\n      newTaskDiv.classList.remove(\n        \"low-priority\",\n        \"medium-priority\",\n        \"high-priority\"\n      );\n      if (newPriority === \"Low\") {\n        newTaskDiv.classList.add(\"low-priority\");\n        priorityDiv.textContent = \"Priority: Low\";\n      } else if (newPriority === \"Medium\") {\n        newTaskDiv.classList.add(\"medium-priority\");\n        priorityDiv.textContent = \"Priority: Medium\";\n      } else if (newPriority === \"High\") {\n        newTaskDiv.classList.add(\"high-priority\");\n        priorityDiv.textContent = \"Priority: High\";\n      }\n    });\n\n    //DELETE TASK CONTAINER\n    const deleteBtn = document.createElement(\"button\");\n    deleteBtn.textContent = \"Delete\";\n    deleteBtn.classList.add(\"delete-btn\");\n    deleteBtn.addEventListener(\"click\", () => {\n      tasks.splice(tasks.indexOf(todoTask), 1);\n      addedTasks.removeChild(newTaskDiv);\n      detailsDisplayContainer.removeChild(newTaskDivDetails);\n      let inboxCount = tasks.length;\n      inbox.textContent = inboxCount;\n    });\n\n    // Creates DETAILS DISPLAY\n    //Create a details div element for each new task\n    const newTaskDivDetails = document.createElement(\"div\");\n    newTaskDivDetails.setAttribute(\"style\", \"display: none;\");\n    //header for details display\n    const headerDetails = document.createElement(\"div\");\n    headerDetails.classList.add(\"header-details\");\n    //Add close button for each details display\n    //Close the details display\n    function closeDetails() {\n      newTaskDivDetails.style.display = \"none\";\n      _form_display_js__WEBPACK_IMPORTED_MODULE_0__.header.classList.remove(\"blur\");\n      _form_display_js__WEBPACK_IMPORTED_MODULE_0__.bodyContainer.classList.remove(\"blur\");\n      _form_display_js__WEBPACK_IMPORTED_MODULE_0__.footer.classList.remove(\"blur\");\n      newTaskDivDetails.style.pointerEvents = \"none\";\n    }\n\n    const closeDetailsBtn = document.createElement(\"button\");\n    closeDetailsBtn.textContent = \"X\";\n    closeDetailsBtn.setAttribute(\"style\", \"text-align:end;\");\n    closeDetailsBtn.addEventListener(\"click\", closeDetails);\n    // Create a new div element for each task property\n    const taskDiv = document.createElement(\"div\");\n    taskDiv.textContent = `Task: ${todoTask.task}`;\n\n    const detailsDiv = document.createElement(\"div\");\n    detailsDiv.textContent = `Details: ${todoTask.details}`;\n\n    const dateDivDetails = document.createElement(\"div\");\n    dateDivDetails.textContent = `Date: ${todoTask.date}`;\n\n    const priorityDiv = document.createElement(\"div\");\n    priorityDiv.textContent = `Priority: ${todoTask.priority}`;\n\n    // Add each div element to the details section of newTaskDiv\n    headerDetails.appendChild(closeDetailsBtn);\n    newTaskDivDetails.append(\n      headerDetails,\n      taskDiv,\n      detailsDiv,\n      dateDivDetails,\n      priorityDiv\n    );\n\n    //append child to div meant for displaying task details\n    detailsDisplayContainer.appendChild(newTaskDivDetails);\n    //Add newTaskDiv to addedTasks\n    newTaskDiv.append(\n      checkBoxBtn,\n      titleDisplay,\n      detailsBtn,\n      dateDisplay,\n      editBtn,\n      deleteBtn\n    );\n\n    addedTasks.appendChild(newTaskDiv);\n  }\n}\n\n\n//# sourceURL=webpack://to-do/./src/form-info.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-display.js */ \"./src/form-display.js\");\n/* harmony import */ var _form_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-info.js */ \"./src/form-info.js\");\n\n\n\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

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