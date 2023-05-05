import {
  addTask,
  formContainer,
  closeForm,
  header,
  bodyContainer,
  footer,
  closeFormHandler,
} from "./form-display.js";

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
