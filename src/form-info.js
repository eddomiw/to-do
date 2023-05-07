import { formContainer } from "./form-display.js";

export const lowBtn = formContainer.querySelector("#low");
export const mediumBtn = formContainer.querySelector("#medium");
export const highBtn = formContainer.querySelector("#high");
export const addToTasksBtn = formContainer.querySelector("#add-to-tasks");
export const addedTasks = document.querySelector(".added-tasks");
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
    this.id = Math.random().toString(36).substr(2, 9);
    this.task = task;
    this.details = details;
    this.date = date;
    this.priority = priority;
  }
  // Define getter and setter methods for each property

  getTask() {
    return this.task;
  }

  setTask(newTask) {
    this.task = newTask;
  }

  getDetails() {
    return this.details;
  }

  setDetails(newDetails) {
    this.details = newDetails;
  }

  getDate() {
    return this.date;
  }

  setDate(newDate) {
    this.date = newDate;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(newPriority) {
    this.priority = newPriority;
  }

  getId() {
    return this.id;
  }
}
const tasks = []; // Array to store all created tasks

//send new task to the server
export function addTask() {
  const task = formContainer.querySelector("#task-name").value;
  const details = formContainer.querySelector("#details").value;
  const date = formContainer.querySelector("#date").value;

  if (priority !== null) {
    const todoTask = new Task(task, details, date, priority);
    tasks.push(todoTask); // Add the new task to the tasks array

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
    const titleDisplay = document.createElement("div");
    titleDisplay.textContent = todoTask.task;
    titleDisplay.classList.add("title-display");
    const detailsBtn = document.createElement("button");
    detailsBtn.textContent = "Details";
    detailsBtn.classList.add("details-btn");
    const dateDisplay = document.createElement("div");
    dateDisplay.textContent = todoTask.date;
    dateDisplay.classList.add("date-display");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => {
      // Open a form or modal for editing the task properties
      // Retrieve the corresponding Task object from the tasks array using its id
      // Update the Task object properties based on the user input
      // Update the task element to display the updated properties
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    newTaskDiv.appendChild(checkBoxBtn);
    newTaskDiv.appendChild(titleDisplay);
    newTaskDiv.appendChild(detailsBtn);
    newTaskDiv.appendChild(dateDisplay);
    newTaskDiv.appendChild(editBtn);
    newTaskDiv.appendChild(deleteBtn);

    addedTasks.appendChild(newTaskDiv);
  }

  // //Create a details div element for each new task
  // const newTaskDivDetails = document.createElement("div");

  // // Create a new div element for each task property
  // const taskDiv = document.createElement("div");
  // taskDiv.textContent = `Task: ${todoTask.task}`;

  // const detailsDiv = document.createElement("div");
  // detailsDiv.textContent = `Details: ${todoTask.details}`;

  // const dateDiv = document.createElement("div");
  // dateDiv.textContent = `Date: ${todoTask.date}`;

  // const priorityDiv = document.createElement("div");
  // priorityDiv.textContent = `Priority: ${todoTask.priority}`;

  // // Add each div element to the details section of newTaskDiv
  // newTaskDivDetails.appendChild(taskDiv);
  // newTaskDivDetails.appendChild(detailsDiv);
  // newTaskDivDetails.appendChild(dateDiv);
  // newTaskDivDetails.appendChild(priorityDiv);

  // //Add newTaskDiv to addedTasks
  // addedTasks.appendChild(newTaskDivDetails);
}

// addToTasksBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   addTask();
// });

addToTasksBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addTask();
});
