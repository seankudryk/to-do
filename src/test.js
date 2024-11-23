export const test = (string) => {
    console.log(`${string} was the user input!`);
}
// export const sampleTask = new Todo("idk", "whatever", "i dont care", "none", "naw", "no thanks");
const todoList = [];

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

    // const newEntry = new Todo("idk", "whatever", "i dont care", "none", "naw", "no thanks");
    const newEntry = new Todo(title, description, dueDate, priority, notes, checklist);
    todoList.push(newEntry);
}

export const getTodoList = () => {
    console.log(todoList);
}

export const displayEntry = () => {
    const todoDisplayDiv = document.querySelector("#to-do-display-div")
    const titleInput = document.querySelector("#title-input").value;
    const descriptionInput = document.querySelector("#description-input");
    const dueDateInput = document.querySelector("#due-date-input");
    const priorityInput = document.querySelector("#priority-input");
    const notesInput = document.querySelector("#notes-input");
    const checklistInput = document.querySelector("#checklist-input");
    const newDiv = document.createElement("div");

    todoDisplayDiv.appendChild(newDiv);

    console.log(titleInput);
}

