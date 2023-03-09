import React from "react";
import Partner from "./Partner";
import "../stylesheet/fantokensPage.css";
import "../stylesheet/company.css";
import "../stylesheet/contactus.css";
import MediaPartner from './mediaPartner';
import ContactSection from "./contactSection";
import Header from "./header";


import Drivenby from "./company/Drivenby";

import Footer from "./footer";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import android from "../icons/android.png";
import metalok from "../background-images/metalok.png";
import mohit from "../background-images/mohit-goel.png";
import anchal from "../background-images/anchal-goel.png";
import smitha from "../background-images/smitha-pm.png";
import mask from "../background-images/Mask-Group.png";
import teamback from "../background-images/team-background.png";
import iphone1 from '../background-images/background-mobile.png'


import cfo from '../background-images/cfo-image2.png'




import compony_sportsverse_logo from "../icons/compony-sportsverse-logo.jpg";



const CompanyPage = () => {
  const images = [
    { img1: mohit, names: "Mohit Goel", position: "CEO" },
    { img1: anchal, names: "Anchal Goel", position: "Co-founder" },
    { img1: smitha, names: "Smitha PM", position: "Co-founder" },


    { img1: cfo, names: "Ishaan Gupta", position: "CTO" },


    { img1: mohit, names: "Mohit Goel", position: "CEO" },
    { img1: anchal, names: "Anchal Goel", position: "Co-founder" },
    { img1: smitha, names: "Smitha PM", position: "Co-founder" },

    { img1: cfo, names: "Ishaan Gupta ", position: "CTO" },

    // { img1: mask, names: "CTO", position: "" },


  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    // infinite: true,
    // dots: false,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // lazyLoad: true,
    // autoplay: true,
    // autoplaySpeed: 3000,

    dots: true,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  // parallax

  const [count, setCount] = useState(false);
  const [count2, setCount2] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      //  console.log('window.scrollY', window.scrollY);
      if (window.scrollY > 400) {
        setCount(true);
      }
      if (window.scrollY < 4300) {
        setCount(false);
      }

      
    };

    window.addEventListener("scroll", handleScroll);

    //    return () => {
    //      window.removeEventListener('scroll', handleScroll);
    //    };
  }, []);



  const [downpop, setDownpop] = useState(false)


  const downpopfun = () => {
    setDownpop(true)
  }

  const downpopfunclose = () => {
    setDownpop(false)

  }


  return (
    <>
      <div>
      <div className={downpop ? 'd-block' : 'd-none'}>
        <div className="download-popup">
          <div className="download-popup-child">
            <div className="download-pop" onClick={downpopfunclose}>X</div>
            <h1>Mobile App Coming Soon. Sign up  and Join our Community to get Whitelisted.</h1>
          </div>
        </div>
      </div>

        <div className="page-head">
          <Header />
        </div>

        <section className={count ? "tred" : "fblack"}>
          <div className="container our-vision">
            <div className="row pb-5">
              <div className="col-md-8 pl-3 pl-lg-5">
                <div className="our-v">
                  <h1>Our Vision</h1>
                  <p>
                  To cater to the transforming digital world, we envision creating immersive experiences and enabling users to own and participate along with their favourite teams and in their favourite sports. Establishing Sportsverse as a number 1 decentralised exchange platform for sports with multi-utility features of digital collectibles, sports merchandise, metaverse and more.

                  </p>
                </div>
                <div className="learn-button d-block">
                  <button className="sport-btn" onClick={downpopfun}>
                    <h3>download app</h3>
                    {/* <img className="img1" src={apple} /> */}
                    <img className="img2" src={android} />
                  </button>
                </div>
              </div>
              <div className="col-md-4"></div>
              {/* <p className="learn-the-sprt-line "></p> */}
              <p className="company-line-down"></p>
            </div>
          
           
          </div>
        </section>

        <div className={count2 ? "tred2" : "fblack2"}>
        <section className="">
            <div className="container">
              <div className="row metalok">
                <div className="col-md-4 m-auto metalok-i">
                  <img src={compony_sportsverse_logo} alt="logo" />
                </div>
                <div className="col-md-1 d-flex justify-content-end align-items-center">
                  <div className="sports-lines"></div>
                </div>
                <div className="col-md-6 mx-auto text-start pt-4">
                  <h3 className="sports-log-heading">Sportsverse</h3>
                  <div className="metalok-p ">
                    <p>
                   




                    Sportsverse is India's First and Largest Sports Trading platform. The first of its kind, Sportsverse creates an avenue for Sport Enthusiasts to monetise their knowledge. The launch of Sportsverse's second stint at the IPL marks the beginning of the Next Sporting Revolution. Fans across the world can now be a part of their favourite team's journey by buying fan tokens listed on Sportsverse, while minting profits as a result of  executing of Smart Trades. In a nutshell, Sportsverse's offering is an amalgamation of Sports and Traditional Stock Trading.

                 </p>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <Drivenby/>


          {/* company phone section */}

          <div className="our-team-section pt-5">
          <h1 className="our-team-head">Our Team</h1>
            <img className="team-back" src={teamback} alt="" />
            <Slider {...settings} className="globe-car">
              {images.map((img, index) => (
                <div
                  className={
                    index === slideIndex ? "slide slide-active" : "slide"
                  }
                  key={index}
                >
                  <div className="slide-section">
                    <img src={img.img1} alt="" className="m-auto" />
                    <h4 className="names text-center">{img.names}</h4>
                    <h6 className="position text-center">{img.position}</h6>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/*---- carousel end here------- */}
        {/*--- contact us section start here---- */}
        <ContactSection />
        <Partner />
        <MediaPartner />
        {/*--- contact us section end here---- */}
        <section className="work">
          <div className="container">
            <div className="row">
              <div className="col-md-7 want">
                <div className="want-to">
                  <h1>Want to work with us?</h1>
                  <p className="want-to-work-with-text">
                  A call-out to all those tech enthusiasts, early adopters and contemporaries. Stay in sync with the advancements in technology and transformation to the Digital world of today by working with us.
                  </p>
                  <button>
                    <h2 className="c-btn"> <a href="/careerPage">Career</a></h2>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
                    <div className="container start-engine d-flex">
                        <div className="row">
                            <div className="col-md-7 d-flex align-items-center justify-content-center">
                                <div className="start-eng py-4 mt-md-0 mt-5  pr-2">
                                    <h1 className="mt-md-0 mt-5">Start Earning today</h1>
                                    <p>Engage with the Sportsverse platform and enjoy the benefits of pioneering into exclusive Digital experience and the Metaverse.</p>
                                    <button className="start-engine-btn" onClick={downpopfun}>
                                        <h2 className="btn-h">Download App</h2>
                                        {/* <img src={apple} alt="apple" className="img1" /> */}
                                        <img src={android} alt="apple" className="img2" />
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-5 start-eng-1 d-flex align-items-center justify-content-center">
                                <img src={iphone1} className="" />
                            </div>
                        </div>
                    </div>
                </section>

        <br></br>
        <br></br>
        <Footer />
      </div>
    </>
  );
};

export default CompanyPage;
