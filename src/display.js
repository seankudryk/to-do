export const displayNewProject = () => {
    const projectDisplayDiv = document.querySelector("#project-display-div");

    const newSpan = document.createElement("span");
    newSpan.textContent = "I am just testing this, don't add text content this way!!!!";

    projectDisplayDiv.appendChild(newSpan);
}

export const displayProjects = (projects) => {
        for (let i = 0; i < projects.length; i++) {
        const userProjects = document.querySelector("#user-projects");

        const newSpan = document.createElement("span");
        newSpan.classList.add("project-span");

        newSpan.textContent = projects[i];

        userProjects.appendChild(newSpan);
    }
}

export const displayEntry = (entries) => {
    clearEntryDisplay(); 

    for (let i = 0; i < entries.length; i++) {
        const todoDisplayDiv = document.querySelector("#to-do-display-div");
    
        const newDiv = document.createElement("div");
        newDiv.classList.add("entry-div");
    
        //build display container for title data
        const titleOutputDiv = document.createElement("div");
        const titleOutputHeader = document.createElement("h3");
        const titleOutputData = document.createElement("p");
        titleOutputHeader.textContent = "Title:";
        titleOutputData.textContent = entries[i].title;
        titleOutputDiv.append(titleOutputHeader, titleOutputData);
    
        //build display container for description data
        const descriptionOutputDiv = document.createElement("div");
        const descriptionOutputHeader = document.createElement("h3");
        const descriptionOutputData = document.createElement("p");
        descriptionOutputHeader.textContent = "Description:";
        descriptionOutputData.textContent = entries[i].description;
        descriptionOutputDiv.append(descriptionOutputHeader, descriptionOutputData);
    
        //build display container for due date datas
        const dueDateOutputDiv = document.createElement("div");
        const dueDateOutputHeader = document.createElement("h3");
        const dueDateOutputData = document.createElement("p");
        dueDateOutputHeader.textContent = "Due Date:";
        dueDateOutputData.textContent = entries[i].dueDate;
        dueDateOutputDiv.append(dueDateOutputHeader, dueDateOutputData);
    
        //build display container for priority data
        const priorityOutputDiv = document.createElement("div");
        const priorityOutputHeader = document.createElement("h3");
        const priorityOutputData = document.createElement("p");
        priorityOutputHeader.textContent = "Priority:";
        priorityOutputData.textContent = entries[i].priority;
        priorityOutputDiv.append(priorityOutputHeader, priorityOutputData);
    
        //build display container for notes data
        const notesOutputDiv = document.createElement("div");
        const notesOutputHeader = document.createElement("h3");
        const notesOutputData = document.createElement("p");
        notesOutputHeader.textContent = "Notes:";
        notesOutputData.textContent = entries[i].notes;
        notesOutputDiv.append(notesOutputHeader, notesOutputData);
    
        //build display container for checklist data
        const checklistOutputDiv = document.createElement("div");
        const checklistOutputHeader = document.createElement("h3");
        const checklistOutputData = document.createElement("p");
        checklistOutputHeader.textContent = "Checklist:";
        checklistOutputData.textContent = entries[i].checklist;
        checklistOutputDiv.append(checklistOutputHeader, checklistOutputData);
    
        //build display container for project data
        const projectOutputDiv = document.createElement("div");
        const projectOutputHeader = document.createElement("h3");
        const projectOutputData = document.createElement("p");
    
        //we aren't there yet, but this should ALWAYS dynamically create the select options for project based on the current existingproject values
        
        //create Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("class", "delete-button");

        //create Edit Button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.setAttribute("class", "edit-button");

        projectOutputHeader.textContent = "Project:";
        projectOutputData.textContent = entries[i].project;
        projectOutputDiv.append(projectOutputHeader, projectOutputData);

        //assign an id value to each div corresponding to the todoList array index whose data it references
        newDiv.setAttribute("id", i);
    
        newDiv.append(titleOutputDiv, descriptionOutputDiv, dueDateOutputDiv, priorityOutputDiv, notesOutputDiv, checklistOutputDiv, projectOutputDiv, deleteButton, editButton);
    
        todoDisplayDiv.appendChild(newDiv);
    }
};

export const editEntry = (parentDiv) => {
    //re-create the Title div with a new input element to enter the editted data
    const titleDiv = document.createElement("div");
    const titleHeader = document.createElement("h3");
    const titleInput = document.createElement("input");
    titleHeader.textContent = "Title:";
    titleInput.type = "text";
    titleDiv.append(titleHeader, titleInput);

    // '' Description div
    const descriptionDiv = document.createElement("div");
    const descriptionHeader = document.createElement("h3");
    const descriptionInput = document.createElement("input");
    descriptionHeader.textContent = "Description:";
    descriptionInput.type = "text";
    descriptionDiv.append(descriptionHeader, descriptionInput);

    // '' Due Date div
    const dueDateDiv = document.createElement("div");
    const dueDateHeader = document.createElement("h3");
    const dueDateInput = document.createElement("input");
    dueDateHeader.textContent = "Due Date:";
    dueDateInput.type = "text";
    dueDateDiv.append(dueDateHeader, dueDateInput);
    
    // '' Priority div
    const priorityDiv = document.createElement("div");
    const priorityHeader = document.createElement("h3");
    const priorityInput = document.createElement("input");
    priorityHeader.textContent = "Priority:";
    priorityInput.type = "text";
    priorityDiv.append(priorityHeader, priorityInput);

    // '' Notes div
    const notesDiv = document.createElement("div");
    const notesHeader = document.createElement("h3");
    const notesInput = document.createElement("input");
    notesHeader.textContent = "Notes:";
    notesInput.type = "text";
    notesDiv.append(notesHeader, notesInput);

    // '' Checklist div
    const checklistDiv = document.createElement("div");
    const checklistHeader = document.createElement("h3");
    const checklistInput = document.createElement("input");
    checklistHeader.textContent = "Checklist:";
    checklistInput.type = "text";
    checklistDiv.append(checklistHeader, checklistInput);

    // '' Project div

    //confirm button
    const confirmButton = document.createElement("button");
    confirmButton.setAttribute("id", "confirm-button");
    confirmButton.textContent = "Confirm";

    parentDiv.append(titleDiv, descriptionDiv, dueDateDiv, priorityDiv, notesDiv, checklistDiv, confirmButton);
}

export const updateEntry = () => {
    
}


export const clearEntryDisplay = () => {
    const todoDisplayDiv = document.querySelector("#to-do-display-div");

    while (todoDisplayDiv.firstChild) {
        todoDisplayDiv.removeChild(todoDisplayDiv.firstChild);
    }
}

export const clearProjectDisplay = () => {
    const userProjectsDisplay = document.querySelector("#user-projects");

    while (userProjectsDisplay.firstChild) {
        userProjectsDisplay.removeChild(userProjectsDisplay.firstChild);
    }

}

export const displaySelectOptions = (options) => {
    const projectSelector = document.querySelector("#project-input");

    while (projectSelector.firstChild) {
        projectSelector.removeChild(projectSelector.firstChild);
    }

    options.forEach((option) => {

        const newOption = document.createElement("option");
        // newOption.setAttribute("id", `${option}`);
        newOption.textContent = `${option}`;

        projectSelector.appendChild(newOption);
    });
};