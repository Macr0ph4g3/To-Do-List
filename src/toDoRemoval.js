import toDoArray from './objectArray.js'
import cardCreator from './toDoCardCreator'
import Storage from './Storage'


function deleteToDo() {
    let trashList = document.querySelectorAll('.toDoTrash')
    trashList.forEach(trash => {
        trash.addEventListener('click', test)
    });
    
}
function test() {
    console.log('hi')
    let parentID = this.parentElement.parentElement.dataset.id
    console.log(parentID)
    toDoArray.toDoArray.splice(parentID, 1)
    Storage.toDoStorageSetup()
    cardCreator(toDoArray.toDoArray)

}

export default {deleteToDo}