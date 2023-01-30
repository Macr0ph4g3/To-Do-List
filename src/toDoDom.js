const rightNav = document.getElementsByClassName('rightNav')

function populateObject(toDoArray) {
    toDoArray.forEach( (element, index) => {
        let toDoContainer = document.createElement('div')
        toDoContainer.setAttribute('class', 'toDoContainer')
        toDoContainer.dataset.id = index
        
        let toDoStatus = document.createElement('div')
        toDoStatus.setAttribute('class','toDoStatus')


        let toDoStatusButton = document.createElement('button')
        toDoStatusButton.setAttribute('class','statusButton')

        let toDoContent = document.createElement('div')
        toDoContent.setAttribute('class','toDoContent')


        let toDoTitle = document.createElement('div')
        toDoTitle.setAttribute('class','toDoTitle')
        toDoTitle.dataset.title = element.title
        toDoTitle.innerHTML = element.title

        let toDoDescription = document.createElement('div')
        toDoDescription.setAttribute('class','toDoDescription')
        toDoDescription.dataset.description = element.description
        toDoDescription.innerHTML = element.description

        let toDoDueDate = document.createElement('div')
        toDoDueDate.setAttribute('class','toDoDuedate')
        toDoDueDate.dataset.dueDate = element.dueDate
        toDoDueDate.innerHTML = element.dueDate

        toDoContainer.appendChild(toDoStatus)
        toDoContainer.appendChild(toDoContent)
        toDoStatus.appendChild(toDoStatusButton)
        toDoContent.appendChild(toDoTitle)
        toDoContent.appendChild(toDoDescription)
        toDoContent.appendChild(toDoDueDate)

    });
}

export default { populateObject } 