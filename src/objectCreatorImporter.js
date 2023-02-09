const Button = document.getElementById("newToDoButton")
const mainDiv = document.getElementById("main")
// Button.addEventListener("mouseleave", removePopUp)
Button.addEventListener("mouseover", toDoPopUp)

function newProjectCreator() {

    const newObjects = document.querySelectorAll('.new')
    newObjects[0].remove()
    newObjects[1].remove()

    const existingPopUp = document.querySelector('.popUp')
    console.log(existingPopUp)
    existingPopUp.classList.add('projectForm')
    existingPopUp.classList.remove('popUp')

    const projectForm = document.createElement('form')
    projectForm.classList.add('formOne')
        
    //create input element for Project Name
    let pName = document.createElement("input");
    pName.setAttribute("type", "text")
    pName.setAttribute("name", "Project Name")
    pName.setAttribute("placeHolder", "New Project")

    let formSubmit = document.createElement("input")
    formSubmit.setAttribute("type", "submit")
    formSubmit.setAttribute("value", "Submit")

    existingPopUp.appendChild(projectForm)
    projectForm.appendChild(pName)
    projectForm.appendChild(formSubmit)

}


// popup for adding new To Do Dom
function toDoPopUp() {
    console.log('mouseover activate')
    let existingPopUp = document.querySelector('.popUp')
    let existingForm = document.querySelector('.form')
    if( existingPopUp === null && existingForm === null ) {
        const popUp = document.createElement('div')
        popUp.classList.add('popUp')
        mainDiv.appendChild(popUp)

        const newProject = document.createElement('div')
        const newToDo = document.createElement('div')

        newProject.innerHTML = 'New Project'
        newToDo.innerHTML = 'New To-Do'

        newProject.classList.add('new')
        newToDo.classList.add('new')

        popUp.appendChild(newProject)
        popUp.appendChild(newToDo)


        newProject.addEventListener("click", newProjectCreator)
        newToDo.addEventListener("click", newToDoCreator)



    
    } else {
        console.log('null')
        return 
    }
}



function newToDoCreator() {

    const newObjects = document.querySelectorAll('.new')
    newObjects[0].remove()
    newObjects[1].remove()

    const existingPopUp = document.querySelector('.popUp')
    console.log(existingPopUp)
    existingPopUp.classList.add('toDoForm')
    existingPopUp.classList.remove('popUp')

    const toDoForm = document.createElement('form')
    toDoForm.classList.add('formTwo')
        
    //create input element for Project Name
    let tName = document.createElement("input");
    tName.setAttribute("type", "text")
    tName.setAttribute("name", "toDoTitle")
    tName.setAttribute("placeHolder", "Title")

    let tDescription = document.createElement("input");
    tDescription.setAttribute("type", "text")
    tDescription.setAttribute("name", "toDoTitle")
    tDescription.setAttribute("placeHolder", "Description")

    let tDueDate = document.createElement("input");
    tDueDate.setAttribute("type", "text")
    tDueDate.setAttribute("name", "toDoTitle")
    tDueDate.setAttribute("placeHolder", "Due Date")

    let tPriority = document.createElement("input");
    tPriority.setAttribute("type", "text")
    tPriority.setAttribute("name", "toDoTitle")
    tPriority.setAttribute("placeHolder", "Priority")

    let tProject = document.createElement("input");
    tProject.setAttribute("type", "text")
    tProject.setAttribute("name", "toDoTitle")
    tProject.setAttribute("placeHolder", "Project")


    let formSubmit = document.createElement("input")
    formSubmit.setAttribute("type", "submit")
    formSubmit.setAttribute("value", "Submit")

    existingPopUp.appendChild(toDoForm)
    toDoForm.appendChild(tName)
    toDoForm.appendChild(tDescription)
    toDoForm.appendChild(tDueDate)
    toDoForm.appendChild(tPriority)
    toDoForm.appendChild(tProject)
    toDoForm.appendChild(formSubmit)


}


function removePopUp() {
    console.log('mouseleave activate')
    let popUp = document.querySelectorAll('.popUp')
    console.log(popUp[0])
    popUp[0].classList.add('popUpBeGone')
    setTimeout(() => {
        popUp[0].remove()

    }, "1000")

}
// Make this work so that it persists if in the proper divs.

export default {toDoPopUp}