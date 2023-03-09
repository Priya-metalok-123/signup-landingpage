import {React,useRef} from "react";
import "../../stylesheet/carrierStylesheet/careercomponent.css";
//import mam from '../../background-images/anchal-goel.png';
 import sir from '../../background-images/mohit-sir-review.png';
 import avi from '../../background-images/avi-review.png';
 import him from '../../background-images/him-review.png';
 import vasu from '../../background-images/vasu-review.png';

const CareerComponent4 = () => {
  let imageContainerRef = useRef(null)
  let counter=0;
  const images =[sir,vasu,him,avi] //these could be coming from a db
  const prev = () => imageContainerRef.current.scrollLeft -=250
  const next = () => imageContainerRef.current.scrollLeft +=250
 
  return (
    <>
      <section className="what-they-are-saying-section">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 what-are-they-left-section">
              <h1 className="what-are-they-career-head"> What Are They </h1>
              <h1 className="what-are-they-career-head"> Saying?</h1>
              <p className="what-are-they-career-text">
              Our company has made great friends and colleagues in the course of fulfilling its vision. Here are a few anecdotes
               from associates discussing their experience with us.
              </p>
            </div>
            <div className="col-md-6">
            {/* <div className="page-container"> */}
          <div className="content-page">
            <div className="prev" onClick={prev}></div>
            <div className="slide-panel" ref={imageContainerRef}>
              {images.map(image => {return (<img src={image}  className="img-slide-pan"/> )})}
              </div> 
             <div className="next" onClick={next}></div>
          </div>
        {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <div className="container ">
        <div className="page-container">
          <div className="content-page">
            <div className="prev" onClick={prev}></div>
            <div className="slide-panel" ref={imageContainerRef}>
              {images.map(image => {return (<img src={image}  className="img-slide-pan"/> )})}
              </div> 
             <div className="next" onClick={next}></div>
          </div>
        </div>

      </div> */}

      
    </>
  );
};

export default CareerComponent4;
