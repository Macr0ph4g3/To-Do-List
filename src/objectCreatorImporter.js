import toDoCreator from "./toDoCreator"
import projectCreator from "./projectCreator"

const Button = document.getElementById("newToDoButton")
const mainDiv = document.getElementById("main")

Button.addEventListener("mouseover", newPopUp)

// popup for adding new To Do Dom AND for removing existing doms

function newPopUp() {  
      
    let existingPopUp = document.querySelector('.popUp')
    let existingPForm = document.querySelector('.projectForm')
    let existingTForm = document.querySelector('.toDoForm')
    let rightNav = document.querySelector('.rightNav')

    rightNav.addEventListener('click',removePopUp)

    //Logic to close form if clicking on rightNav

function removePopUp() {
    let popUp = document.querySelectorAll('.popUp')
    let pForm = document.querySelectorAll('.projectForm')
    let tForm = document.querySelectorAll('.toDoForm')
    if(popUp.length == 1) {
        setTimeout(() => {
            popUp[0].remove()
        }, "100")
        } else if (pForm.length == 1) {
            setTimeout(() => {

            pForm[0].remove()
        }, "100")} 
        else if (tForm.length == 1) {
            setTimeout(() => {

            tForm[0].remove()
        }, "100") } 


}

//logic to create a popup form if there are no existing popup forms showing

    if( existingPopUp === null && existingPForm === null && existingTForm == null ) {
        const popUp = document.createElement('div')
        popUp.classList.add('popUp')
        mainDiv.appendChild(popUp)

        const newProject = document.createElement('div')
        const newToDo = document.createElement('div')

        newProject.innerHTML = 'New Project'
        newToDo.innerHTML = 'New To-Do'

        newProject.classList.add('new')
        newToDo.classList.add('new')

        popUp.append(newProject,newToDo)
        
        newProject.addEventListener("click", newProjectForm)
        newToDo.addEventListener("click", newToDoForm)
  
    } else {
        console.log('null')
        return 
    }
}

//this creates the popup for the Project form if selected

function newProjectForm() {

    const newObjects = document.querySelectorAll('.new')
    newObjects[0].remove()
    newObjects[1].remove()

    const existingPopUp = document.querySelector('.popUp')
    existingPopUp.classList.add('projectForm')
    existingPopUp.classList.remove('popUp')

    const projectForm = document.createElement('form')
    projectForm.classList.add('formOne')
        
    //create input element for Project Name

    let pName = document.createElement("input");
    pName.setAttribute("type", "text")
    pName.setAttribute("name", "Project Name")
    pName.setAttribute("placeHolder", "New Project")

    let pColor = document.createElement("input");
    pColor.classList.add('.pColor')
    pColor.setAttribute("type", "button")
    pColor.setAttribute("name", "Project Color")
    pColor.setAttribute("placeHolder", "Color")


    let formSubmit = document.createElement("input")
    formSubmit.setAttribute("type", "button")
    formSubmit.setAttribute('id', 'submit')
    formSubmit.setAttribute("value", "Submit")

    existingPopUp.appendChild(projectForm)
    projectForm.append(pName, pColor, formSubmit)

    // AColorPicker.from('.rightNav')
    // .on('change', (picker, color => {
    //     document.body.style.backgroundColor = color; }) )



    let submitButton = document.getElementById('submit')
    submitButton.addEventListener('click', projectCreator)


}

//this creates the popup for the To Do form if selected

function newToDoForm() {

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
    tName.setAttribute("name", "Name")
    tName.setAttribute("placeHolder", "Title")

    let tDescription = document.createElement("input");
    tDescription.setAttribute("type", "text")
    tDescription.setAttribute("name", "Description")
    tDescription.setAttribute("placeHolder", "Description")

    let tDueDate = document.createElement("input");
    tDueDate.setAttribute("type", "text")
    tDueDate.setAttribute("name", "Due Date")
    tDueDate.setAttribute("placeHolder", "Due Date")

    let tPriority = document.createElement("input");
    tPriority.setAttribute("type", "text")
    tPriority.setAttribute("name", "Priority")
    tPriority.setAttribute("placeHolder", "Priority")

    let tProject = document.createElement("input");
    tProject.setAttribute("type", "text")
    tProject.setAttribute("name", "Project")
    tProject.setAttribute("placeHolder", "Project")

    let formSubmit = document.createElement("input")
    formSubmit.setAttribute("type", "button")
    formSubmit.setAttribute('id', 'submit')
    formSubmit.setAttribute("value", "Submit")

    existingPopUp.appendChild(toDoForm)

    toDoForm.append(tName,tDescription,tDueDate,tPriority,tProject,formSubmit)

    let submitButton = document.getElementById('submit')
    submitButton.addEventListener('click', toDoCreator)
}


// Make this work so that it persists if in the proper divs.

export default {newPopUp}