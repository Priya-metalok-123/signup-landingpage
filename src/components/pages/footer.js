import React from "react";
import "../stylesheet/footer.css";
import Metaloklogo from "../icons/metaloklogo.png";
import logo from "../icons/sports-white-nik.png";
//import sportslogo from "../icons/sportslogo.png";
import footerfacebook from '../icons/footer-facebook.png'
import footerinsta from '../icons/footer-insta.png'
import footertwitter from '../icons/footer-twitter.png'
import footerlinkdin from '../icons/footer-linkdin.png'
import footerdiscard from '../icons/footerdiscard.png';
import footertelegram from '../icons/footertegram.png';

export default function footer() {
  return (
    <>
      <footer className="footer-bg">
        <div className="container ">
          <div className="row footer-r">
            <div className="col-lg-4 col-12 sports-logo-column">
              <div className=" div-logo-footer">
                <img className="sports-logo" src={logo} alt="" />
                {/* <h4 className="sports-verse-heading">SPORTS VERSE</h4> */}
              </div>
              <h4 className="copy-right-text py-3"> 
                Copyright ©2021 Metalok<br></br>
                All rights reserved.
              </h4>
              <div className="footer-meta-social ">
                <img className="footer-meta-icon" src={Metaloklogo} alt="" />
               <div className="footer-social-header">
                  <div className="footer-social-icons"> 
                      <a href=" https://www.facebook.com/sportsverse.trade?mibextid=ZbWKwL" target="_blank"> 
                         <img src={footerfacebook} alt="" className="footer-social-icons-img" /> 
                      </a> 
                  </div>
                  <div className="footer-social-icons"> 
                  <a href="https://www.instagram.com/sportsverse.trade/" target="_blank">
                         <img src={footerinsta} alt=""  className="footer-social-icons-img"/> 
                      </a> 
                  </div>
                  <div className="footer-social-icons"> 
                     
                      <a href="https://twitter.com/sportsverse_" target="_blank">  
                         <img src={footertwitter} alt="" className="footer-social-icons-img" /> 
                      </a> 
                  </div>
                  <div className="footer-social-icons"> 
                      <a  target="_blank"  href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A82131455&keywords=sportsverse.trade&origin=RICH_QUERY_SUGGESTION&position=1&searchId=fdb2db8d-f2fd-47e5-bb25-f65fd7bdcd24&sid=Xkn"> 
                         <img src={footerlinkdin} alt=""  className="footer-social-icons-img"/> 
                      </a> 
                  </div>
                  
               </div>
               <div className="footer-social-header-1">
               <div className="footer-social-icons"> 
                      <a  target="_blank"  href="https://discord.com/invite/cSGxkc3KJh"> 
                         <img src={footerdiscard} alt="" className="footer-social-icons-img" /> 
                      </a> 
                  </div>
                  <div className="footer-social-icons"> 
                      <a  target="_blank"  href="https://t.me/+Gq8_Hu_wNaZlOTM1"> 
                         <img src={footertelegram} alt=""  className="footer-social-icons-img"/> 
                      </a> 
                  </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-2 col-4 mt-4 mt-lg-0 pl-3">
              <ul className="footer-links">
              <a href="/HomePage" target="_blank"> <li>Home</li></a>
              </ul>
              <ul className="footer-links py-4">
              <a href="/LearnPage1" target="_blank"> <li>Learn</li></a>
              </ul>
              <ul className="footer-links pb-4">
              <a href="/LearnPage2" target="_blank"><li>Sportsverse 101</li></a>
              </ul>

              <ul className="footer-links">
              <a href="/RoadmapPage" target="_blank"><li>Roadmap</li></a>
              </ul>
            </div>

            <div className="col-lg-3 pl-lg-5 pl-2 col-4 mt-4 mt-lg-0 ">
              <ul className="footer-links pl-lg-5 pl-4">
              <a href="/fantokensPage" target="_blank" ><li>Fantoken</li></a>
              </ul>

              <ul className="footer-links pl-lg-5 pl-4 py-4">
              <a href="/CompanyPage" target="_blank"><li>Company</li></a>
              </ul>

              <ul className="footer-links pl-lg-5 pl-4 pb-4">
              <a href="/SupportPage" target="_blank"><li>Support</li></a>
              </ul>
              <ul className="footer-links pl-lg-5 pl-4">
              <a href="https://metalok.io" target="_blank"><li>Metalok</li></a>
              </ul>
            </div>

            <div className="col-lg-3 col-4 mt-4 mt-lg-0 pl-md-5 pl-3">
              <ul className="footer-links">
                <li>Terms of use</li>
              </ul>

              <ul className="footer-links py-4">
                <li>Privacy Policy</li>
              </ul>

              <ul className="footer-links pb-4">
                <li>Contact us</li>
              </ul>
              <ul className="footer-links">
                <li >Legal Disclaimer</li>
              </ul>

              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
