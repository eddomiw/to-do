export const addTask = document.querySelector(".addTaskBtn");
export const formContainer = document.querySelector(".form-container");
export const closeForm = document.querySelector(".close-form");

export const header = document.querySelector(".header");
export const bodyContainer = document.querySelector(".body-container");
export const footer = document.querySelector(".footer");

export function closeFormHandler() {
  formContainer.style.display = "none";
  header.classList.remove("blur");
  bodyContainer.classList.remove("blur");
  footer.classList.remove("blur");
  formContainer.style.pointerEvents = "none";
}
