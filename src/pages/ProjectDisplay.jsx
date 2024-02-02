import React from "react";
import { useParams } from "react-router-dom";
import {ProjectList} from "../helpers/ProjectList";

// import {faGithub} from '@fortawesome/fontawesome-svg-icons'


function ProjectDisplay(){
    const { id } = useParams();
    const project = ProjectList[id]
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.alt} />
            <p>Skills: {project.skills}</p>
        </div>
    )  
}

export default ProjectDisplay;