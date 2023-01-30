import './style.css';
import addButton from './toDoCreatorDom'
import cardCreator from './CardCreator'
import toDoArray from './objectArray'
import arrayImport from './arrayImport'
// import Icon from './icon.png';

addButton

cardCreator(toDoArray)
let newObjectTest = { 
    firstInstance: 'test3',
    secondInstant: 'test4',
    thirdInstant: 'test5'

}
arrayImport(newObjectTest)
cardCreator(toDoArray)