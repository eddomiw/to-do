import {
  formContainer,
  header,
  bodyContainer,
  footer,
} from "./form-display.js";

export let inbox = document.querySelector(".inbox-count");
export const lowBtn = formContainer.querySelector("#low");
export const mediumBtn = formContainer.querySelector("#medium");
export const highBtn = formContainer.querySelector("#high");
export const addToTasksBtn = formContainer.querySelector("#add-to-tasks");
export const addedTasks = document.querySelector(".added-tasks");
export const detailsDisplayContainer = document.querySelector(
  ".details-display-container"
);
export let priority = null;

//Update the priority of a task based on the user's button selection
lowBtn.addEventListener("click", () => {
  priority = "Low";
});

mediumBtn.addEventListener("click", () => {
  priority = "Medium";
});

highBtn.addEventListener("click", () => {
  priority = "High";
});

//store the new task in class variable
export class Task {
  constructor(task, details, date, priority) {
    this._id = Math.random().toString(36).substr(2, 9);
    this._task = task;
    this._details = details;
    this._date = date;
    this._priority = priority;
  }
  // Define getter and setter methods for each property
  get task() {
    return this._task;
  }

  set task(newTask) {
    this._task = newTask;
  }

  get details() {
    return this._details;
  }

  set details(newDetails) {
    this._details = newDetails;
  }

  get date() {
    return this._date;
  }

  set date(newDate) {
    this._date = newDate;
  }

  get priority() {
    return this._priority;
  }

  set priority(newPriority) {
    this._priority = newPriority;
  }

  get id() {
    return this._id;
  }
}
export const tasks = []; // Array to store all created tasks

addToTasksBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addTask();
});

//send new task to the server
export function addTask() {
  const task = formContainer.querySelector("#task-name").value;
  if (task == "" || task.length < 3) {
    alert("Please enter a valid task");
    return;
  }

  const details = formContainer.querySelector("#details").value;
  if (details == "" || details.length < 3) {
    alert("Please enter a valid details");
    return;
  }
  const date = formContainer.querySelector("#date").value;

  if (priority !== null) {
    const todoTask = new Task(task, details, date, priority);
    tasks.push(todoTask); // Add the new task to the tasks array
    let inboxCount = tasks.length;
    inbox.textContent = inboxCount;

    //Create a new display container element for each new task

    const newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("new-task");
    if (todoTask.priority === "Low") {
      newTaskDiv.classList.add("low-priority");
    } else if (todoTask.priority === "Medium") {
      newTaskDiv.classList.add("medium-priority");
    } else if (todoTask.priority === "High") {
      newTaskDiv.classList.add("high-priority");
    }

    const checkBoxBtn = document.createElement("button");
    checkBoxBtn.classList.add("checkbox-btn");
    checkBoxBtn.addEventListener("click", function () {
      checkBoxBtn.classList.toggle("checkmark");
    });

    const titleDisplay = document.createElement("div");
    titleDisplay.textContent = todoTask.task;
    titleDisplay.classList.add("title-display");
    const detailsBtn = document.createElement("button");
    detailsBtn.textContent = "Details";
    detailsBtn.classList.add("details-btn");

    //DISPLAY DETAILS OF NEW TASK
    detailsBtn.addEventListener("click", () => {
      if (newTaskDivDetails.style.display == "none") {
        newTaskDivDetails.classList.add("new-task-details");
        newTaskDivDetails.style.display = "flex";
        header.classList.add("blur");
        bodyContainer.classList.add("blur");
        footer.classList.add("blur");
        newTaskDivDetails.style.pointerEvents = "auto";
        newTaskDivDetails.style.zIndex = "1";
      } else {
        closeDetails();
      }
    });
    const dateDisplay = document.createElement("div");
    dateDisplay.textContent = todoTask.date;
    dateDisplay.classList.add("date-display");
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

    //EDIT TASK DETAILS
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => {
      const taskId = todoTask.id;

      // Open a form for editing the task properties
      // Retrieve the corresponding Task object from the tasks array using its id
      const taskToUpdate = tasks.find((task) => task.id === taskId);

      // Update the Task object properties based on the user input
      let newTaskName = "";
      while (newTaskName === "") {
        newTaskName = prompt("Enter new task name", taskToUpdate.task);
        if (newTaskName === null) {
          return;
        } else if (newTaskName === "") {
          alert("Task name cannot be empty");
        }
      }
      taskToUpdate.task = newTaskName;
      titleDisplay.textContent = newTaskName;
      taskDiv.textContent = `Task: ${newTaskName}`;

      let newTaskDetails = "";
      while (newTaskDetails === "") {
        newTaskDetails = prompt("Enter new task details", taskToUpdate.details);
        if (newTaskDetails === null) {
          return;
        } else if (newTaskDetails === "") {
          alert("Task details cannot be empty");
        }
      }
      taskToUpdate.details = newTaskDetails;
      detailsBtn.textContent = "Details";
      detailsDiv.textContent = `Details: ${newTaskDetails}`;

      let newTaskDate = "";
      while (newTaskDate === "" || !dateFormatRegex.test(newTaskDate)) {
        newTaskDate = prompt(
          "Enter new task date (yyyy-mm-dd)",
          taskToUpdate.date
        );
        if (newTaskDate === null) {
          return;
        } else if (!dateFormatRegex.test(newTaskDate)) {
          alert("Date must be in the format yyyy-mm-dd");
        }
      }

      taskToUpdate.date = newTaskDate;
      dateDisplay.textContent = newTaskDate;
      dateDivDetails.textContent = `Date: ${newTaskDate}`;

      const newPriority = prompt(
        "Enter new task priority (Low/Medium/High)",
        taskToUpdate.priority
      );
      if (newPriority === null) {
        return;
      }
      taskToUpdate.priority = newPriority;
      newTaskDiv.classList.remove(
        "low-priority",
        "medium-priority",
        "high-priority"
      );
      if (newPriority === "Low") {
        newTaskDiv.classList.add("low-priority");
        priorityDiv.textContent = "Priority: Low";
      } else if (newPriority === "Medium") {
        newTaskDiv.classList.add("medium-priority");
        priorityDiv.textContent = "Priority: Medium";
      } else if (newPriority === "High") {
        newTaskDiv.classList.add("high-priority");
        priorityDiv.textContent = "Priority: High";
      }
    });

    //DELETE TASK CONTAINER
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      tasks.splice(tasks.indexOf(todoTask), 1);
      addedTasks.removeChild(newTaskDiv);
      detailsDisplayContainer.removeChild(newTaskDivDetails);
      let inboxCount = tasks.length;
      inbox.textContent = inboxCount;
    });

    // Creates DETAILS DISPLAY
    //Create a details div element for each new task
    const newTaskDivDetails = document.createElement("div");
    newTaskDivDetails.setAttribute("style", "display: none;");
    //header for details display
    const headerDetails = document.createElement("div");
    headerDetails.classList.add("header-details");
    //Add close button for each details display
    //Close the details display
    function closeDetails() {
      newTaskDivDetails.style.display = "none";
      header.classList.remove("blur");
      bodyContainer.classList.remove("blur");
      footer.classList.remove("blur");
      newTaskDivDetails.style.pointerEvents = "none";
    }

    const closeDetailsBtn = document.createElement("button");
    closeDetailsBtn.textContent = "X";
    closeDetailsBtn.setAttribute("style", "text-align:end;");
    closeDetailsBtn.addEventListener("click", closeDetails);
    // Create a new div element for each task property
    const taskDiv = document.createElement("div");
    taskDiv.textContent = `Task: ${todoTask.task}`;

    const detailsDiv = document.createElement("div");
    detailsDiv.textContent = `Details: ${todoTask.details}`;

    const dateDivDetails = document.createElement("div");
    dateDivDetails.textContent = `Date: ${todoTask.date}`;

    const priorityDiv = document.createElement("div");
    priorityDiv.textContent = `Priority: ${todoTask.priority}`;

    // Add each div element to the details section of newTaskDiv
    headerDetails.appendChild(closeDetailsBtn);
    newTaskDivDetails.append(
      headerDetails,
      taskDiv,
      detailsDiv,
      dateDivDetails,
      priorityDiv
    );

    //append child to div meant for displaying task details
    detailsDisplayContainer.appendChild(newTaskDivDetails);
    //Add newTaskDiv to addedTasks
    newTaskDiv.append(
      checkBoxBtn,
      titleDisplay,
      detailsBtn,
      dateDisplay,
      editBtn,
      deleteBtn
    );

    addedTasks.appendChild(newTaskDiv);
  }
}
