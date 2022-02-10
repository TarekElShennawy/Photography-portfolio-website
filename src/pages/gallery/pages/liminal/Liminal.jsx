import "./liminal.scss";
import Navbar from "../../../../components/navbar/Navbar";
import {
  Link
} from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';

function Liminal() {

  return (
    <div className="galleryContainer">
    <Navbar />
    <div className="titleContainer">
      <span><Link to="/work" style={{ textDecoration: 'none', color: 'black' }}><AiOutlineArrowLeft size={42} /></Link></span>
      <h1 className="title">Liminal</h1>
    </div>
    <div className="imageContainer">
      Liminal
    </div>
    </div>
  );
}

export default Liminal;