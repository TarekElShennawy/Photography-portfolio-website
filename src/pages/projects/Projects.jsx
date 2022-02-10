import "./projects.scss";
import { useEffect } from 'react';
import Navbar from "../../components/navbar/Navbar";


function Projects() {

  return (
    <div className="galleryContainer">
    <Navbar />
    <div className="titleContainer">
      <h1 className="title">Projects</h1>
      <div className="imageContainer">
        Work In Progress.
      </div>
    </div>
    </div>
  );
}

export default Projects;