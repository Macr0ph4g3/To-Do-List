import toDoArray from './objectArray.js'
import cardCreator from './CardCreator'


function toDoCreator() {
    
    let toDoInfo = document.querySelectorAll('input')
    console.log(toDoInfo)
    let title = toDoInfo[0].value
    let description = toDoInfo[1].value
    let dueDate = toDoInfo[2].value 
    let priority = toDoInfo[3].value
    let project = toDoInfo[4].value
    //If all the fields are filled then create new ToDo object, import into array and run cardCreator.
    if(title != "" && description != "" && dueDate != "" && priority != "" && project != "" ){
    let newToDo = new toDoArray.ToDoConstructor(title, description, dueDate, priority, project)

    toDoArray.toDoArray.unshift(newToDo)
    cardCreator(toDoArray.toDoArray)
    
    toDoInfo[0].value = ""
    toDoInfo[1].value = ""
    toDoInfo[2].value = ""
    toDoInfo[3].value = ""
    toDoInfo[4].value = ""
    
    let toDoForm = document.getElementsByClassName('toDoForm')
    toDoForm[0].remove()
    }

}

export default toDoCreator