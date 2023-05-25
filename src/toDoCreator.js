import toDoArray from './objectArray.js'
import cardCreator from './toDoCardCreator'
import projectsArray from './projectsArray'
import Storage from './Storage'

function toDoCreator() {
    
    const tName = document.querySelector('#tName')
    const tDescription = document.querySelector('#tDescription')
    const tDueDate = document.querySelector('#tDueDate')
    // let tPriority = document.querySelector('#tPriority')
    const tProject = document.querySelector('#projectSelect')
    const formSubmit = document.querySelector('#formSubmit')


    const toDoInfo = document.querySelectorAll('input')
    
    const title = tName.value
    const description = tDescription.value
    const dueDate = tDueDate.value 
    const priority = "tPriority.value"
    const project = tProject.value
    // If all the fields are filled then create new ToDo object, import into array and run cardCreator.
    if(title != "" && description != "" && dueDate != "" && priority != "" && project != "" ){
    
   
    const newToDo = new toDoArray.ToDoConstructor(title, description, dueDate, priority, project)

    toDoArray.toDoArray.unshift(newToDo)
    Storage.toDoStorageSetup()
    cardCreator(toDoArray.toDoArray)
    
    tName.value = ""
    tDescription.value = ""
    tDueDate.value = ""
    // tPriority.value = ""
    tProject.value = ""
    
    // let toDoForm = document.getElementsByClassName('toDoForm')
    // toDoForm[0].remove()
    }
}


export default toDoCreator