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
    newDiv.classList.add("entry-div");

    //build display container for title data
    const titleOutputDiv = document.createElement("div");
    const titleOutputHeader = document.createElement("h3");
    const titleOutputData = document.createElement("p");
    titleOutputHeader.textContent = "Title:";
    titleOutputData.textContent = todoList[todoList.length - 1].title;
    titleOutputDiv.append(titleOutputHeader, titleOutputData);

    //build display container for description data
    const descriptionOutputDiv = document.createElement("div");
    const descriptionOutputHeader = document.createElement("h3");
    const descriptionOutputData = document.createElement("p");
    descriptionOutputHeader.textContent = "Description:";
    descriptionOutputData.textContent = todoList[todoList.length - 1].description;
    descriptionOutputDiv.append(descriptionOutputHeader, descriptionOutputData);

    //build display container for due date data
    const dueDateOutputDiv = document.createElement("div");
    const dueDateOutputHeader = document.createElement("h3");
    const dueDateOutputData = document.createElement("p");
    dueDateOutputHeader.textContent = "Due Date:";
    dueDateOutputData.textContent = todoList[todoList.length - 1].dueDate;
    dueDateOutputDiv.append(dueDateOutputHeader, dueDateOutputData);

    //build display container for priority data
    const priorityOutputDiv = document.createElement("div");
    const priorityOutputHeader = document.createElement("h3");
    const priorityOutputData = document.createElement("p");
    priorityOutputHeader.textContent = "Priority:";
    priorityOutputData.textContent = todoList[todoList.length - 1].priority;
    priorityOutputDiv.append(priorityOutputHeader, priorityOutputData);

    //build display container for notes data
    const notesOutputDiv = document.createElement("div");
    const notesOutputHeader = document.createElement("h3");
    const notesOutputData = document.createElement("p");
    notesOutputHeader.textContent = "Notes:";
    notesOutputData.textContent = todoList[todoList.length - 1].notes;
    notesOutputDiv.append(notesOutputHeader, notesOutputData);

    //build display container for checklist data
    const checklistOutputDiv = document.createElement("div");
    const checklistOutputHeader = document.createElement("h3");
    const checklistOutputData = document.createElement("p");
    checklistOutputHeader.textContent = "Checklist:";
    checklistOutputData.textContent = todoList[todoList.length - 1].checklist;
    checklistOutputDiv.append(checklistOutputHeader, checklistOutputData);

    newDiv.append(titleOutputDiv, descriptionOutputDiv, dueDateOutputDiv, priorityOutputDiv, notesOutputDiv, checklistOutputDiv);

    todoDisplayDiv.appendChild(newDiv);
}

//create a function which populates a div with sub divs displaying the object properties in the todoList array

