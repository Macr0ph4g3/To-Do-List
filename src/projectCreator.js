import projectsDom from './projectsDom'
import projectsArray from "./projectsArray"
import { forEach } from 'lodash'


function projectCreator() {

    let projectInfo = document.querySelector('#pName')
    console.log(projectInfo.value)
    let newTitle = projectInfo.value

    //If all the fields are filled then create new ToDo object, import into array and run cardCreator.
if(newTitle != ""){

let properTitle = newTitle.charAt(0).toUpperCase() + newTitle.slice(1);

let projectArray = projectsArray.projectsArray;

let duplicateProject = projectArray.filter(function(project){
    return project.title == properTitle;

})


console.log(duplicateProject)
switch (duplicateProject.length) {

    case (duplicateProject.length = 0) :
    
    console.log(properTitle)

    let project = new projectsArray.ProjectsConstructor("color", properTitle, "Yes");
        /* vendors contains the element we're looking for */
        projectsArray.projectsArray.push(project);
        projectsDom(projectsArray.projectsArray);
        projectInfo.value = "";
        let pForm = document.querySelectorAll('.projectForm');
        pForm[0].remove();

    
}
}
}


export default projectCreator

// I need to run through the projectsArray.projectsArray and check each value (projectsArray[0].title) and if it equals title, set a variable to True. Then an if statement.
// if variable == true, don't add new object to array 