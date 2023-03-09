import React from 'react'
import "../../stylesheet/gallerystylesheet/community.css";
import ga from '../../background-images/gal-1.png';

import gal from '../../background-images/gal-2.png';
import gall from '../../background-images/gal-3.png';
import face from '../../icons/facebook-icon.png';
import insta from '../../icons/insta-icon.png';
import twit from '../../icons/twitter-icon.png';
import link from '../../icons/linkdn-icon.png';
import dis from '../../icons/disc-icon.png';
import tele from '../../icons/telegram-icon.png'
import wats from '../../icons/watsaap-icon.png'
import you from '../../icons/youtube-icon.png'

import gallery1 from '../../icons/our-gallery/1.png'
import gallery2 from '../../icons/our-gallery/2.png'
import gallery3 from '../../icons/our-gallery/3.png'
import gallery4 from '../../icons/our-gallery/4.png'
import gallery5 from '../../icons/our-gallery/5.png'
import gallery6 from '../../icons/our-gallery/61.png'
import gallery7 from '../../icons/our-gallery/7.png'


import gallery8 from '../../icons/our-gallery/8.png'
import gallery9 from '../../icons/our-gallery/9.png'
import gallery10 from '../../icons/our-gallery/10.png'
import gallery11 from '../../icons/our-gallery/11.png'
// import gallery12 from '../../icons/our-gallery/12.png'
import gallery13 from '../../icons/our-gallery/13.png'
import gallery14 from '../../icons/our-gallery/14.png'
import gallery15 from '../../icons/our-gallery/15.jpeg'
// import gallery16 from '../../icons/our-gallery/16.png'




import Slider from "react-slick";

const GallerySection = () => {



  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode:'true',
    pauseOnHover: false,
    responsive: [


      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
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

    ]

  }





  const gallery2 = {
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode:'true',
    rtl:true,
    pauseOnHover: false,
    responsive: [


      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
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

    ]

  }
  return (
    <>
      <section className='bg-gallery-section'>
        <h1 className='gallery-heading'>Our Journey</h1>

        <Slider {...settings} className="gallery-section">

          <div className='gallery-child'>
            <img src={gallery1} alt="" />
            {/* <h6 style={{ color: 'white', textAlign: 'center' }}>Lorem, ipsum.</h6> */}
          </div>
          <div className='gallery-child'>
            <img src={gallery3} alt="" />
            {/* <h6 style={{ color: 'white', textAlign: 'center' }}>Lorem, ipsum.</h6> */}
          </div>
          <div className='gallery-child'>
            <img src={gallery4} alt="" />
            {/* <h6 style={{ color: 'white', textAlign: 'center' }}>Lorem, ipsum.</h6> */}
          </div>
          <div className='gallery-child'>
            <img src={gallery5} alt="" />
            {/* <h6 style={{ color: 'white', textAlign: 'center' }}>Lorem, ipsum.</h6> */}
          </div>
          <div className='gallery-child'>
            <img src={gallery6} alt="" />
            {/* <h6 style={{ color: 'white', textAlign: 'center' }}>Lorem, ipsum.</h6> */}
          </div>

          <div className='gallery-child'>
            <img src={gallery7} alt="" />
            {/* <h6 style={{ color: 'white', textAlign: 'center' }}>Lorem, ipsum.</h6> */}
          </div>

        </Slider>


        <Slider {...gallery2} className="gallery-section">

          <div className='gallery-child'>
            <img src={gallery8} alt="" />
            {/* <h6 style={{ color: 'white', textAlign: 'center' }}>Lorem, ipsum.</h6> */}
          </div>
          <div className='gallery-child'>
            <img src={gallery9} alt="" />
            {/* <h6 style={{ color: 'white', textAlign: 'center' }}>Lorem, ipsum.</h6> */}
          </div>
          <div className='gallery-child'>
            <img src={gallery10} alt="" />
            {/* <h6 style={{ color: 'white', textAlign: 'center' }}>Lorem, ipsum.</h6> */}
          </div>
          <div className='gallery-child'>
            <img src={gallery11} alt="" />
            {/* <h6 style={{ color: 'white', textAlign: 'center' }}>Lorem, ipsum.</h6> */}
          </div>
          <div className='gallery-child'>
            <img src={gallery14} alt="" />
            {/* <h6 style={{ color: 'white', textAlign: 'center' }}>Lorem, ipsum.</h6> */}
          </div>

          <div className='gallery-child'>
            <img src={gallery15} alt="" />
            {/* <h6 style={{ color: 'white', textAlign: 'center' }}>Lorem, ipsum.</h6> */}
          </div>

        </Slider>

        {/* <div className='container-fluid d-flex'>
          <img src={ga} alt="image" />
          <img src={gal} alt="image" />
          <img src={gall} alt="image" />
          <img src={ga} alt="image" />
          <img src={gal} alt="image" />
          <img src={gall} alt="image" />
        </div>


        <div className='container-fluid d-flex pt-5 pb-5'>
          <img src={ga} alt="image" />
          <img src={gal} alt="image" />
          <img src={gall} alt="image" />
          <img src={ga} alt="image" />
          <img src={gal} alt="image" />
          <img src={gall} alt="image" />
        </div> */}





        {/* <div className='container-fluid community-div'>
          <h1>Join Our Community!</h1>
          <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
          <p>tempor incididunt ut labore et dolore magna aliqua.laboris</p>
          <div className='d-flex icons-section pt-4'>
            <img src={face} alt="icon" />
            <img src={insta} alt="icon" />
            <img src={twit} alt="icon" />
            <img src={link} alt="icon" />
            <img src={tele} alt="icon" />
            <img src={dis} alt="icon" />

          </div>
          <div className='d-flex icons-section pt-4'>

            <img src={wats} alt="icon" />
            <img src={you} alt="icon" />


          </div>

        </div> */}


      </section>



    </>
  )
}

export default GallerySection