import toDoArray from './objectArray.js'
import cardCreator from './toDoCardCreator'

function checkEventListener() {
    const clickedProject = document.querySelectorAll('.check')
    clickedProject.forEach(project => {
        project.addEventListener('click', checkItem)
    });
    
}
function checkItem() {
    // eslint-disable-next-line no-invalid-this
    const parentID = this.parentElement.parentElement.dataset.id
    console.log(parentID)
    toDoArray.toDoArray.splice(parentID, 1)
    cardCreator(toDoArray.toDoArray)

}

export default {checkEventListener}