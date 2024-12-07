import "./styles.css"
import { createNewEntry, getTodoList, displayEntry, displayNewProject } from "./test.js";

const titleInput = document.querySelector("#title-input");
const descriptionInput = document.querySelector("#description-input");
const dueDateInput = document.querySelector("#due-date-input");
const priorityInput = document.querySelector("#priority-input");
const notesInput = document.querySelector("#notes-input");
const checklistInput = document.querySelector("#checklist-input");
const projectInput = document.querySelector("#project-input");
const sideBar = document.querySelector("#sidebar");

const submitButton = document.querySelector("#submit-button");
const createProjectButton = document.querySelector("#create-project-button");
const projectNameSubmitButton = document.querySelector("");

const resetInputs = () => {
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "";
    notesInput.value = "";
    checklistInput.value = "";
}

submitButton.addEventListener("click", () => {
    createNewEntry(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, notesInput.value, checklistInput.value, projectInput.value);
    displayEntry();
    resetInputs();
});

createProjectButton.addEventListener ("click", () => {
    const modal = document.querySelector(".modal");
    // const projectNameSubmitButton = document.querySelector("#project-name-submit-button");
    
    modal.style.display = "flex";
    // projectNameSubmitButton.addEventListener("click", () => {
    //     modal.style.display = "none";
    // });
});

