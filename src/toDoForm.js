import projectsArray from "./projectsArray"
import toDoCreator from "./toDoCreator"


function newToDo() {
    // This is the "+ New Task" at the top of the Main-Right
const newTask = document.createElement('div')
    newTask.classList.add('taskCreator')

const newPlusText = document.createElement('p')
    newPlusText.innerHTML = 'New Task'
const newPlus = document.createElement('div')
    newPlus.classList.add('fa-solid','fa-plus','fa-md')
    
newTask.appendChild(newPlus)
newTask.appendChild(newPlusText)

newTask.addEventListener('click', unhideToDoForm)

// Adding the New To Do Form

const newToDo = document.createElement('div')  
    newToDo.classList.add('invisibleForm')
    newToDo.setAttribute('id','ToDoForm')
const rightNav = document.querySelector('.rightNav')
    rightNav.appendChild(newTask)
    rightNav.appendChild(newToDo)



    const toDoForm = document.createElement('form');
        toDoForm.classList.add('toDoForm')

    
        
    // Create input element for Project Name
    const tName = document.createElement("input");
        tName.setAttribute("type", "text");
        tName.setAttribute("name", "Name");
        tName.setAttribute("placeHolder", "Title");
        tName.setAttribute("id", "tName");

    const tDescription = document.createElement("textarea");
        tDescription.setAttribute("name", "Description");
        tDescription.setAttribute("placeHolder", "Description");
        tDescription.setAttribute("id", "tDescription");


    const tDueDate = document.createElement("input");
        tDueDate.setAttribute("type", "text");
        tDueDate.setAttribute("name", "Due Date");
        tDueDate.setAttribute("placeHolder", "Due Date");
        tDueDate.setAttribute("id", "tDueDate");

    const tPriority = document.createElement("input");
        tPriority.setAttribute("type", "text");
        tPriority.setAttribute("name", "Priority");
        tPriority.setAttribute("placeHolder", "Priority");
        tPriority.setAttribute("id", "tPriority");

    const tProject = document.createElement("label");
        tProject.innerHTML = "Project: "
        tProject.setAttribute("id", "tProject");

    const tProjectSelector = document.createElement("select")
        tProjectSelector.setAttribute('id','projectSelect')

    projectsArray.projectsArray.forEach(project => {
        const projectOption = document.createElement("option");
            projectOption.setAttribute("value", project.title)
            projectOption.innerHTML = project.title
    tProjectSelector.appendChild(projectOption)
    });

    tProject.appendChild(tProjectSelector)

    const formSubmit = document.createElement("input")
    formSubmit.setAttribute("type", "button")
    formSubmit.setAttribute('id', 'submit')
    formSubmit.setAttribute("value", "Submit")

const leftForm = document.createElement('div')
const rightForm = document.createElement('div')

// Putting the form on the page and appending the left / right sides
    newToDo.appendChild(toDoForm)
    leftForm.append(tName,tDueDate,tDescription,tProject)
        leftForm.classList.add('toDoContent')
    rightForm.append(formSubmit)
        rightForm.classList.add('toDoOptions')
    toDoForm.append(leftForm,rightForm)
    
    const submitButton = document.getElementById('submit')
    submitButton.addEventListener('click', toDoCreator)

}

function unhideToDoForm() {
    const toDoForm = document.querySelector('#ToDoForm')

        console.log(toDoForm.classList)
    switch ( true ) {
        case toDoForm.classList.contains('visibleForm'):
        toDoForm.classList.remove('visibleForm');
        toDoForm.classList.add('invisibleForm');
        break;
    
        case toDoForm.classList.contains('invisibleForm'):
        toDoForm.classList.remove('invisibleForm');
        toDoForm.classList.add('visibleForm');
        break;
    }



}

export default {newToDo}