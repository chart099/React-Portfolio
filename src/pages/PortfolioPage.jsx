import React from "react";
import {ProjectList} from "../helpers/ProjectList";
import PortfolioItem from "../components/PortfolioItem";

export default function PortfolioPage() {
    return (
        <>
            <h2>Portfolio Projects</h2>
            <ul id="project-container" >
                {ProjectList.map((project, idx) => {
                    return (
                        <li>
                        <PortfolioItem className="project-list-item" id={idx} name={project.name} image={project.image}/>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}