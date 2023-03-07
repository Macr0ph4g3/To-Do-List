//This creates a new ToDo item
import projectsArray from "./projectsArray"
import toDoEdit from "./toDoEdit"
import toDoRemoval from "./toDoRemoval"
import toDoCreator from "./toDoCreator"
import toDoCheck from "./toDoCheck"


function cardCreator(object) {
    console.log('running CardCreator')
    const rightNav = document.querySelector('.rightNav')
        const mainDiv = document.querySelector('#main')
        rightNav.remove()

        const newRightNav = document.createElement('div')
        newRightNav.classList.add('rightNav')
        mainDiv.appendChild(newRightNav)


        newToDo()

    object.forEach( (element, index) => {
        let title = element.title
        let description = element.description
        let dueDate = element.dueDate
        let priority = element.priority
        let project = element.project

        //Logic to determine if the currently selected project matches the to do items project. It will set both to lowercase and remove spaces to ensure it's the same.
        
        if (project.toLowerCase().trim() != projectsArray.selectedProject.toLowerCase().trim()) {
            console.log(`${element.title} is not apart of the selected project`)
            return;
        }
// This section identifies the Right-hand section of the site, removes it each time the function is run and replaces it

        
        let container = document.createElement('div')
        container.classList.add('toDoContainer')
        newRightNav.appendChild(container)
        container.dataset.id = index

        let statusContainer = document.createElement('div')
        container.appendChild(statusContainer)
        statusContainer.classList.add('toDoStatus')

        let statusButton = document.createElement('button')
        statusContainer.appendChild(statusButton)
        statusButton.classList.add('check')

        let toDoContentContainer = document.createElement('div')
        container.appendChild(toDoContentContainer)
        toDoContentContainer.classList.add('toDoContent')

        let toDoContentTitle = document.createElement('div')
        let titleText = document.createTextNode(`${title}`)
        toDoContentTitle.appendChild(titleText)
        toDoContentTitle.classList.add('toDoTitle')

        let toDoContentDescription  = document.createElement('div')
        toDoContentDescription.classList.add('toDoDescription')

        if (description.length > 150 ) {
            let shortenedDescription = description.substring(0,120)
            let descriptionText = document.createTextNode(`${shortenedDescription}. . .`)
            toDoContentDescription.appendChild(descriptionText)

        } else {
            let descriptionText = document.createTextNode(`${description}`)
            toDoContentDescription.appendChild(descriptionText)

        }



        let toDoContentDueDate  = document.createElement('div')
        let dueDateText = document.createTextNode(`${dueDate}`)
        toDoContentDueDate.appendChild(dueDateText)
        toDoContentDueDate.classList.add('toDoDueDate')


        let toDoProject  = document.createElement('div')
        let projectText = document.createTextNode(`${project}`)
        toDoProject.appendChild(projectText)
        toDoProject.classList.add('toDoProject')

        
        toDoContentContainer.appendChild(toDoContentTitle)
        toDoContentContainer.appendChild(toDoContentDueDate)
        toDoContentContainer.appendChild(toDoContentDescription)
        toDoContentContainer.appendChild(toDoProject)

        let toDoEditTrash = document.createElement('div')
        toDoEditTrash.classList.add("toDoOptions")

        let edit = document.createElement('button')
        edit.classList.add('toDoEdit',"fa-solid","fa-pencil", 'fa-lg')

        let trash = document.createElement('button')
        trash.classList.add('toDoTrash','fa-solid', 'fa-trash', 'fa-lg')

        container.appendChild(toDoEditTrash)
        toDoEditTrash.appendChild(trash)
        toDoEditTrash.appendChild(edit)


        // This outputs both the key's name and the values of said key
        // for (const [key, value] of Object.entries(element)) {
            
        //     console.log(`${key}: ${value}`);

            
        //   }
              });
            //   toDoEdit(toDoEdit.myFunctionWorks)
            toDoRemoval.deleteToDo()
            toDoCheck.deleteToDo()
}
function newToDo() {
    
    const newTask = document.createElement('div')
    newTask.classList.add('newToDoTwo')


  const newToDo = document.createElement('div')  
  const rightNav = document.querySelector('.rightNav')
    rightNav.appendChild(newTask)
    rightNav.appendChild(newToDo)



    const toDoForm = document.createElement('form');
    toDoForm.classList.add('formTwo');

    const leftForm = document.createElement('div')
    const rightForm = document.createElement('div')
    leftForm.classList.add('leftForm')
    rightForm.classList.add('rightForm')
    
        
    //create input element for Project Name
    let tName = document.createElement("input");
        tName.setAttribute("type", "text");
        tName.setAttribute("name", "Name");
        tName.setAttribute("placeHolder", "Title");
        tName.setAttribute("id", "tName");

    let tDescription = document.createElement("textarea");
        tDescription.setAttribute("name", "Description");
        tDescription.setAttribute("placeHolder", "Description");
        tDescription.setAttribute("id", "tDescription");


    let tDueDate = document.createElement("input");
        tDueDate.setAttribute("type", "text");
        tDueDate.setAttribute("name", "Due Date");
        tDueDate.setAttribute("placeHolder", "Due Date");
        tDueDate.setAttribute("id", "tDueDate");

    let tPriority = document.createElement("input");
        tPriority.setAttribute("type", "text");
        tPriority.setAttribute("name", "Priority");
        tPriority.setAttribute("placeHolder", "Priority");
        tPriority.setAttribute("id", "tPriority");

    let tProject = document.createElement("label");
        tProject.innerHTML = "Project: "
        tProject.setAttribute("id", "tProject");

    let tProjectSelector = document.createElement("select")
        tProjectSelector.setAttribute('id','projectSelect')

    projectsArray.projectsArray.forEach(project => {
        let projectOption = document.createElement("option");
            projectOption.setAttribute("value", project.title)
            projectOption.innerHTML = project.title
    tProjectSelector.appendChild(projectOption)
    });

    tProject.appendChild(tProjectSelector)

    let formSubmit = document.createElement("input")
    formSubmit.setAttribute("type", "button")
    formSubmit.setAttribute('id', 'submit')
    formSubmit.setAttribute("value", "Submit")

    newToDo.appendChild(toDoForm)
    toDoForm.append(leftForm,rightForm)
    leftForm.append(tName,tDescription,tProject)
    rightForm.append(tDueDate,tPriority,formSubmit)

    let submitButton = document.getElementById('submit')
    submitButton.addEventListener('click', toDoCreator)

}
export default cardCreator