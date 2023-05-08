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
    this._task = task;
    this._details = details;
    this._date = date;
    this._priority = priority;
  }
  // Define getter and setter methods for each property
  //FIXME: NOT USING REAL GETTERS AND SETTERS, AND UPDATE EDIT BUTTON ///////////////////////////
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

    //TODO: MAKE SURE that the edit button displays forms/////////////////////////////////
    editBtn.addEventListener("click", () => {
      //FIXME: GET.ID
      const taskId = todoTask.getId();
      const taskDiv = newTaskDiv.querySelector(".title-display");
      const detailsDiv = newTaskDiv.querySelector(".details-btn");
      const dateDiv = newTaskDiv.querySelector(".date-display");

      // Open a form or modal for editing the task properties
      // Retrieve the corresponding Task object from the tasks array using its id
      //FIXME: GET ID
      const taskToUpdate = tasks.find((task) => task.getId() === taskId);

      // Update the Task object properties based on the user input
      //FIXME: GET TASK
      const newTaskName = prompt("Enter new task name", taskToUpdate.getTask());
      if (newTaskName !== null) {
        //FIXME: SET TASK
        taskToUpdate.setTask(newTaskName);
        taskDiv.textContent = newTaskName;
      }

      const newTaskDetails = prompt(
        "Enter new task details",
        //FIXME: GET DETAILS
        taskToUpdate.getDetails()
      );
      if (newTaskDetails !== null) {
        //FIXME: SET DETAILS
        taskToUpdate.setDetails(newTaskDetails);
        detailsDiv.textContent = "Details";
      }
      //FIXME: GET DATE
      const newTaskDate = prompt("Enter new task date", taskToUpdate.getDate());
      if (newTaskDate !== null) {
        //FIXME: SET DATE
        taskToUpdate.setDate(newTaskDate);
        dateDiv.textContent = newTaskDate;
      }

      const newPriority = prompt(
        "Enter new task priority (Low/Medium/High)",
        //FIXME: GET PRIORITY
        taskToUpdate.getPriority()
      );
      if (newPriority !== null) {
        //FIXME: SET PRIORITY
        taskToUpdate.setPriority(newPriority);
        newTaskDiv.classList.remove(
          "low-priority",
          "medium-priority",
          "high-priority"
        );
        if (newPriority === "Low") {
          newTaskDiv.classList.add("low-priority");
        } else if (newPriority === "Medium") {
          newTaskDiv.classList.add("medium-priority");
        } else if (newPriority === "High") {
          newTaskDiv.classList.add("high-priority");
        }
      }
    });
    //TODO:^^^^^^^^^^^^^^^^////////////////////////////////////////////////////////////////////////////////
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
