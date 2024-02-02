import React from "react";
import { useNavigate } from "react-router-dom";

function PortfolioItem({name, id}){
    const navigate = useNavigate()
    return (
    <div className="portfolio-items" onClick={()=> {navigate("/project/" + id );} } >
        <div className="project-background"></div>
        <h1 >{name}</h1>
        </div>
    )
}

export default PortfolioItem;