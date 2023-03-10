import projectsDom from './projectsDom'
import projectsArray from "./projectsArray"
import Storage from "./Storage"
import cardCreator from "./toDoCardCreator"
import toDoArray from "./objectArray"

let projectCreatorPlus = document.getElementsByClassName('projectCreator')
projectCreatorPlus[0].addEventListener('click',pForm)

//pForm is the Project Form which is used to create new Projects
function pForm() {
    if(document.querySelector('.newProject') == undefined) {
        let pList = document.getElementsByClassName('projectList')
        let newProjectForm = document.createElement('li')
        newProjectForm.classList = 'newProject'
    
        let pName = document.createElement("input");
            pName.setAttribute("type", "text");
            pName.setAttribute("name", "Project Name");
            pName.setAttribute("placeHolder", "New Project");
            pName.setAttribute("id", "pName");
    
        let confirmButton = document.createElement('i');
            confirmButton.classList.add('pConfirm','fa-solid','fa-plus');
    
        newProjectForm.appendChild(pName);
        newProjectForm.appendChild(confirmButton);
        pList[0].appendChild(newProjectForm);
        confirmButton.addEventListener('click', projectCreator);
        }
}

function projectCreator() {

    let projectInfo = document.querySelector('#pName')
    let newProject = projectInfo.value

    //If all the fields are filled then create new ToDo object, import into array and run cardCreator.
if(newProject != ""){


let properTitle = newProject.charAt(0).toUpperCase() + newProject.slice(1);

let projectArray = projectsArray.projectsArray;

let duplicateProject = projectArray.filter(function(project){
    return project.title == properTitle;

})


switch (duplicateProject.length) {

    case (duplicateProject.length = 0) :
    

    let project = new projectsArray.ProjectsConstructor("color", properTitle, "Yes");
        /* vendors contains the element we're looking for */
        projectsArray.projectsArray.push(project);
        Storage.projectStorageSetup()
        projectsDom(projectsArray.projectsArray);
        projectInfo.value = "";

    let tProjectSelector = document.querySelector("#projectSelect")
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(tProjectSelector)

    projectsArray.projectsArray.forEach(project => {

        let projectOption = document.createElement("option");
            projectOption.setAttribute("value", project.title)
            projectOption.innerHTML = project.title
    tProjectSelector.appendChild(projectOption)
    });
    
}
}
}


export default projectCreator

// I need to run through the projectsArray.projectsArray and check each value (projectsArray[0].title) and if it equals title, set a variable to True. Then an if statement.
// if variable == true, don't add new object to array 




// let toDoProject  = document.createElement('div')
// let projectText = document.createTextNode(`${project}`)
// toDoProject.appendChild(projectText)
// toDoProject.classList.add('toDoProject')
