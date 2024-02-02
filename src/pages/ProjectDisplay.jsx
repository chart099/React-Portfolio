import React from "react";
import { useParams } from "react-router-dom";
import {ProjectList} from "../helpers/ProjectList";


function ProjectDisplay(){
    const { id } = useParams();
    const project = ProjectList[id]
    return (
        <>
        <h1>Portfolio Projects</h1>
        <div className="project-display">
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.alt} />
            <p><b>Skills:</b> {project.skills}</p>
            <a href={project.link} target='_blank'><img id="github" src="/github.svg" alt="github logo" /></a>
        </div>
        </>
    )  
}

export default ProjectDisplay;