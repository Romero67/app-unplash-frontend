import React, {useState} from "react";
import ShowImage from "./ShowImage";
import '../css/Card.css'

const Card = ({ articule, handlerClickDeleting, setArtToDelete }) => {
 const [visible, setVisible] = useState(false)

 const handleMouseEnter = () => {
  setVisible(true);
 }

 const handleMouseOut = () =>{
  setVisible(false);
 }

 const handleClick = () => {
  setArtToDelete(articule)
  handlerClickDeleting();
 }

  return (
    <div className="container-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
      {articule && <>
        <div className={visible ? 'description-card visible' : 'description-card'}>
          <h4 className="item">{articule.description}</h4>
          <button className="btn-item" onClick={handleClick}>Delete</button>
        </div>
        <ShowImage className='showImage' url={articule.url} />
      </> }
    </div>
  );
};

export default Card;
