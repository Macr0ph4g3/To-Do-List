import projectsDom from './projectsDom'
import projectsArray from "./projectsArray"
import { forEach } from 'lodash'


function projectCreator() {
    
    let projectInfo = document.querySelectorAll('input')
    console.log(projectInfo)
    let title = projectInfo[0].value
    //If all the fields are filled then create new ToDo object, import into array and run cardCreator.
if(title != ""){




    projectsArray.projectsArray.forEach(element => {
            let arrayList = element.title
            console.log(arrayList)
            console.log(title)
        if (title.trim().toLowerCase == arrayList.trim().toLowerCase() ){
            console.log(title, projectsArray.projectsArray)
            return
        }

});    



let project = new projectsArray.ProjectsConstructor("color", title, "Yes")

    projectsArray.projectsArray.push(project)
    projectsDom(projectsArray.projectsArray)
    
    projectInfo[0].value = ""
    
    let pForm = document.querySelectorAll('.projectForm')
    pForm[0].remove()
    }

}

export default projectCreator