import toDoArray from './objectArray.js'
import cardCreator from './toDoCardCreator'

function deleteToDo() {
    let clickedProject = document.querySelectorAll('.check')
    clickedProject.forEach(project => {
        project.addEventListener('click', test)
    });
    
}
function test() {
    console.log('hi')
    let parentID = this.parentElement.parentElement.dataset.id
    console.log(parentID)
    toDoArray.toDoArray.splice(parentID, 1)
    cardCreator(toDoArray.toDoArray)

}

export default {deleteToDo}