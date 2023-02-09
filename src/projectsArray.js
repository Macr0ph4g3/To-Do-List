function ProjectsConstructor(c,t,d) {
    this.color = c
    this.title = t
    this.deletable = d
}

const projectsArray = []

const unAssigned = new ProjectsConstructor('purple','Unassigned','No')
const complete = new ProjectsConstructor('blue','Complete','yes')

const selectedProject = "Unassigned"


projectsArray.push(unAssigned)
projectsArray.push(complete)
export default {projectsArray, ProjectsConstructor, selectedProject}