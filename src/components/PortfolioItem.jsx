import React from "react";
import { useNavigate } from "react-router-dom";

function PortfolioItem({image, name, id}){
    const navigate = useNavigate()
    return (
    <div  onClick={()=> {navigate("/project/" + id );} } >
        <div className="project-background"></div>
        <h1 >{name}</h1>
        </div>
    )
}

export default PortfolioItem;