import newToDo from './objectCreatorImporter'
import popup from './objectCreatorImporter.js'

function myFunctionWorks() {
    let clickedProject = document.querySelectorAll('.toDoContainer')
    clickedProject.forEach(project => {
        project.addEventListener('click', test)
    });
    
}
function test() {
    console.log('hi')
    popup.newToDoForm()
}
export default (myFunctionWorks)