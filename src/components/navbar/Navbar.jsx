import "./navbar.scss";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Link
} from "react-router-dom";

function Navbar() {

  const [navBg, setNavBg] = useState("navbarContainer");
  const location = useLocation();
  useEffect(() => {
    if (window.location.pathname === "/") {
      setNavBg("navbarContainer");
      console.log(navBg);
    } else {
      setNavBg("navbarContainer2");
      console.log(navBg);
    }
  }, [location, navBg]);

  return (

    <div className={ navBg }>
      
            <div className="leftContainer">
            <nav>
              <ul>   
                <li><Link to="/" className="link">HOME</Link></li>
                <li><Link to="/work" className="link">WORK</Link></li>
                <li><Link to="/projects" className="link">PROJECTS</Link></li>
                <li><Link to="/about" className="link">ABOUT</Link></li>
              </ul>
              </nav>

              <div className="logo">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <h1>Roisin Dunn</h1>
              </Link>
              </div>
            </div>

    </div>
  );
}

export default Navbar;
