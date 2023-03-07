import './style.css';
import cardCreator from './toDoCardCreator'
import toDoArray from './objectArray.js'
import projectsArray from './projectsArray'
import projectsDom from './projectsDom'
import projectCreator from './projectCreator'

//Start all of the important functions. Card Creator which sets up the current cards and 
//ProjectsDom which sets up the current list of projects 
cardCreator(toDoArray.toDoArray)
projectsDom(projectsArray.projectsArray)
