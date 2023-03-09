import React from "react";
import Header from "./header";
import Accordion from "react-bootstrap/Accordion";
import Depends from "../pages/Depends";
import "../stylesheet/learnPage1.css";
import "../stylesheet/learnPage2.css";
import {Faq} from './Faq';
// import '../stylesheet/home.css';
import frame from "../background-images/frame1.png";
import iphone1 from '../background-images/background-mobile.png'
import google from "../background-images/googleplay.png";
import appstore from "../background-images/appstore.png";
import buylow from "../icons/buy-low-icon.png";
import track from "../icons/track-icon.png";
import analyse from "../icons/analyse-icon.png";
import earn from "../icons/earn-icon.png";
import apple from "../icons/apple.png";
import android from "../icons/android.png";
import Footer from "./footer";
import According from "./According";
import { useState } from "react";

const LearnPage2 = () => {
  
  const [basic,setbasic] = useState(false)
  const [video,setvideo] = useState(false)

  const basic_active=()=>{
    setbasic(true)
    setvideo(false)
  }

  const videos_active=()=>{
    setbasic(false)
    setvideo(true)
  }


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
            <h1>Mobile App Coming Soon. Sign up  and Join our Community to get Whitelisted.</h1>
          </div>
        </div>
      </div>



      <div className="page-head">
        <Header/>
      </div>
      <div className="pt-5">
        <div className="container  learn-bg p-md-5 py-5 ">
          <h1 className="learn-the-spts-heading">Sportsverse 101</h1>
          <p className="learn-the-spts-text">
            A one-stop destination to all your questions and a guide to enter
            the Sportsverse community. Find the answers to all your inhibitions
            and doubts regarding the sports trading community, Sportsverse
            platform, cryptocurrency, digital wallets and more, relevant to the
            sports trading platform. Watch, Trade, Learn and Earn without the
            stress of unsettled questions regarding the pioneer of sports
            trading into the digital world.
          </p>
          
          <div className="learn-button">
            <button className="sport-btn " onClick={downpopfun}>
              <h3>download app</h3>
              {/* <img className="img1" src={apple} /> */}
              <img className="img2" src={android} />
            </button>
          </div>
          <p className="learn-the-sprt-line "></p>
        </div>
      </div>
      {/*--------------------------- collaps start here------------------ */}

      <section className="the-basics-section ">
        <div className="container ">
          <div className="row ">
            {/* <div className="col-md-2"></div> */}
            <div className="col-md-4">
                 <div className="basic">
                    <div className="basic-d">
                      <h2>Contents</h2>
                      <p className="con-d"></p>
                      <ul>
                        <a href="#basic"><li onClick={basic_active} className={basic ? 'basic-active' : ''}>The Basics</li></a>
                        <a href="#videos"><li onClick={videos_active} className={video ? 'video-active' : ''}>Videos</li></a>
                      </ul>
                    </div>
                 </div>
            </div>
            <div className="col-md-8" id="basic">
              <h3 className="the-basic-heading">The Basics</h3>
              <p className="the-basic-border-down"></p>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="collaps-text">
                    How to use the app/ Getting started with the app.
                  </Accordion.Header>
                  <Accordion.Body>
                  Sportsverse application is simple to use. Download our application simply by scrolling down our
                   page to the download links provided below. Follow the steps as instructed by the application and you will 
                   be ready to use. All you will be needing is a digital
                   wallet as a prerequisite and you can start trading in our application after registering.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How to trade in Sportsverse?
                  </Accordion.Header>
                  <Accordion.Body>
                  Create a digital wallet and register with our Sportsverse application.
                   Any live tokens available would be visible on our app. Buy/sell/trade the tokens from the application
                    using your currency through your digital wallet on our marketplace and redeem your wins.

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>What is a Digital Wallet?</Accordion.Header>
                  <Accordion.Body>
                  Digital wallet is a software, electronic device or an online application that enables
                   transactions online. Digital wallets facilitate secured transactions, valuable customer insights 
                   and access to rewards such as cashback, coupons and loyalty programs. 

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    How to buy a sports/team token?
                  </Accordion.Header>
                  <Accordion.Body>
                  To buy a sports or team token, login to our Sportsverse applications.
                   Connect your digital wallet to our application. From the live tokens visible, select the
                    token you wish to buy and approve the transaction from your digital wallet to become the proud owner
                     of the token.

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How to trade while you watch the match?
                  </Accordion.Header>
                  <Accordion.Body>
                  Our SPortsverse users can trade on our platform while a live match is taking place.
                   Depending on various news relevant to the match such as the batting lineup, player form and injuries, 
                   the token prices fluctuate and our users can either choose to buy or trade their team token on our marketplace.

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    How to check the price of the tokens we own?
                  </Accordion.Header>
                  <Accordion.Body>
                  Login to your account on the Sportsverse app and click on the token you own.
                   All the details regarding the token along with its price are displayed in the details.

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    How to add money to our digital wallet?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    How do I collect my profits/rewards from the sportsverse
                    app?
                  </Accordion.Header>
                  <Accordion.Body>
                  Login to your profile on the sportsverse application. From the tokens you own,
                   redeem your token money into your connected wallet from which you can take out money any time.

                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    How do I check the upcoming matches?
                  </Accordion.Header>
                  <Accordion.Body>
                  The information of the upcoming matches can be found in the general 
                  news or the relevant websites. You can also find information about them on the news feed of our
                   Sportsverse application.

                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                  How do I navigate between different sports on the platform?

                  </Accordion.Header>
                  <Accordion.Body>
                  Currently the Sportsverse platform only features trading in the IPL fan tokens.
                   But in plan for the future is the inclusion of other sports in the platform, the navigating UI/UX of 
                   which will be designed and integrated soon.

                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <h1 className="tutorial-heading pt-4">Tutorial Videos</h1>
        <p className="accord-bottom-line"></p>
        <section className="py-5" id="videos">
        <div className="container">
       
          <div className="row pb-5">
            <div className="col-lg-6 pr-lg-5">
              <img src={frame} alt="" style={{ width: "100%" }} />
              <h2 className="how-to-trade-video-heading">
                {" "}
                Downloading and setting up metamask wallet.
              </h2>
              
            </div>
            <div className="col-lg-6 pl-lg-5">
              <img src={frame} alt="" style={{ width: "100%" }} />
              <h4 className="how-to-trade-video-heading">
                Tutorial: Buy fantokens from our website.
              </h4>
              
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 pr-lg-5">
              <img src={frame} alt="" style={{ width: "100%" }} />
              <h4 className="how-to-trade-video-heading">
                {" "}
                Tutorial: Importing a new wallet to metamask
              </h4>
             
            </div>
            {/* <div className="col-lg-6 pl-lg-5 ">
              <img src={frame} alt="" style={{ width: "100%" }} />
              <h4 className="how-to-trade-video-heading">
                Tutorial: Add Sportsverse fantokens to your metamask wallet.
              </h4>
              
            </div> */}
          </div>
        </div>
      </section>
            </div>
          </div>
        </div>
      </section>

      
      {/* ----------------------------video frame section start here --------------------- */}
      
      <p className="container learn-the-sprt-line2"></p>

      <br></br>

      <section>
        <div className="container py-5">
          <h1 className="all-depends-heading ">
            It all depends on how professional you’re  to </h1>
            <h1 className="all-depends-heading pb-5"> make long term money
          </h1>
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="">
                <img src={buylow} alt="" />
                <h4 className="buy-low-heading pt-3">Buy Low Sell High</h4>
                <p className="buy-low-text">
                  Analyse the game and make the best judgement in regards to
                  buying and trading
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="">
                <img src={track} alt="" />
                <h4 className="buy-low-heading  pt-3">Track daily news</h4>
                <p className="buy-low-text">
                  Any news is important news that can affect the course of the
                  game
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="">
                <img src={analyse} alt="" />
                <h4 className="buy-low-heading  pt-3">
                  Analyse players & Team
                </h4>
                <p className="buy-low-text">
                  Analyse to predict the outcome of a game and therefore impact
                  your trade profits
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="">
                <img src={earn} alt="" />
                <h4 className="buy-low-heading  pt-3">Earn like a pro</h4>
                <p className="buy-low-text">
                  Win and earn along with your favourite team's victory without
                  missing out on the memorable moments of the game.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* <Depends/> */}

      {/* have a question */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-9 ha-question">
              <div className="question">
                <h1>Have a question which is not listed?</h1>
                <p className="have-question-text">
                  Venturing into the digital world of Sports trading can be both<br></br>
                  sceptical and inquisitive. Our customer support team is<br></br>
                  knowledgeable and readily available to ease your journey
                  through <br></br> Sportsverse.
                </p>
                <a href="./supportPage"><button>
                  <h2 className="c-btn">Contact Support</h2>
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      {/* <Depends /> */}

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

      <div className="container py-5">
        <div className="row px-2">
          {/* <div className="col-md-10 m-auto according-faq p-md-5">
            <h3 className="the-basic-heading text-center">FAQ's</h3>
            <p className="the-basic-border-down"></p>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="collaps-text faq-para">
                  What are Fan tokens?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="faq-para">
                <Accordion.Header>
                  What is a Digital Wallet? Are they necessary to buy NFTs?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="faq-para">
                <Accordion.Header>
                  How to create and open a Metamask Wallet?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="faq-para">
                <Accordion.Header>
                  Which Cryptocurrencies can be used for Trading on Sportsverse?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="faq-para">
                <Accordion.Header>
                   Are my transactions secured on the Sportsverse Platform?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className="faq-para">
                <Accordion.Header>
                  When will the NFT marketplace open on Sportsverse?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>

               
              </Accordion.Item>
             
            </Accordion>
          
          </div> */}
          <Faq />
        </div>
      </div>

      {/* <According /> */}
      <br />
      <Footer />
    </>
  );
}

export default LearnPage2;
