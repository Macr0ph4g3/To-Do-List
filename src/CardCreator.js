//This creates a new ToDo item

import projectsArray from "./projectsArray"

function cardCreator(object) {
    
    const rightNav = document.querySelector('.rightNav')
        const mainDiv = document.querySelector('#main')
        rightNav.remove()

        const newRightNav = document.createElement('div')
        newRightNav.classList.add('rightNav')
        mainDiv.appendChild(newRightNav)

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




        // This outputs both the key's name and the values of said key
        // for (const [key, value] of Object.entries(element)) {
            
        //     console.log(`${key}: ${value}`);

            
        //   }
              });
}

export default cardCreator