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

