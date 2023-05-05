import { formContainer } from "./form-display.js";

export const lowBtn = formContainer.querySelector("#low");
export const mediumBtn = formContainer.querySelector("#medium");
export const highBtn = formContainer.querySelector("#high");
export const addToTasks = formContainer.querySelector("#add-to-tasks");
export const priority = "";

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
    this.task = task;
    this.details = details;
    this.date = date;
    this.priority = priority;
  }
}

//send new task to the server
export function addTask() {
  //TODO: make sure to close form after submit
  //TODO: make sure this creates a DISPLAY container for the new task. only the key details needed
  //TODO: then within the DISPLAY container created here, create a NESTED DETAILS div that lists the details for all of this.
  // if anything, this function is the details div creations
  // so this could be what is nested inside
  const task = formContainer.querySelector("#task-name").value;
  const details = formContainer.querySelector("#details").value;
  const date = formContainer.querySelector("#date").value;
  const todoTask = new Task(task, details, date, priority);
  const div = document.createElement("div");

  // Create a new div element for each task property
  const taskDiv = document.createElement("div");
  taskDiv.textContent = `Task: ${todoTask.task}`;

  const detailsDiv = document.createElement("div");
  detailsDiv.textContent = `Details: ${todoTask.details}`;

  const dateDiv = document.createElement("div");
  dateDiv.textContent = `Date: ${todoTask.date}`;

  const priorityDiv = document.createElement("div");
  priorityDiv.textContent = `Priority: ${todoTask.priority}`;

  // Add each div element to the page
  const addedTasks = document.querySelector(".added-tasks");
  addedTasks.appendChild(taskDiv);
  addedTasks.appendChild(detailsDiv);
  addedTasks.appendChild(dateDiv);
  addedTasks.appendChild(priorityDiv);
}

addToTasks.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask();
});
