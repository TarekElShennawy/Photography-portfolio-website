import "./splashscreen.scss";
import Navbar from "../../components/navbar/Navbar";

import { Link } from "react-router-dom";

function Splashscreen() {
  return (
    <div className="container">
    <Navbar />
    <div className="titleContainer">
      <h1 className="title">ROISIN DUNN</h1>
    </div>

    <ul className="mobileMenu">   
                <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>HOME</Link></li>
                <li><Link to="/work" style={{ textDecoration: 'none', color: 'white' }}>WORK</Link></li>
                <li><Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>PROJECTS</Link></li>
                <li><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>ABOUT</Link></li>
              </ul>
    </div>
  );
}

export default Splashscreen;
