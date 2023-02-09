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

        const project = document.createElement('div')
// this creates the div that will hold both Title and color circle
//

        project.innerHTML = title
        project.classList.add('projectTitle')
        project.dataset.pi = index
        project.addEventListener("click", selectProject)

        function selectProject() {
            console.log('hi')
            projectsArray.selectedProject = object[project.dataset.pi].title
            console.log(projectsArray.selectedProject)
            cardCreator(toDoArray.toDoArray)
        }
    
        newProjects.appendChild(project)      
    });
}




export default projectsDom