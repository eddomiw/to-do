const addTask = document.querySelector(".addTask");
const formContainer = document.querySelector(".form-container");

export default addTask.addEventListener("click", () => {
  if (formContainer.style.display === "none") {
    container.style.display = "block";
  } else {
    formContainer.style.display = "none";
  }
});
