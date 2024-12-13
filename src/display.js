export const displayNewProject = () => {
    const projectDisplayDiv = document.querySelector("#project-display-div");

    const newSpan = document.createElement("span");
    newSpan.textContent = "I am just testing this, don't add text content this way!!!!";

    projectDisplayDiv.appendChild(newSpan);
}

export const displayProjects = (projects) => {
    const projectDisplayDiv = document.querySelector("#project-display-div");

    const newSpan = document.createElement("span");
    newSpan.classList.add("project-span");

    newSpan.textContent = projects[projects.length - 1];

    projectDisplayDiv.appendChild(newSpan);
}

export const displayEntry = (entries) => {
    const todoDisplayDiv = document.querySelector("#to-do-display-div")

    const newDiv = document.createElement("div");
    newDiv.classList.add("entry-div");

    //build display container for title data
    const titleOutputDiv = document.createElement("div");
    const titleOutputHeader = document.createElement("h3");
    const titleOutputData = document.createElement("p");
    titleOutputHeader.textContent = "Title:";
    titleOutputData.textContent = entries[entries.length - 1].title;
    titleOutputDiv.append(titleOutputHeader, titleOutputData);

    //build display container for description data
    const descriptionOutputDiv = document.createElement("div");
    const descriptionOutputHeader = document.createElement("h3");
    const descriptionOutputData = document.createElement("p");
    descriptionOutputHeader.textContent = "Description:";
    descriptionOutputData.textContent = entries[entries.length - 1].description;
    descriptionOutputDiv.append(descriptionOutputHeader, descriptionOutputData);

    //build display container for due date datas
    const dueDateOutputDiv = document.createElement("div");
    const dueDateOutputHeader = document.createElement("h3");
    const dueDateOutputData = document.createElement("p");
    dueDateOutputHeader.textContent = "Due Date:";
    dueDateOutputData.textContent = entries[entries.length - 1].dueDate;
    dueDateOutputDiv.append(dueDateOutputHeader, dueDateOutputData);

    //build display container for priority data
    const priorityOutputDiv = document.createElement("div");
    const priorityOutputHeader = document.createElement("h3");
    const priorityOutputData = document.createElement("p");
    priorityOutputHeader.textContent = "Priority:";
    priorityOutputData.textContent = entries[entries.length - 1].priority;
    priorityOutputDiv.append(priorityOutputHeader, priorityOutputData);

    //build display container for notes data
    const notesOutputDiv = document.createElement("div");
    const notesOutputHeader = document.createElement("h3");
    const notesOutputData = document.createElement("p");
    notesOutputHeader.textContent = "Notes:";
    notesOutputData.textContent = entries[entries.length - 1].notes;
    notesOutputDiv.append(notesOutputHeader, notesOutputData);

    //build display container for checklist data
    const checklistOutputDiv = document.createElement("div");
    const checklistOutputHeader = document.createElement("h3");
    const checklistOutputData = document.createElement("p");
    checklistOutputHeader.textContent = "Checklist:";
    checklistOutputData.textContent = entries[entries.length - 1].checklist;
    checklistOutputDiv.append(checklistOutputHeader, checklistOutputData);

    //build display container for project data
    const projectOutputDiv = document.createElement("div");
    const projectOutputHeader = document.createElement("h3");
    const projectOutputData = document.createElement("select");

    //we aren't there yet, but this should ALWAYS dynamically create the select options for project based on the current existingproject values


    projectOutputHeader.textContent = "Project:";
    projectOutputData.textContent = entries[entries.length - 1].checklist;
    projectOutputDiv.append(projectOutputHeader, projectOutputData);

    newDiv.append(titleOutputDiv, descriptionOutputDiv, dueDateOutputDiv, priorityOutputDiv, notesOutputDiv, checklistOutputDiv, projectOutputDiv);

    todoDisplayDiv.appendChild(newDiv);
}