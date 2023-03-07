import toDoArray from './objectArray.js'
import cardCreator from './CardCreator'

function deleteToDo() {
    let clickedProject = document.querySelectorAll('.toDoTrash')
    clickedProject.forEach(project => {
        project.addEventListener('click', test)
    });
    
}
function test() {
    console.log('hi')
}

export default {deleteToDo}