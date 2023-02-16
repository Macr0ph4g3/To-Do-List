
function ToDoConstructor(t,d,dd,p,pr) {
    this.title = t
    this.description = d
    this.dueDate = dd
    this.priority = p
    this.project = pr
}
const toDoObjectOne = new ToDoConstructor('Finish Odin Project','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')

const toDoArray = []


toDoArray.unshift(toDoObjectOne)

export default {toDoArray, toDoObjectOne, ToDoConstructor}
