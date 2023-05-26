import projectsArray from "./projectsArray"
import cardCreator from './toDoCardCreator'
import toDoArray from './objectArray.js'
import projectRemoval from './projectRemoval'

function projectsDom(object) {
    const leftList = document.getElementsByClassName('projectList');
    const leftMain = document.getElementById('sidebarMenu');
    leftList[0].remove();

    const newProjects = document.createElement('ul');
    newProjects.classList.add('projectList');
    leftMain.appendChild(newProjects);
    object.forEach((element, index) => {
        // const color = element.color
        const title = element.title
        // const deletable = element.deletable

// this creates the div that will hold both Title and color circle
const projectBox = document.createElement('li')
const project = document.createElement('div')
const projectRemove = document.createElement('div')

projectBox.classList.add('project')
projectBox.dataset.pi = index
projectBox.dataset.title = title

    project.innerHTML = title
    project.classList.add('projectTitle')
    projectBox.addEventListener("click", selectProject)

projectRemove.classList.add('projectRemove','fa-solid', 'fa-plus','fa-lg')


function selectProject() {
        projectsArray.selectedProject = object[projectBox.dataset.pi].title
        cardCreator(toDoArray.toDoArray)
}
newProjects.appendChild(projectBox)
projectBox.appendChild(project)   
projectBox.appendChild(projectRemove)      
});

projectRemoval.deleteProject();

}




export default projectsDom