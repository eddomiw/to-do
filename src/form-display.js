export const addTaskBtn = document.querySelector(".addTaskBtn");
export const formContainer = document.querySelector(".form-container");
export const closeForm = document.querySelector(".close-form");
const coolLemons = "coolLemons";

export const header = document.querySelector(".header");
export const bodyContainer = document.querySelector(".body-container");
export const footer = document.querySelector(".footer");

export function closeFormHandler() {
  formContainer.style.display = "none";
  header.classList.remove("blur");
  bodyContainer.classList.remove("blur");
  footer.classList.remove("blur");
  formContainer.style.pointerEvents = "none";
  formContainer.reset();
}

//When the user clicks the "Add Task" button, the form is displayed.
addTaskBtn.addEventListener("click", () => {
  if (formContainer.style.display == "none") {
    formContainer.style.display = "grid";
    header.classList.add("blur");
    bodyContainer.classList.add("blur");
    footer.classList.add("blur");
    formContainer.style.pointerEvents = "auto";
    formContainer.style.zIndex = "1";
  } else {
    closeFormHandler();
  }
});

// //When the user clicks the "Close" button, the form is hidden.
closeForm.addEventListener("click", closeFormHandler);
