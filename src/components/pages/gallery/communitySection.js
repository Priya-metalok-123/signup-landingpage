import React from 'react'
import GallerySection from './gallerySection';
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
const communitySection = () => {
  return (
    <>
    <section className='bg-gallery-section pt-5'>
              {/* <h1 className='gallery-heading pb-5'>Gallery</h1> */}
        <GallerySection />
            <div className='container-fluid community-div'>
                <h1>Join Our Community!</h1>
                <p className='pt-4'>Connect with us and stay updated on latest technologies and our company news.</p>
                <p> We stay in touch with the community on major social media & communication channels and are just a click away</p>
                    <div className='d-flex icons-section pt-4'>
                    <a href=" https://www.facebook.com/sportsverse.trade?mibextid=ZbWKwL" target="_blank"> 
                        <img src={face} alt="icon" />
                        </a>
                        <a href="https://www.instagram.com/sportsverse.trade/" target="_blank"> 
                        <img src={insta} alt="icon" />
                        </a>
                        <a href="https://twitter.com/sportsverse_" target="_blank"> 
                        <img src={twit} alt="icon" />
                        </a>
                        <a target="_blank"  href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A82131455&keywords=sportsverse.trade&origin=RICH_QUERY_SUGGESTION&position=1&searchId=fdb2db8d-f2fd-47e5-bb25-f65fd7bdcd24&sid=Xkn"> 
                        <img src={link} alt="icon" />
                        </a>
                        <a href="https://t.me/+Gq8_Hu_wNaZlOTM1" target="_blank" > 
                        <img src={tele} alt="icon" />
                        </a>
                        <a href="https://discord.com/invite/cSGxkc3KJh" target="_blank"> 
                        <img src={dis} alt="icon" />
                        </a>

                    </div>
                    {/* <div className='d-flex icons-section pt-4'>
                        
                        <img src={wats} alt="icon" />
                        <img src={you} alt="icon" />
                       

                    </div> */}

            </div>
           
       
    </section>
    
    
    
    </>
  )
}

export default communitySection