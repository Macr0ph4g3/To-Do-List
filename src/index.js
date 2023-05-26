import './style.css';
import cardCreator from './toDoCardCreator'
import toDoArray from './objectArray.js'
import projectsArray from './projectsArray'
import projectsDom from './projectsDom'
import projectCreator from './projectCreator'
import Storage from './Storage';

// Start all of the important functions. Card Creator which sets up the current cards and 
// ProjectsDom which sets up the current list of projects 

Storage.projectStorageLoad()
Storage.toDoStorageLoad()
cardCreator(toDoArray.toDoArray)
projectsDom(projectsArray.projectsArray)
