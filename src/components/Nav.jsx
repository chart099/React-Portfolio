import { Link, useLocation } from "react-router-dom";

import './UI/Navbar.css';
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Nav(){
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return ( 
   
      <nav  className="navbar" id={expandNavbar ? "open" : "close"} >
            <div className='toggleButton'>
              <button 
                onClick={()=> {setExpandNavbar((prev=> !prev))}}>
              <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <div className='links'>
            <Link key={1}  to="/">About</Link>
            <Link key={2}  to="/Contact">Contact</Link>
            <Link key={3}  to="/Portfolio">Portfolio</Link>
            <Link key={4}  to="/Experience">Experience</Link>
            <Link key={5}  to="/Resume">Skills</Link>
            </div>
      </nav>
  );
}


  export default Nav;

