import { formContainer } from "./form-display.js";

export const lowBtn = formContainer.querySelector("#low");
export const mediumBtn = formContainer.querySelector("#medium");
export const highBtn = formContainer.querySelector("#high");
export const addToTasksBtn = formContainer.querySelector("#add-to-tasks");
export const addedTasks = document.querySelector(".added-tasks");

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
  const task = formContainer.querySelector("#task-name").value;
  const details = formContainer.querySelector("#details").value;
  const date = formContainer.querySelector("#date").value;
  const todoTask = new Task(task, details, date, priority);

  //Create a new display container element for each new task

  const newTaskDiv = document.createElement("div");
  newTaskDiv.classList.add("new-task");

  const checkBoxBtn = document.createElement("button");
  const titleDisplay = document.createElement("div");
  titleDisplay.textContent = todoTask.task;
  const DetailsBtn = document.createElement("button");
  const dateDisplay = document.createElement("div");
  dateDisplay.textContent = todoTask.date;
  const deleteBtn = document.createElement("button");

  newTaskDiv.appendChild(checkBoxBtn);
  newTaskDiv.appendChild(titleDisplay);
  newTaskDiv.appendChild(DetailsBtn);
  newTaskDiv.appendChild(dateDisplay);
  newTaskDiv.appendChild(deleteBtn);

  addedTasks.appendChild(newTaskDiv);

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
