import "./styles.css"
import { createNewEntry, getTodoList, addProject, getProjectList, getActiveProject, setActiveProject } from "./app-logic.js";
import { displayNewProject, displayProjects, displayEntry, doesThisWork } from "./display.js";

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
const projectNameInput = document.querySelector("#project-name-input");
const projectNameSubmitButton = document.querySelector("#project-name-submit-button");
const modal = document.querySelector(".modal");

const projectDisplayDiv = document.querySelector("#project-display-div");
const testButton = document.querySelector("#test-button");
 
const resetInputs = () => {
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "";
    notesInput.value = "";
    checklistInput.value = "";
}

submitButton.addEventListener("click", () => {
    const todoList = getTodoList(); //getter

    createNewEntry(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, notesInput.value, checklistInput.value, projectInput.value);
    displayEntry(todoList);
    resetInputs();

    console.log(todoList);
});

createProjectButton.addEventListener ("click", () => {
    modal.style.display = "flex";
});

projectNameSubmitButton.addEventListener("click", () => {
    const projectList = getProjectList();

    addProject(projectNameInput.value);
    modal.style.display = "none";
    projectNameInput.value = "";
    displayProjects(projectList);
    //create a delete button within the entry with an event listener to remove the entry if clicked
});

projectDisplayDiv.addEventListener("click", (e) => {
    let target = e.target;

    const activeProject = getActiveProject();

    if (target.textContent === activeProject) {
        
    }

    setActiveProject(target.textContent);
})
