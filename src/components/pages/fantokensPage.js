// import React from "react";
import React, { useEffect, useRef,useState } from "react";

import HeaderSection from "./headerSection";
import "../stylesheet/fantokensPage.css";
// import "../stylesheet/home.css";
import token from "../background-images/token.png";
import royal from "../icons/royal-logo.png";
import chennai from "../icons/chennai-logo.png";
import mi from "../icons/mi-logo.png";
import apple from "../icons/apple.png";
import android from "../icons/android.png";
import iphone from "../background-images/iphone.png";
import Header from "./header";
import Footer from "./footer";
import According from "./According";
import { Faq } from "./Faq";
import iphone1 from '../background-images/background-mobile.png'

export const FantokensPage = () => {
  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);


  const [basic1,setbasic1] = useState(false)
  const [video2,setvideo2] = useState(false)

  const basic_active=()=>{
    setbasic1(true)
    setvideo2(false)
  }

  const videos_active=()=>{
    setbasic1(false)
    setvideo2(true)
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
            <h1>Mobile App coming soon. sign up  and join our community to get whitelisted. </h1>
          </div>
        </div>
      </div>





      <div className="page-head">
        <Header />
      </div>

      <HeaderSection />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="fan-c">
                <div className="fan-con">
                  <h4>Contents</h4>
                  <p className="fan-c-line"></p>
                  <ul>
                    <a href="#livetokens">
                    <li onClick={basic_active} className={basic1 ? 'basic-active1' : ''}>Live Tokens</li>
                    </a>
                    <a href="#upcoming">
                    <li onClick={videos_active} className={video2 ? 'video-active2' : ''}>ICO / Coming Soon</li>
                    </a>
                    {/* <a href="#upcoming">
                      <li>ICO / Coming Soon</li>
                    </a> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9 fan-p" id="livetokens">
              <h3 className="live-tokens-heading">Live Tokens</h3>
              <p className="live-tokens-text">
                On the Sportsverse platform, the team tokens of the IPL teams
                are currently live and are ready to be bought and traded.
                Bringing together digital currency and the most loved and
                anticipated game of cricket in the form of IPL, fans can now
                participate and support their favourite teams pro-actively
                through the team tokens.{" "}
              </p>

              <p className="live-tokens-down-border "></p>

              <div className="row">
                {/* <div className="col-md-3"></div> */}
                <div className="col-md-4 pb-2">
                  <div className="token-div">
                    <div className="p-2">
                      <video
                        className="video-border"
                        style={{ maxWidth: "100%", height: "100%" }}
                        autoPlay
                        playsInline
                        loop
                        muted
                        alt="All the devices"
                        src="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/teams+videos/01+(1).mp4"
                      />
                    </div>
                    <div className="dynamic-data pt-3 pb-2">
                      {/* <p className="current-price-text">
                        Current Price : $287.7
                      </p> */}
                      <p className="current-price-text">
                        Token Address : 0x9Dbe1a074CF62D3B276 <br/> EeDD54952d179299a4892
                      </p>
                      <p className="current-price-text">
                        Tokens available : 100 M
                      </p>
                      {/* <p className="current-price-text">Total value : $35.21</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="token-div">
                    <div className="p-2">
                      <video
                        className="video-border"
                        style={{ maxWidth: "100%", height: "100%" }}
                        autoPlay
                        playsInline
                        loop
                        muted
                        alt="All the devices"
                        src="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/teams+videos/02.mp4"
                      />
                    </div>
                    <div className="dynamic-data pt-3 pb-2">
                      {/* <p className="current-price-text">
                        Current Price : $287.7
                      </p> */}
                      <p className="current-price-text">
                        Token Address : 0x3EDC3c21E798d0cc23365 <br/> 00871ABEB05e3cB5166
                      </p>
                      <p className="current-price-text">
                        Tokens available : 100 M
                      </p>
                      {/* <p className="current-price-text">Total value : $35.21</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="token-div">
                    <div className="p-2">
                      <video
                        className="video-border"
                        style={{ maxWidth: "100%", height: "100%" }}
                        autoPlay
                        playsInline
                        loop
                        muted
                        alt="All the devices"
                        src="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/teams+videos/03.mp4"
                      />
                    </div>
                    <div className="dynamic-data pt-3 pb-2">
                      {/* <p className="current-price-text">
                        Current Price : $287.7
                      </p> */}
                      <p className="current-price-text">
                        Token Address : 0x2328aA62F692Cdb1749ae173 <br/> A93E89fDEAFeD650
                      </p>
                      <p className="current-price-text">
                        Tokens available : 100 M
                      </p>
                      {/* <p className="current-price-text">Total value : $35.21</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              {/* 2nd row of dynamic data cards */}
              <div className="row">
                {/* <div className="col-md-3"></div> */}
                <div className="col-md-4 pb-2">
                  <div className="token-div">
                    <div className="p-2">
                      <video
                        className="video-border"
                        style={{ maxWidth: "100%", height: "100%" }}
                        autoPlay
                        playsInline
                        loop
                        muted
                        alt="All the devices"
                        src="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/teams+videos/04.mp4"
                      />
                    </div>
                    <div className="dynamic-data pt-3 pb-2">
                      {/* <p className="current-price-text">
                        Current Price : $287.7
                      </p> */}
                      <p className="current-price-text">
                        Token Address : 0xb39370D66472cD8e25E542b7 <br/>  FaE4C641f89d1a3c
                      </p>
                      <p className="current-price-text">
                        Tokens available : 100 M
                      </p>
                      {/* <p className="current-price-text">Total value : $35.21</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="token-div">
                    <div className="p-2">
                      <video
                        className="video-border"
                        style={{ maxWidth: "100%", height: "100%" }}
                        autoPlay
                        playsInline
                        loop
                        muted
                        alt="All the devices"
                        src="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/teams+videos/05.mp4"
                      />
                    </div>
                    <div className="dynamic-data pt-3 pb-2">
                      {/* <p className="current-price-text">
                        Current Price : $287.7
                      </p> */}
                      <p className="current-price-text">
                        Token Address : 0x4CED951389405dECf9E <br/> 82efaBA1854e109b93C38
                      </p>
                      <p className="current-price-text">
                        Tokens available : 100 M
                      </p>
                      {/* <p className="current-price-text">Total value : $35.21</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="token-div">
                    <div className="p-2">
                      <video
                        className="video-border"
                        style={{ maxWidth: "100%", height: "100%" }}
                        autoPlay
                        playsInline
                        loop
                        muted
                        alt="All the devices"
                        src="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/teams+videos/06.mp4"
                      />
                    </div>
                    <div className="dynamic-data pt-3 pb-2">
                      {/* <p className="current-price-text">
                        Current Price : $287.7
                      </p> */}
                      <p className="current-price-text">
                        Token Address : 0xB90ED1bd876AB378b001b702  <br/> b38A73fB39e23D25
                      </p>
                      <p className="current-price-text">
                        Tokens available :100 M
                      </p>
                      {/* <p className="current-price-text">Total value : $35.21</p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* 3rd row of dynamic data cards */}
              <div className="row">
                {/* <div className="col-md-3"></div> */}
                <div className="col-md-4 pb-2">
                  <div className="token-div">
                    <div className="p-2">
                      <video
                        className="video-border"
                        style={{ maxWidth: "100%", height: "100%" }}
                        autoPlay
                        playsInline
                        loop
                        muted
                        alt="All the devices"
                        src="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/teams+videos/07.mp4"
                      />
                    </div>
                    <div className="dynamic-data pt-3 pb-2">
                      {/* <p className="current-price-text">
                        Current Price : $287.7
                      </p> */}
                      <p className="current-price-text">
                        Token Address : 0x34141D62B66857d409e3eEfB <br/> 7C07EB23CF98B06f
                      </p>
                      <p className="current-price-text">
                        Tokens available :100 M
                      </p>
                      {/* <p className="current-price-text">Total value : $35.21</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="token-div">
                    <div className="p-2">
                      <video
                        className="video-border"
                        style={{ maxWidth: "100%", height: "100%" }}
                        autoPlay
                        playsInline
                        loop
                        muted
                        alt="All the devices"
                        src="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/teams+videos/08.mp4"
                      />
                    </div>
                    <div className="dynamic-data pt-3 pb-2">
                      {/* <p className="current-price-text">
                        Current Price : $287.7
                      </p> */}
                      <p className="current-price-text">
                        Token Address : 0x6b32f2a2c0484EB7F7f089Dd4  <br/> 5CCc33291317ab0
                      </p>
                      <p className="current-price-text">
                        Tokens available :100 M
                      </p>
                      {/* <p className="current-price-text">Total value : $35.21</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="token-div">
                    <div className="p-2">
                      <video
                        className="video-border"
                        style={{ maxWidth: "100%", height: "100%" }}
                        autoPlay
                        playsInline
                        loop
                        muted
                        alt="All the devices"
                        src="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/teams+videos/09.mp4"
                      />
                    </div>
                    <div className="dynamic-data pt-3 pb-2">
                      {/* <p className="current-price-text">
                        Current Price : $287.7
                      </p> */}
                      <p className="current-price-text">
                        Token Address : 0xeeA6661a8F6D5Bdb83C3BB5 <br/> CD0684bf8bF841952
                      </p>
                      <p className="current-price-text">
                        Tokens available : 100 M
                      </p>
                      {/* <p className="current-price-text">Total value : $35.21</p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* 4rthd row of dynamic data cards */}

              <div className="row">
                {/* <div className="col-md-3"></div> */}
                <div className="col-md-4 pb-2">
                  <div className="token-div">
                    <div className="p-2">
                      <video
                        className="video-border"
                        style={{ maxWidth: "100%", height: "100%" }}
                        autoPlay
                        playsInline
                        loop
                        muted
                        alt="All the devices"
                        src="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/mi_1.mp4"
                      />
                    </div>
                    <div className="dynamic-data pt-3 pb-2">
                      {/* <p className="current-price-text">
                        Current Price : $287.7
                      </p> */}
                      <p className="current-price-text">
                        Token Address : 0x33e5DFe148aCe06A2c9a  <br/> Cee17F59d7AbA07E1DA3
                      </p>
                      <p className="current-price-text">
                        Tokens available : 100 M
                      </p>
                      {/* <p className="current-price-text">Total value : $35.21</p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd  upcoming part */}
             
             
             
             
             
              {/* <div className="coming-soon">
                <div>
                  <div className="coming">
                    <h2>Coming Soon</h2>
                  </div>
                </div>
                <section className="pt-5" id="upcoming">
                  <div className="container pt-5">
                    <div className="row">
                      <div className="col-md-12">
                        <h3 className="live-tokens-heading">Upcoming</h3>

                        <p className="live-tokens-down-border "></p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4 token-div ">
                        <div className="team-div-combined">
                          <img src={royal} alt="" className="team-logo" />
                          <div className="team-div-child">
                            <h4 className="team-name-heading">RSVC</h4>
                            <p className="team-name-trade-coin">
                              Rajasthan Royals <br></br>
                              Sportsverse Coin
                            </p>
                          </div>
                        </div>
                        <div className="dynamic-data pt-3">
                          <p className="current-price-text">
                            Current Price : $287.7
                          </p>
                          <p className="current-price-text">
                            Token Address : 48394u83ucs884334
                          </p>
                          <p className="current-price-text">
                            Tokens available : 3521
                          </p>
                          <p className="current-price-text">
                            Total value : $35.21
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 token-div ">
                        <div className="team-div-combined">
                          <img src={chennai} alt="" className="team-logo" />
                          <div className="team-div-child">
                            <h4 className="team-name-heading">RSVC</h4>
                            <p className="team-name-trade-coin">
                              Rajasthan Royals <br></br>
                              Sportsverse Coin
                            </p>
                          </div>
                        </div>
                        <div className="dynamic-data pt-3">
                          <p className="current-price-text">
                            Current Price : $287.7
                          </p>
                          <p className="current-price-text">
                            Token Address : 48394u83ucs884334
                          </p>
                          <p className="current-price-text">
                            Tokens available : 3521
                          </p>
                          <p className="current-price-text">
                            Total value : $35.21
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 token-div">
                        <div className="team-div-combined">
                          <img src={mi} alt="" className="team-logo" />
                          <div className="team-div-child">
                            <h4 className="team-name-heading">RSVC</h4>
                            <p className="team-name-trade-coin">
                              Rajasthan Royals <br></br>
                              Sportsverse Coin
                            </p>
                          </div>
                        </div>
                        <div className="dynamic-data pt-3">
                          <p className="current-price-text">
                            Current Price : $287.7
                          </p>
                          <p className="current-price-text">
                            Token Address : 48394u83ucs884334
                          </p>
                          <p className="current-price-text">
                            Tokens available : 3521
                          </p>
                          <p className="current-price-text">
                            Total value : $35.21
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row pt-5">
                      <div className="col-md-4 token-div ">
                        <div className="team-div-combined">
                          <img src={royal} alt="" className="team-logo" />
                          <div className="team-div-child">
                            <h4 className="team-name-heading">RSVC</h4>
                            <p className="team-name-trade-coin">
                              Rajasthan Royals <br></br>
                              Sportsverse Coin
                            </p>
                          </div>
                        </div>
                        <div className="dynamic-data pt-3">
                          <p className="current-price-text">
                            Current Price : $287.7
                          </p>
                          <p className="current-price-text">
                            Token Address : 48394u83ucs884334
                          </p>
                          <p className="current-price-text">
                            Tokens available : 3521
                          </p>
                          <p className="current-price-text">
                            Total value : $35.21
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 token-div ">
                        <div className="team-div-combined">
                          <img src={chennai} alt="" className="team-logo" />
                          <div className="team-div-child">
                            <h4 className="team-name-heading">RSVC</h4>
                            <p className="team-name-trade-coin">
                              Rajasthan Royals <br></br>
                              Sportsverse Coin
                            </p>
                          </div>
                        </div>
                        <div className="dynamic-data pt-3">
                          <p className="current-price-text">
                            Current Price : $287.7
                          </p>
                          <p className="current-price-text">
                            Token Address : 48394u83ucs884334
                          </p>
                          <p className="current-price-text">
                            Tokens available : 3521
                          </p>
                          <p className="current-price-text">
                            Total value : $35.21
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 token-div">
                        <div className="team-div-combined">
                          <img src={mi} alt="" className="team-logo" />
                          <div className="team-div-child">
                            <h4 className="team-name-heading">RSVC</h4>
                            <p className="team-name-trade-coin">
                              Rajasthan Royals <br></br>
                              Sportsverse Coin
                            </p>
                          </div>
                        </div>
                        <div className="dynamic-data pt-3">
                          <p className="current-price-text">
                            Current Price : $287.7
                          </p>
                          <p className="current-price-text">
                            Token Address : 48394u83ucs884334
                          </p>
                          <p className="current-price-text">
                            Tokens available : 3521
                          </p>
                          <p className="current-price-text">
                            Total value : $35.21
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row pt-5">
                      <div className="col-md-4 token-div ">
                        <div className="team-div-combined">
                          <img src={royal} alt="" className="team-logo" />
                          <div className="team-div-child">
                            <h4 className="team-name-heading">RSVC</h4>
                            <p className="team-name-trade-coin">
                              Rajasthan Royals <br></br>
                              Sportsverse Coin
                            </p>
                          </div>
                        </div>
                        <div className="dynamic-data pt-3">
                          <p className="current-price-text">
                            Current Price : $287.7
                          </p>
                          <p className="current-price-text">
                            Token Address : 48394u83ucs884334
                          </p>
                          <p className="current-price-text">
                            Tokens available : 3521
                          </p>
                          <p className="current-price-text">
                            Total value : $35.21
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 token-div  ">
                        <div className="team-div-combined">
                          <img src={chennai} alt="" className="team-logo" />
                          <div className="team-div-child">
                            <h4 className="team-name-heading">RSVC</h4>
                            <p className="team-name-trade-coin">
                              Rajasthan Royals <br></br>
                              Sportsverse Coin
                            </p>
                          </div>
                        </div>
                        <div className="dynamic-data pt-3">
                          <p className="current-price-text">
                            Current Price : $287.7
                          </p>
                          <p className="current-price-text">
                            Token Address : 48394u83ucs884334
                          </p>
                          <p className="current-price-text">
                            Tokens available : 3521
                          </p>
                          <p className="current-price-text">
                            Total value : $35.21
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 token-div ">
                        <div className="team-div-combined">
                          <img src={mi} alt="" className="team-logo" />
                          <div className="team-div-child">
                            <h4 className="team-name-heading">RSVC</h4>
                            <p className="team-name-trade-coin">
                              Rajasthan Royals <br></br>
                              Sportsverse Coin
                            </p>
                          </div>
                        </div>
                        <div className="dynamic-data pt-3">
                          <p className="current-price-text">
                            Current Price : $287.7
                          </p>
                          <p className="current-price-text">
                            Token Address : 48394u83ucs884334
                          </p>
                          <p className="current-price-text">
                            Tokens available : 3521
                          </p>
                          <p className="current-price-text">
                            Total value : $35.21
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div> */}






            </div>
          </div>
        </div>
      </section>





      {/* 2nd section upcoming  */}

      <br></br>
      <br></br>
      {/* depend  */}
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 ha-question">
              <div className="question">
                <h1>Have a question which is not listed?</h1>
                <p>
                  Venturing into the digital world of Sports trading can be both{" "}
                  <br></br>
                  sceptical and inquisitive. Our customer support team is{" "}
                  <br></br>
                  knowledgeable and readily available to ease your journey
                  through<br></br>
                  Sportsverse.
                </p>
                <button>
                  {" "}
                  <h2 className="c-btn">Contact Support</h2>
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
                                <img src={iphone1} className="" />
                            </div>
                        </div>
                    </div>
                </section>
      {/* depend  */}
      <br></br>
      <Faq />
      {/* <According/> */}
      <br></br>
      <Footer />
    </>
  );
};

export default FantokensPage;
