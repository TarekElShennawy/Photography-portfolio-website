import "./gallery.scss";
import Navbar from "../../components/navbar/Navbar";

import {
  Link
} from "react-router-dom";

const galleries = [
{
  title: 'Fashioning Identities',
  desc: 'Desc 1',
  img: require('../../assets/gallery_pictures/I1.jpg'),
  page: "/work/identities"
},
{
  title: 'The Liminal Body',
  desc: 'Desc 2',
  img: require('../../assets/gallery_pictures/I2.jpg'),
  page: "/work/liminal"
},
{
  title: 'Materiality & Manipulation',
  desc: 'Desc 3',
  img: require('../../assets/gallery_pictures/I2.jpg'),
  page: "/work/identities"
},
]


function Gallery() {

  return (
    <div className="galleryContainer">
    <Navbar />
    <div className="titleContainer">
      <h1 className="title">Gallery</h1>
    </div>
    <div className="imageContainer">
      {galleries.map((item) => (
        <div className="item">
          <Link to={item.page} style={{ textDecoration: 'none', color: 'black' }}>
         <img src={item.img} alt="My Work"></img>
         <h1>{item.title}</h1>
         </Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Gallery;