function ProjectsConstructor(c,t,d) {
    this.color = c
    this.title = t
    this.deletable = d
}

const projectsArray = []

const unAssigned = new ProjectsConstructor('purple','Unassigned','No')
const assigned = new ProjectsConstructor('blue','Assigned','yes')

const selectedProject = "Unassigned"


projectsArray.push(unAssigned)
projectsArray.push(assigned)
export default {projectsArray, ProjectsConstructor, selectedProject}