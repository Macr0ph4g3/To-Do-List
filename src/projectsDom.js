import projectsArray from "./projectsArray"
import cardCreator from './toDoCardCreator'
import toDoArray from './objectArray.js'

function projectsDom(object) {
    console.log('projectsDOM initiated')
    const leftList = document.getElementsByClassName('projectList')
    const leftMain = document.getElementById('sidebarMenu')
    leftList[0].remove()

    const newProjects = document.createElement('ul')
    newProjects.classList.add('projectList')
    leftMain.appendChild(newProjects)
    object.forEach((element, index) => {
        let color = element.color
        let title = element.title
        let deletable = element.deletable

// this creates the div that will hold both Title and color circle
//
const projectBox = document.createElement('li')
const project = document.createElement('div')
const projectColor = document.createElement('div')

projectBox.classList.add('project')
projectBox.dataset.pi = index

    project.innerHTML = title
    project.classList.add('projectTitle')
    projectBox.addEventListener("click", selectProject)

projectColor.classList.add('projectColor')

function selectProject() {
    projectsArray.selectedProject = object[projectBox.dataset.pi].title
    cardCreator(toDoArray.toDoArray)
}
    
        newProjects.appendChild(projectBox)
        projectBox.appendChild(projectColor)      
        projectBox.appendChild(project)      

        
    });
}




export default projectsDom