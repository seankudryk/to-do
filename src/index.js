import "./styles.css"
import { createNewEntry, getTodoList, deleteTodo, addProject, getProjectList, getActiveProject, setActiveProject, setStorageData } from "./app-logic.js";
import { displayProjects, displayEntry, displaySelectOptions, clearEntryDisplay, clearProjectDisplay, editEntry, updateEntry} from "./display.js";
import { all, filter } from "neo-async";

//we will be using localStorage to save the todoList, and projectList arrays - on page load, displayEntry and displaySelectOptions will need to be called in order to load the previous page state
const titleInput = document.querySelector("#title-input");
const descriptionInput = document.querySelector("#description-input");
const dueDateInput = document.querySelector("#due-date-input");
const priorityInput = document.querySelector("#priority-input");
const notesInput = document.querySelector("#notes-input");
const checklistInput = document.querySelector("#checklist-input");
const projectInput = document.querySelector("#project-input");
const submitButton = document.querySelector("#submit-button");

const allProjects = document.querySelector("#all-projects");
const createProjectButton = document.querySelector("#create-project-button");
const projectNameInput = document.querySelector("#project-name-input");
const projectNameSubmitButton = document.querySelector("#project-name-submit-button");
const modal = document.querySelector(".modal");

const userProjects = document.querySelector("#user-projects");
const todoDisplayDiv = document.querySelector("#to-do-display-div");


const loadPage = () => {
    if (localStorage.getItem("todoListData")) {
        setStorageData();
        
        const projectList = getProjectList();
        displayProjects(projectList);
        displaySelectOptions(projectList);
    
        const todoList = getTodoList();
        displayEntry(todoList);
    }
}
 
const resetInputs = () => {
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "";
    notesInput.value = "";
    checklistInput.value = "";
};

submitButton.addEventListener("click", () => {
    const todoList = getTodoList(); //getter
    let activeProject = getActiveProject();
    console.log(activeProject);

    if (activeProject === "All Projects") {
        console.log(activeProject === "All Projects");
        displayEntry(todoList);
    } else {
        createNewEntry(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, notesInput.value, checklistInput.value, projectInput.value);
        const filteredProjectEntries = todoList.filter((entry) => entry.project === activeProject);
        displayEntry(filteredProjectEntries);
        resetInputs();
    }
});


createProjectButton.addEventListener ("click", () => {
    modal.style.display = "flex";
});

allProjects.addEventListener("click", () => {
    
    const userProjects = document.querySelectorAll(".project-span");
    userProjects.forEach((project) => project.classList.remove("active-project"));
    
    allProjects.classList.add("active-project");

    let todoList = getTodoList();
    displayEntry(todoList);
});

projectNameSubmitButton.addEventListener("click", () => {
    clearProjectDisplay();
    const projectList = getProjectList();

    addProject(projectNameInput.value);
    modal.style.display = "none";
    projectNameInput.value = "";

    //repopulate the userProjects div with all the stored project name data in projectList
    displayProjects(projectList);
    displaySelectOptions(projectList);
});

userProjects.addEventListener("click", (e) => {
    let target = e.target;

    const todoList = getTodoList();

    //remove .active-project from all projects when the event listener is called, this will be reapplied to the clicked project after it has been cleared from all others
    const userProjects = document.querySelectorAll(".project-span");
    userProjects.forEach((project) => project.classList.remove("active-project"));

    //remove .active-project class from the All Projects selection
    const allProjects = document.querySelector("#all-projects");
    allProjects.classList.remove("active-project");

    let activeProject = getActiveProject();

    //apply .active-project class to the target
    target.classList.add("active-project");
    setActiveProject(target.textContent);
    activeProject = target.textContent;

    clearEntryDisplay();

    console.log(`${getActiveProject()} is the current active project`);

    //best bet is likely to just create a filter array to display entry based off of 
    const filteredProjectEntries = todoList.filter((entry) => entry.project === activeProject);
    displayEntry(filteredProjectEntries);
    console.log(filteredProjectEntries);

    // console.log(todoList[0].title);

    console.log(`${getActiveProject()} is the current active project`);
    //call display function to reset the projects listed based on the current value of activeProject
});

todoDisplayDiv.addEventListener("click", (e) => {
    let target = e.target;
    let targetParent = target.parentNode;

    const [...deleteButton] = document.querySelectorAll(".delete-button");
    const [...editButton] = document.querySelectorAll(".edit-button");

    //DELETE BUTTON FUNCTIONALITY
    if (deleteButton.includes(target)) {
        clearEntryDisplay();

        deleteTodo(targetParent.id);
        const todoList = getTodoList();

        displayEntry(todoList);
        
    //EDIT BUTTON FUNCTIONALITY
    } else if (editButton.includes(target)) {
        //remove all children elements from the clicked edit-button's parent node
        while(targetParent.firstChild) {
            targetParent.removeChild(targetParent.firstChild);
        };
        
        editEntry(targetParent);
        const confirmButton = document.querySelector("#confirm-button");
        //forEach child div of .entryDiv, change each outputData div to an input element (maybe write a function which can overwrite the existing markup within entryDiv to re-render it)
        // call editEntry from ./display.js

        //placeholder for confirmButton event listener
        confirmButton.addEventListener("click", () => {
            console.log(targetParent);

            while (targetParent.firstChild) {
                targetParent.removeChild(targetParent.firstChild);
            }
        });
    }
});



//Without this function call, localStorage data will be ignored
loadPage();