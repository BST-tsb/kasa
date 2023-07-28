import "./carousel.scss";
import { useState } from "react";

export default function Carousel({slide}) {
    
    const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
    const length = slide.length; //longueur du tableau de slides
    const nbrNext = current + 1;
    const nbrPrev = current - 1 ;
  
    /**Function pour l'image precedente */
    const nextImage = () => {
      setCurrent(current === length - 1 ? 0 : nbrNext); // on repart au premier slide quand on arrive au dernier
    };
    /**Function pour l'image suivante */
    const prevImage = () => {
      setCurrent(current === 0 ? length - 1 : nbrPrev); // on repart au dernier slide quand on est au premier
    };
  
    
    return (
      <div className="cont-slide">
        {length > 1 && (
          <div className="left-Arrow" onClick={prevImage}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        )}
        {length > 1 && (
          <div className="right-Arrow" onClick={nextImage}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        )}
        {slide.map((image, index) => {
          return (
            <div key={index} className="slide">
              {index === current && (
                <img src={image} alt="appartement" className="img-slide" />
              )}
              {index === current && length > 1 && (
                <span className="span-slide">
                  {nbrNext}/{length}
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }

