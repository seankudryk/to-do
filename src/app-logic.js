let todoList = []; //this array will store all of the to-do objects, everything to do with application data will be stored here, and then referenced to create the DOM
let projectList = []; //this array will store all array project names, these will be referenced to display different selectable projects in the sidebar
let activeProject = "All Projects";

export const getTodoList = () => todoList; //getter function 
export const getProjectList = () => projectList;

export const getActiveProject = () => activeProject;

export const setActiveProject = (newValue) => {
    activeProject = newValue;
    storeData();
};

export const addTodoList = (newTodoList) => { 
    todoList.push(newTodoList); 
    storeData();
};

export const addProject = (newProject) => { 
    projectList.push(newProject);
    storeData();
};

export const createNewEntry = (title, description, dueDate, priority, notes, checklist, project) => {

    class Todo {
        constructor(title, description, dueDate, priority, notes, checklist, project) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate; 
            this.priority = priority;
            this.notes = notes;
            this.checklist = checklist;
            this.project = project;
        }
    }
    const newEntry = new Todo(title, description, dueDate, priority, notes, checklist, project);
    todoList.push(newEntry);
    storeData();
};

export const deleteTodo = (deleteTarget) => {
    todoList.splice(deleteTarget, 1);
    storeData();
};

//used entirely for localStorage purposes
const storeData = () => {
    let todoListStorage = JSON.stringify(todoList);
    let projectListStorage = JSON.stringify(projectList);

    localStorage.setItem("todoListData", todoListStorage);
    localStorage.setItem("projectListData", projectListStorage);
    localStorage.setItem ("activeProject", activeProject);
};

export const setStorageData = () => {
    const retrieveTodoListData = localStorage.getItem("todoListData");
    const retrieveProjectListData = localStorage.getItem("projectListData");

    const parseTodoListData = JSON.parse(retrieveTodoListData);
    const parseProjectListData = JSON.parse(retrieveProjectListData);
    const parseActiveProject = localStorage.getItem("activeProject");

    todoList = parseTodoListData;
    projectList = parseProjectListData;
    activeProject = parseActiveProject;
};
