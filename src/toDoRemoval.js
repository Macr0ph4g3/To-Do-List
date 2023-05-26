import toDoArray from './objectArray.js'
import cardCreator from './toDoCardCreator'
import Storage from './Storage'


function deleteEventListener() {
    const trashList = document.querySelectorAll('.toDoTrash')
    trashList.forEach(trash => {
        trash.addEventListener('click', deleteItem)
    });
    
}
function deleteItem() {
    // eslint-disable-next-line no-invalid-this
    const parentID = this.parentElement.parentElement.dataset.id
    toDoArray.toDoArray.splice(parentID, 1)
    Storage.toDoStorageSetup()
    cardCreator(toDoArray.toDoArray)

}

export default {deleteEventListener}