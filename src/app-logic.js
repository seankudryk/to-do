const todoList = []; //this array will store all of the to-do objects, everything to do with application data will be stored here, and then referenced to create the DOM
const projectList = ["All Projects"]; //this array will store all array project names, these will be referenced to display different selectable projects in the sidebar
let activeProject = "All Projects";

export const getTodoList = () => todoList; //getter function 
export const getProjectList = () => projectList;

export const getActiveProject = () => activeProject;

export const setActiveProject = (newValue) => {
    console.log(activeProject);
    activeProject = newValue; 
    // console.log(activeProject);
}

export const addTodoList = (newTodoList) => todoList.push(newTodoList);
export const addProject = (newProject) => projectList.push(newProject);

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
};

export const deleteEntry = () => {
    return "This will eventually do something";
}



//each Todo - when created, will be given a list of values from a dropdown to select which project that entry should belong to
//the list of available values will reference an array of projects - these projects will be generated by clicking the "Create New Project" button in the sidebar
    //by default, all pages will be part of "All Projects", new projects can later be added, and entries can have their project value changed to be sorted with other entries in that same project
//clicking on any of the projects in the left column will filter out all entries that do NOT have that project value and call displayEntry to update the DOM with the relevant items
