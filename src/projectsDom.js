import projectsArray from "./projectsArray"
import cardCreator from './CardCreator'
import toDoArray from './objectArray.js'

function projectsDom(object) {
    const leftList = document.getElementsByClassName('leftList')
    const leftMain = document.getElementsByClassName('leftNav')
    leftList[0].remove()

    const newProjects = document.createElement('div')
    newProjects.classList.add('leftList')
    leftMain[0].appendChild(newProjects)
    object.forEach((element, index) => {
        let color = element.color
        let title = element.title
        let deletable = element.deletable

// this creates the div that will hold both Title and color circle
//
const projectBox = document.createElement('div')
const project = document.createElement('div')
const projectColor = document.createElement('div')

projectBox.classList.add('project')
projectBox.dataset.pi = index

    project.innerHTML = title
    project.classList.add('projectTitle')
    project.addEventListener("click", selectProject)

projectColor.classList.add('projectColor')
        function selectProject() {
            projectsArray.selectedProject = object[projectBox.dataset.pi].title
            console.log(projectsArray.selectedProject)
            cardCreator(toDoArray.toDoArray)
        }
    
        newProjects.appendChild(projectBox)
        projectBox.appendChild(projectColor)      
        projectBox.appendChild(project)      

    });
}




export default projectsDom