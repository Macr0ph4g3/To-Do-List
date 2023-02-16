import './style.css';
import addButton from '././objectCreatorImporter.js'
import cardCreator from './CardCreator'
import toDoArray from './objectArray.js'
import projectsArray from './projectsArray'
import projectsDom from './projectsDom'

//Start all of the important functions. Card Creator which sets up the current cards and 
//ProjectsDom which sets up the current list of projects 
cardCreator(toDoArray.toDoArray)
projectsDom(projectsArray.projectsArray)
