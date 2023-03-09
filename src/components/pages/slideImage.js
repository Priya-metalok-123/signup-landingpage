import React from "react";
import "../stylesheet/slideImage.css";
import mohit from'../background-images/mohit.png';
import aanchal from '../background-images/aanchal.png';
import smitha from '../background-images/smitha.png';


function slideImage() {
  return (
    <>
      <div className="slide-container">
        <span className="slider-span" id ="slider-span1"></span>
        <span className="slider-span" id ="slider-span2"></span>
        <span className="slider-span" id ="slider-span3"></span>
        <span className="slider-span" id ="slider-span4"></span>
        <span className="slider-span" id ="slider-span5"></span>
        <span className="slider-span" id ="slider-span6"></span>
        <span className="slider-span" id ="slider-span7"></span>
        <div className="image-slider">
            <div className="slide-div" id="slide1">
                <img src={mohit} alt="img" class="slide-img" id="slider-img" />
                <a href="#slider-span1" class="button" id="button-1"></a>
            </div>
            <div className="slide-div" id="slide2">
            <img src={aanchal} alt="img" class="slide-img" id="slider-img1" />
                <a href="#slider-span1" class="button" id="button-2"></a>
            </div>
            <div className="slide-div" id="slide3">
            <img src={smitha} alt="img" class="slide-img" id="slider-img2" />
                <a href="#slider-span1" class="button" id="button-3"></a>
            </div>
            <div className="slide-div" id="slide4">
            <img src={mohit} alt="img" class="slide-img" id="slider-img3" />
                <a href="#slider-span1" class="button" id="button-4"></a>
            </div>
            <div className="slide-div" id="slide5">
            <img src={aanchal} alt="img" class="slide-img" id="slider-img4" />
                <a href="#slider-span1" class="button" id="button-5"></a>
            </div>
            <div className="slide-div" id="slide6">
            <img src={smitha} alt="img" class="slide-img" id="slider-img5" />
                <a href="#slider-span1" class="button" id="button-6"></a>
            </div>
            <div className="slide-div" id="slide7">
            <img src={mohit} alt="img" class="slide-img" id="slider-img6" />
                <a href="#slider-span1" class="button" id="button-7"></a>
            </div>

        </div>

      </div>
    </>
  );
}

export default slideImage;
