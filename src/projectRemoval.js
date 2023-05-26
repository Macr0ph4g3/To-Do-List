import projectArray from './projectsArray.js'
import projectsDOM from './projectsDom.js'
import Storage from "./Storage"
import cardCreator from './toDoCardCreator'
import toDoArray from './objectArray.js'

function deleteProject() {
    const clickedProject = document.querySelectorAll('.projectRemove')
    clickedProject.forEach(project => {
        project.addEventListener('click', SpliceArray)
    });
    
}
function SpliceArray() {
    const parentID = this.parentElement.dataset.pi
    projectArray.projectsArray.splice(parentID, 1)
    Storage.projectStorageSetup()

    projectArray.selectedProject = projectArray.projectsArray[parentID-1].title
    projectsDOM(projectArray.projectsArray);

    projectArray.selectedProject = "Unassigned"
    cardCreator(toDoArray.toDoArray)

}

export default {deleteProject}