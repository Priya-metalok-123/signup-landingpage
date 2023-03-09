import React from 'react';
import "../stylesheet/mediapartner.css";

import apple from '../icons/apple.png';
import ani from '../media-partner/ani.png';
import dailyhunt from '../media-partner/dailyhunt.png';
import latestly from '../media-partner/latest-ly.png';
import outlook from '../media-partner/outlook.png';
import republic from '../media-partner/republic.png';
import theprint from '../media-partner/the-print.png';
import zeefive from '../media-partner/zee-five.png';
import zeenews from '../media-partner/zee-news.png';  
import zeemedia from '../media-partner/zeemedia-logo-1.png';  


export const mediaPartner = () => {
  return (
    <div>  
        <section className='media-partner'>

            <div className='container'>
                <h1 className='media-head'>In The Press</h1>
                <div className='row media m-auto '>
                    <div className='col-md-1'></div>
                    <div className='col-md-2 col-4'>
                        <img src={zeenews} className="image-w zee-news"/>
                    </div>
                    <div className='col-md-2 col-4'>
                        <a target="_blank"  href="https://www.aninews.in/news/business/cricket-bowls-over-the-metaverse-
                        in-a-first-of-its-kind-gamified-world-sportsverse20220524150955/"><img src={ani} className="image-w ani-img"/></a>
                    </div>
                    <div className='col-md-2 col-4'>
                       <a target="_blank" href="https://theprint.in/ani-press-releases/cricket-bowls-over-the-metaverse-in-a-first-of-
                       its-kind-gamified-world-sportsverse/968958/"> <img src={theprint} className="image-w the-print-img"/></a>
                    </div>
                    <div className='col-md-2 col-4'>
                        <img src={outlook} className="image-w outlook"/>
                    </div>
                    <div className='col-md-2 col-4'>
                        <img src={republic} className="image-w re-img"/>
                    </div>
                    {/* <div className='col-md-1 col-0'></div> */}
                {/* </div>
                <div className='row media-2'> */}
                    {/* <div className='col-md-3 col-0'></div> */}
                     <div className='col-md-3 col-4 text-right zee-five'>
                        <a  target="_blank" href="https://www.zee5.com/articles/cricket-bowls-over-the-metavers
                        e-in-a-first-of-its-kind-gamified-world-sportsverse"><img src={zeefive} className="image-w zee-img"/></a>
                     </div>
                     <div className='col-md-3 col-6 m-auto'>
                       <a target="_blank"  href="" ><img src={latestly} className="image-w pt-5"/></a>
                     </div>
                     <div className='col-md-3 col-6 text-left'>
                        <a target="_blank"  href="https://m.dailyhunt.in/news/india/english/daily+prabhat-epaper-dlyprbte/cricket+bowls+over+the+metaverse+in+a+fir
                        st+of+its+kind+gamified+world+sportsverse-newsid-n389239346?s=a&uu=0x57cac98f5b2e7e54&ss=wsp "><img src={dailyhunt} className="image-w dailyhunt pt-5"/></a>
                     </div>
                     <div className='col-md-3 col-6 m-auto'>
                       <a target="_blank"  href="" ><img src={zeemedia} className=" pt-5"/></a>
                     </div>
                    {/* <div className='col-md-3 '></div> */}
                </div>
            </div>
        </section>
    </div>
  )
}

export default mediaPartner; 

