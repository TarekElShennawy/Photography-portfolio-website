import "./identities.scss";
import Navbar from "../../../../components/navbar/Navbar";
import {
  Link
} from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';

function Identities() {

  return (
    <div className="galleryContainer">
    <Navbar />
    <div className="titleContainer">
      <span><Link to="/work" style={{ textDecoration: 'none', color: 'black' }}><AiOutlineArrowLeft size={42} /></Link></span>
      <h1 className="title">Identities</h1>
    </div>
    <div className="imageContainer">
      Identities
    </div>
    </div>
  );
}

export default Identities;