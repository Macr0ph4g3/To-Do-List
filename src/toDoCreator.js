import toDoArray from './objectArray.js'
import cardCreator from './toDoCardCreator'
import projectsArray from './projectsArray'

function toDoCreator() {
    
    let tName = document.querySelector('#tName')
    let tDescription = document.querySelector('#tDescription')
    let tDueDate = document.querySelector('#tDueDate')
    let tPriority = document.querySelector('#tPriority')
    let tProject = document.querySelector('#projectSelect')
    let formSubmit = document.querySelector('#formSubmit')


    let toDoInfo = document.querySelectorAll('input')
    
    console.log(toDoInfo)
    let title = tName.value
    let description = tDescription.value
    let dueDate = tDueDate.value 
    let priority = tPriority.value
    let project = tProject.value
    //If all the fields are filled then create new ToDo object, import into array and run cardCreator.
    if(title != "" && description != "" && dueDate != "" && priority != "" && project != "" ){
    
   
    let newToDo = new toDoArray.ToDoConstructor(title, description, dueDate, priority, project)

    toDoArray.toDoArray.unshift(newToDo)
    cardCreator(toDoArray.toDoArray)
    
    tName.value = ""
    tDescription.value = ""
    tDueDate.value = ""
    tPriority.value = ""
    tProject.value = ""
    
    let toDoForm = document.getElementsByClassName('toDoForm')
    toDoForm[0].remove()
    }
}


export default toDoCreator