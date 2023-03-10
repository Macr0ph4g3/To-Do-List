function ProjectsConstructor(c,t,d) {
    this.color = c
    this.title = t
    this.deletable = d
}

const projectsArray = []



const selectedProject = "Unassigned"

export default {projectsArray, ProjectsConstructor, selectedProject}