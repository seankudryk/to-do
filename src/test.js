const todoList = []; //this array will store all of the to-do objects, everything to do with application data will be stored here, and then referenced to create the DOM

export const createNewEntry = (title, description, dueDate, priority, notes, checklist) => {

    class Todo {
        constructor(title, description, dueDate, priority, notes, checklist) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate; 
            this.priority = priority;
            this.notes = notes;
            this.checklist = checklist;
        }
    }
    const newEntry = new Todo(title, description, dueDate, priority, notes, checklist);
    todoList.push(newEntry);
}

export const getTodoList = () => {
    console.log(todoList);
    // return todoList.length;
}

export const displayEntry = () => {
    const todoDisplayDiv = document.querySelector("#to-do-display-div")
    
    const newDiv = document.createElement("div");
    const newSubDiv = document.createElement("div");

    newDiv.appendChild(newSubDiv);
    newDiv.classList.add("output-div");

    const titleOutput = document.createElement("p");
    const descriptionOutput = document.createElement("p");
    const dueDateOutput = document.createElement("p");
    const priorityOutput = document.createElement("p");
    const notesOutput = document.createElement("p");
    const checklistOutput = document.createElement("p");

    todoDisplayDiv.appendChild(newDiv);
}

