//TODO: Transfer this functionality to a form.js

const addTask = document.querySelector(".addTask");
const formContainer = document.querySelector(".form-container");
const closeForm = document.querySelector(".close-form");

const header = document.querySelector(".header");
const bodyContainer = document.querySelector(".body-container");
const footer = document.querySelector(".footer");

function closeFormHandler() {
  formContainer.style.display = "none";
  header.classList.remove("blur");
  bodyContainer.classList.remove("blur");
  footer.classList.remove("blur");
  formContainer.style.pointerEvents = "none";
}

//When the user clicks the "Add Task" button, the form is displayed.
addTask.addEventListener("click", () => {
  if (formContainer.style.display == "none") {
    formContainer.style.display = "grid";
    header.classList.add("blur");
    bodyContainer.classList.add("blur");
    footer.classList.add("blur");
    formContainer.style.pointerEvents = "auto"; // added this line to fix issue with clicking inputs
    formContainer.style.zIndex = "1";
  } else {
    closeFormHandler();
  }
});

// //When the user clicks the "Close" button, the form is hidden.
closeForm.addEventListener("click", closeFormHandler);
