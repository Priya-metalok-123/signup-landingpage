import React from "react";
import { useState, useEffect } from "react";
// import '../stylesheet/scroll.css';
import Header from "./header";
import Contactus from './contactSection'
import Partner from "./Partner";
import Footer from "./footer";
import MediaPartner from "./mediaPartner";
import "../stylesheet/roadmap.css";
import "../stylesheet/support.css";
import '../stylesheet/contactus.css'
// import '../stylesheet/home.css'
import searchlogo from "../background-images/search-logo.png";
import phoneimg from "../background-images/phoneimg.png";
import chatimg from "../background-images/chatimg.png";
import emailimg from "../background-images/emailimg.png";
import ticketimg from "../background-images/ticketimg.png";
import prevticketimg from "../background-images/prevticketimg.png";
import writeusimg from "../background-images/writeusimg.png";
import starimg from "../background-images/starimg.png";
import twitterimg from "../background-images/twitterimg.png";
import apple from '../icons/apple.png';
import android from '../icons/android.png';
import iphone1 from '../background-images/background-mobile.png'; 
import facebooklogo from '../icons/facebook-logo.png';
import twitterlogo from '../icons/twitter-logo.png';
import instalogo from '../icons/insta-logo.png';
import linkdinlogo from '../icons/linkdin-logo.png';
import discardlogo from '../icons/discardlogo.png';
import telegramlogo from '../icons/telegramlogo.png';
// import appstore from "../background-images/appstore.png";
// import googleplay from "../background-images/googleplay.png";
// import '../stylesheet/style.css';
// import screen1 from "../background-images/screen1.png";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

const SupportPage = () => {
  
  const [request, setRequest] = useState(false);

  const requestPopup = () => {
    setRequest(true);
  };
  const requestClose = () => {
    setRequest(false);
  };

 

  console.log(window.innerHeight)
  // window.addEventListener(window.scrollY)


  const [downpop, setDownpop] = useState(false)


  const downpopfun = () => {
    setDownpop(true)
  }

  const downpopfunclose = () => {
    setDownpop(false)

  }


  return (
    <>





<div className={downpop ? 'd-block' : 'd-none'}>
        <div className="download-popup">
          <div className="download-popup-child">
            <div className="download-pop" onClick={downpopfunclose}>X</div>
            <h1>Mobile App Coming Soon. Sign up  and Join our Community to get Whitelisted. </h1>
          </div>
        </div>
      </div>





      <div className="page-head">
        <Header />
      </div>
    

      <div className="container ask-us-section">
        <div className="text-center ask-us-parent">
          <div className="mb-4 ask-quertion-heading">
            <h1>Ask us a question</h1>
          </div>
          <div className="mb-4 ask-quertion-para">
            <p>
            Our customer support team is available and possess expertise in the subject to resolve any queries you might possess
            </p>
          </div>
          {/* <div className="ask-us-input">
            <img src={searchlogo} alt="" />
            <input type="text" placeholder="Search" />
          </div> */}
        </div>
      </div>
      <div className="container ask-us-underline"></div>


      {/* -----------------------section 2 --------------------- */}
      <div className={request ? "callback-popup-section" : "d-none"}>
        <div
          className=" support-parent-3 request-callback-popup text-center"
        >
          <button
            class="btn-close request-close"
            onClick={requestClose}
            aria-label="Close"
          ></button>

          <div className="col-12 text-center">
            <img className="mb-3 " src={phoneimg} alt="" />
          </div>
          <h3 className="request-call-back-text">Request a call back </h3>
          <p>
            Leave your number and we'll <br /> call you back.
          </p>
          <div className="input-submit-button">
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="request-phonenumber"
            />
            <button className="request-submit-btn">Submit</button>
          </div>
        </div>
      </div>


      <div className="container request-call-back-section my-lg-5 p-5">
        <div className="d-lg-flex align-items-center justify-content-between gap-5 text-center mb-lg-5 pb-lg-3">
          <div className="py-lg-0 py-4 support-parent-3"  onClick={requestPopup}>
            <img className="mb-3" src={phoneimg} alt="" />
            <h3 className="request-call-back-text">Request a call back</h3>
            <p>Leave your number and we'll call you back.</p>
          </div>
          <div className="py-lg-0 py-4 support-parent-3">
            <img className="mb-3" src={chatimg} alt="" />
            <h3 className="request-call-back-text">Chat with us</h3>
            <p>Chat with an agent in the app. (Must be logged in.)</p>
          </div>
          <div className="py-lg-0 py-4 support-parent-3">
            <img className="mb-3" src={emailimg} alt="" />
            <h3 className="request-call-back-text">Email Us</h3>
            <p>Email Us and we will get back to you</p>
          </div>
        </div>

        <div className="d-lg-flex align-items-center justify-content-between gap-5 text-center mb-lg-5 pb-lg-3">
          <div className="py-lg-0 py-4 support-parent-3">
            <img className="mb-3" src={ticketimg} alt="" />
            <h3 className="request-call-back-text">Raise a ticket</h3>
            <p>Have any complaint? Just raise a ticket and we’ll help you</p>
          </div>
          <div className="py-lg-0 py-4 support-parent-3">
            <img className="mb-3" src={prevticketimg} alt="" />
            <h3 className="request-call-back-text">View my previous tickets</h3>
            <p>Look at your previous ticket progress (Must be logged in)</p>
          </div>
          <div className="py-lg-0 py-4 support-parent-3">
            <img className="mb-3" src={writeusimg} alt="" />
            <h3 className="request-call-back-text">Write us a feedback</h3>
            <p>Your feedback matters and let us grow</p>
          </div>
        </div>

        <div className="d-lg-flex align-items-center justify-content-evenly text-center">
          <div className=" py-lg-0 py-4 support-parent-3">
            <img className="mb-3" src={starimg} alt="" />
            <h3 className="request-call-back-text">Rate us on App store</h3>
            <p>Rate us in app store and play store</p>
          </div>
          <div className="py-lg-0 py-4 support-parent-3">
            <img className="mb-3" src={twitterimg} alt="" />
            <h3 className="request-call-back-text">Tweet Us</h3>
            <p>Reach out to us via twitter</p>
          </div>
        </div>
      </div>






      <section>
        <div className="container ">
          <div className="follow-us-heading">
            <h1>Follow US</h1>
          </div>


          <div className="follow-us-links ">
            <ul>
              <li><a   target="_blank" href="https://www.facebook.com/sportsverse.trade?mibextid=ZbWKwL"><img src={facebooklogo} alt="" /></a></li>
              <li><a   target="_blank" href="https://twitter.com/sportsverse_"><img src={twitterlogo} alt="" /></a></li>
              <li><a  target="_blank"  href="https://www.instagram.com/sportsverse.trade/"><img src={instalogo} alt="" /></a></li>
              <li><a  target="_blank" href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A82131455&keywords=sportsverse.trade&origin=RICH_QUERY_SUGGESTION&position=1&searchId=fdb2db8d-f2fd-47e5-bb25-f65fd7bdcd24&sid=Xkn"><img src={linkdinlogo} alt="" /></a></li>
              <li><a   target="_blank" href="https://discord.gg/cSGxkc3KJh"><img src={discardlogo} alt="" /></a></li>
              <li><a   target="_blank" href="https://t.me/+Gq8_Hu_wNaZlOTM1"><img src={telegramlogo} alt="" /></a></li>
            </ul>
          </div>
        </div>
      </section>


      <Contactus/>

      <Partner/>
      <MediaPartner />
      <section className="work">
        <div className="container">
            <div className="row">
                <div className="col-md-7 want">
                    <div className="want-to">
                        <h1>Want to work with us?</h1>
                        <p>
                        A call-out to all those tech enthusiasts, early adopters and contemporaries. Stay in sync with the advancements in technology 
                        and transformation to 
                        the Digital world of today by working with us.
                        </p>
                        <button>
                            <h2 className="c-btn"><a href="/careerPage">Career</a></h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>  
      </section>
      <br></br>
      <br></br>
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
                                <img src={iphone1} className="3-phone-img" />
                            </div>
                        </div>
                    </div>
                </section>
      {/* depend  */}
      <br></br>
      <br></br>
      <Footer/>
    </>
  );
};
export default SupportPage;
