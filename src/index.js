import "./styles.css"
import { createNewEntry, getTodoList, addProject, getProjectList, getActiveProject, setActiveProject } from "./app-logic.js";
import { displayNewProject, displayProjects, displayEntry, displaySelectOptions } from "./display.js";
import { all } from "neo-async";

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
    displaySelectOptions(projectList[projectList.length - 1]);
    //create a delete button within the entry with an event listener to remove the entry if clicked
    //there will need to be a function which updates the selectable project values in HTML select element each time a new project is created

});

projectDisplayDiv.addEventListener("click", (e) => {
    let target = e.target;

    //remove .active-project from all projects when the event listener is called, this will be reapplied to the clicked project after it has been cleared from all others
    const allProjects = document.querySelectorAll(".project-span");
    allProjects.forEach((project) => project.classList.remove("active-project"));

    const activeProject = getActiveProject();

    if (target.textContent === activeProject) {
        console.log("You just clicked the same element as is active");
    } else {
        //apply .active-project class to the target
        target.classList.add("active-project");
        setActiveProject(target.textContent);
        console.log("You clicked a different element than was active");
    } 

    //call display function to reset the projects listed based on the current value of activeProject
});