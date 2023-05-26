// This creates a new ToDo item
import projectsArray from "./projectsArray"
import toDoRemoval from "./toDoRemoval"
import toDoCheck from "./toDoCheck"
import newToDo from "./toDoForm"



function cardCreator(object) {
    console.log('running CardCreator')
    const rightNav = document.querySelector('.rightNav')
        const mainDiv = document.querySelector('#main')
        rightNav.remove()

        const newRightNav = document.createElement('div')
        newRightNav.classList.add('rightNav')
        mainDiv.appendChild(newRightNav)


        newToDo.newToDo()

    object.forEach( (element, index) => {
        const title = element.title
        const description = element.description
        const dueDate = element.dueDate
        // let priority = element.priority
        const project = element.project

        // Logic to determine if the currently selected project matches the to do items project. It will set both to lowercase and remove spaces to ensure it's the same.
        
        if (project.toLowerCase().trim() != projectsArray.selectedProject.toLowerCase().trim()) {
            return;
        }
// This section identifies the Right-hand section of the site, removes it each time the function is run and replaces it

        
        const container = document.createElement('div')
        container.classList.add('toDoContainer')
        newRightNav.appendChild(container)
        container.dataset.id = index

        const statusContainer = document.createElement('div')
        container.appendChild(statusContainer)
        statusContainer.classList.add('toDoStatus')

        const statusButton = document.createElement('button')
        statusContainer.appendChild(statusButton)
        statusButton.classList.add('check')

        const toDoContentContainer = document.createElement('div')
        container.appendChild(toDoContentContainer)
        toDoContentContainer.classList.add('toDoContent')

        const toDoContentTitle = document.createElement('div')
        const titleText = document.createTextNode(`${title}`)
        toDoContentTitle.appendChild(titleText)
        toDoContentTitle.classList.add('toDoTitle')

        const toDoContentDescription  = document.createElement('div')
        toDoContentDescription.classList.add('toDoDescription')

        if (description.length > 150 ) {
            const shortenedDescription = description.substring(0,120)
            const descriptionText = document.createTextNode(`${shortenedDescription}. . .`)
            toDoContentDescription.appendChild(descriptionText)

        } else {
            const descriptionText = document.createTextNode(`${description}`)
            toDoContentDescription.appendChild(descriptionText)

        }



        const toDoContentDueDate  = document.createElement('div')
        const dueDateText = document.createTextNode(`${dueDate}`)
        toDoContentDueDate.appendChild(dueDateText)
        toDoContentDueDate.classList.add('toDoDueDate')


        const toDoProject  = document.createElement('div')
        const projectText = document.createTextNode(`${project}`)
        toDoProject.appendChild(projectText)
        toDoProject.classList.add('toDoProject')

        
        toDoContentContainer.appendChild(toDoContentTitle)
        toDoContentContainer.appendChild(toDoContentDueDate)
        toDoContentContainer.appendChild(toDoContentDescription)
        toDoContentContainer.appendChild(toDoProject)

        const toDoEditTrash = document.createElement('div')
        toDoEditTrash.classList.add("toDoOptions")

        const edit = document.createElement('button')
        edit.classList.add('toDoEdit',"fa-solid","fa-pencil", 'fa-lg')

        const trash = document.createElement('button')
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
            toDoRemoval.deleteEventListener()
            toDoCheck.checkEventListener()
            
}

export default cardCreator