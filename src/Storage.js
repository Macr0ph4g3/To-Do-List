import projectsArray from "./projectsArray"
import toDoArray from "./objectArray"


//Storing Current Project into Local Storage
function projectStorageSetup(){
    localStorage.setItem("projects", JSON.stringify(projectsArray.projectsArray))

}

function projectStorageLoad(){
    let oldProjects = localStorage.projects
    if (oldProjects === undefined ) {
        const unAssigned = new projectsArray.ProjectsConstructor('purple','Unassigned','No')
        const complete = new projectsArray.ProjectsConstructor('blue','Complete','yes')
            projectsArray.projectsArray.push(unAssigned)
            projectsArray.projectsArray.push(complete)
        localStorage.setItem("projects", JSON.stringify(projectsArray.projectsArray))
    } else {
        let savedProjects = JSON.parse(localStorage.projects)
        savedProjects.forEach(project => {
        projectsArray.projectsArray.push(project)  
        });
    }
    
}

function toDoStorageSetup(){
    localStorage.setItem("toDo", JSON.stringify(toDoArray.toDoArray))

}

function toDoStorageLoad(){
    let oldToDo = localStorage.toDo
    if (oldToDo === undefined ) {
        const toDoObjectOne = new toDoArray.ToDoConstructor('Finish Odin Project','I want to be a web developer','Jan, 1, 2024', 'High', 'Unassigned')
        toDoArray.toDoArray.unshift(toDoObjectOne)
            localStorage.setItem("toDo", JSON.stringify(toDoArray.toDoArray))
    } else {
        let savedToDo = JSON.parse(localStorage.toDo)
        savedToDo.forEach(toDO => {
            toDoArray.toDoArray.push(toDO)  
        });
    }
    
}




export default {projectStorageSetup, projectStorageLoad, toDoStorageSetup, toDoStorageLoad}
