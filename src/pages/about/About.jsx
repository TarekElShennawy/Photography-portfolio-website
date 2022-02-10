import "./about.scss";
import Navbar from "../../components/navbar/Navbar";
import { TiSocialInstagram } from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';

function About() {

  return (
    <div className="aboutContainer">
    <Navbar />
    <div className="titleContainer">
      <h1 className="title">About</h1>
    </div>
    <div className="contentContainer">
          <div className="leftContainer"><h3>Statement</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel diam lectus. Duis imperdiet velit quis sapien finibus, ut gravida sapien tincidunt. Donec id dignissim enim. Aenean in nunc quis nisi imperdiet fringilla nec ut est. Vestibulum maximus lectus vel nibh tincidunt, eu mattis quam mollis. Vestibulum lectus arcu, volutpat eget facilisis hendrerit, efficitur ut est. Integer sed quam sed justo accumsan vulputate. Pellentesque mauris erat, fermentum in porttitor vitae, imperdiet ac lacus. Donec nec auctor ligula.</p>
          </div>  
          <div className="rightContainer"><h3>Contact</h3>
          <ul>
            <li><AiOutlinePhone />: 07484130693</li>
            <li><HiOutlineMail />: xrosie.dunnx@gmail.com</li>
            <li><TiSocialInstagram />: @roisindunnphotography</li>
          </ul>
          </div>
      </div>
    </div>
  );
}

export default About;