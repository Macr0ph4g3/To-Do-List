//This creates a new ToDo item



function cardCreator(object) {
    object.forEach( (element, index) => {
        console.log(element, index)
        let title = element.title
        let description = element.description
        let dueDate = element.dueDate
        let priority = element.priority
        let project = element.project
        
        const rightNav = document.querySelector('.rightNav')

        let container = document.createElement('div')
        container.classList.add('toDoContainer')
        rightNav.appendChild(container)

        let statusContainer = document.createElement('div')
        container.appendChild(statusContainer)
        statusContainer.classList.add('toDoStatus')

        let statusButton = document.createElement('button')
        statusContainer.appendChild(statusButton)
        statusButton.classList.add('statusButtonActive')

        let toDoContentContainer = document.createElement('div')
        container.appendChild(toDoContentContainer)
        toDoContentContainer.classList.add('toDoContent')

        let toDoContentTitle = document.createElement('div')
        let titleText = document.createTextNode(`${title}`)
        toDoContentTitle.appendChild(titleText)
        toDoContentTitle.classList.add('toDoTitle')

        let toDoContentDescription  = document.createElement('div')
        let descriptionText = document.createTextNode(`${description}`)
        toDoContentDescription.classList.add('toDoDescription')

        toDoContentDescription.appendChild(descriptionText)


        let toDoContentDueDate  = document.createElement('div')
        let dueDateText = document.createTextNode(`${dueDate}`)
        toDoContentDueDate.appendChild(dueDateText)
        toDoContentDueDate.classList.add('toDoDueDate')
        
        
        toDoContentContainer.appendChild(toDoContentTitle)
        toDoContentContainer.appendChild(toDoContentDescription)
        toDoContentContainer.appendChild(toDoContentDueDate)



        // This outputs both the key's name and the values of said key
        for (const [key, value] of Object.entries(element)) {
            
            console.log(`${key}: ${value}`);

            
          }
              });
}

export default cardCreator