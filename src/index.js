import './style.css';
import addButton from '././objectCreatorImporter.js'
import cardCreator from './CardCreator'
import toDoArray from './objectArray.js'
import arrayImport from './arrayImport.js'
import projectsArray from './projectsArray'
import projectsDom from './projectsDom'
// import Icon from './icon.png';

addButton
arrayImport(toDoArray.toDoObjectOne)

cardCreator(toDoArray.toDoArray)

const toDoObjectTwo = new toDoArray.ToDoConstructor('To Do List','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')
const toDoObjecto = new toDoArray.ToDoConstructor('To Do List2','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')
const toDoObjectTw = new toDoArray.ToDoConstructor('To Do List3','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')
const toDoObject1 = new toDoArray.ToDoConstructor('To Do List4','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')
const toDoObject2 = new toDoArray.ToDoConstructor('To Do List5','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')
const toDoObject3 = new toDoArray.ToDoConstructor('To Do List6','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')
const toDoObject4 = new toDoArray.ToDoConstructor('To Do List7','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')
const toDoObject5 = new toDoArray.ToDoConstructor('To Do List8','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')
const toDoObject6 = new toDoArray.ToDoConstructor('To Do List9','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')





arrayImport(toDoObjectTwo)
arrayImport(toDoObjecto)
arrayImport(toDoObjectTw)
arrayImport(toDoObject1)
arrayImport(toDoObject2)

arrayImport(toDoObjecto)
arrayImport(toDoObjectTw)
arrayImport(toDoObject1)
arrayImport(toDoObject2)

cardCreator(toDoArray.toDoArray)

projectsDom(projectsArray.projectsArray)
