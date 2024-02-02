import React from "react";
import {ProjectList} from "../helpers/ProjectList";
import PortfolioItem from "../components/PortfolioItem";

export default function PortfolioPage() {
    return (
        <>
            <h2>Portfolio Projects</h2>
            <div id="project-container">
                {ProjectList.map((project, idx) => {
                    return (
                        <>
                        <PortfolioItem  id={idx} name={project.name} image={project.image}/>
                        </>
                    )
                })}
            </div>
        </>
    );
}