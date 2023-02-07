const addButton = document.getElementById("newToDoButton").addEventListener("click", toDoPopUp)
const mainDiv = document.getElementById("main")
// popup for adding new To Do Dom
function toDoPopUp() {
    let popUp = document.createElement('div')
    popUp.classList.add('popUp')
    mainDiv.appendChild(popUp)
    popUp.classList.add('popUpTransition')

}
export default {toDoPopUp}