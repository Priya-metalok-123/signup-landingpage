import React from "react";
import "../stylesheet/depends.css";
//import Collaps from'./collaps';
import buylow from "../icons/buy-low-icon.png";
import track from "../icons/track-icon.png";
import analyse from "../icons/analyse-icon.png";
import earn from "../icons/earn-icon.png";
// import download from '../background-images/download.png';
// import iphone from'../background-images/iphone.png';
import apple from "../icons/apple.png";
import android from "../icons/android.png";
import iphone from "../background-images/iphone.png";
import iphone1 from '../background-images/background-mobile.svg';
import {useState} from 'react'

// import "../stylesheet/home.css";


export default function Depends() {

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
            <h1>Mobile App Coming Soon. Sign up  and Join our Community to get White listed. </h1>
          </div>
        </div>
      </div>


      <section>
        <div className="container ">
          <h1 className="all-depends-heading pt-5 pb-5">
            It all depends on how professional you’re, to make money
          </h1>
          <div className="row m-auto">
            <div className="col-xl-3 col-md-6">
              <div className="">
                <img src={buylow} alt="" />
                <h4 className="buy-low-heading pt-4">Buy Low Sell High</h4>
                <p className="buy-low-text pt-1">
                  Analyse the game and make the best judgement in regards to buying and  trading
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="">
                <img src={track} alt="" />
                <h4 className="buy-low-heading  pt-4">Track daily news</h4>
                <p className="buy-low-text pt-1">
                  Any news is important news that can affect the course of the game
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="">
                <img src={analyse} alt="" />
                <h4 className="buy-low-heading  pt-4">Analyse players & <br></br>Team</h4>
                <p className="buy-low-text pt-1">
                  Analyse to predict the outcome of a game and therefore impact your trade profits
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="">
                <img src={earn} alt="" />
                <h4 className="buy-low-heading  pt-4">Earn like a pro</h4>
                <p className="buy-low-text pt-1">
                  Win and earn along with your favourite team's victory without missing out on the memorable moments of the game.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="excited-learn-div pt-5">
          <h2 className="excited-heading">Excited to learn more?</h2>
          <p className="excited-text pt-2">
            {/* Sports trading creates a good prospect of earning<br></br> while watching & learning your favourite sport.<br></br> Know more about our community.  */}
            Sports trading creates a good prospect of earning while watching & learning your favourite sport. Know more about our community.</p>
          <a href="./learnPage2">
            <button className="sportsverse-101">
              <h1>Sportsverse 101</h1>
            </button>
          </a>

        </div>
      </section>

      {/* <section className="">
        <div className="container start-engine">
          <div className="row p-0 p-md-5 m-auto">
            <div className="col-md-6 ">
              <div className="start-en">
                <h1>Start Earning today</h1>
                <p>
                  Risus habitant leo egestas mauris diam eget morbi tempus
                  vulputate.
                </p>
                <button className="start-engine-btn">
                  <h2 className="btn-h">Download App</h2>
                  <img src={apple} alt="apple" className="img1" />
                  <img src={android} alt="apple" className="img2"/>
                </button>
              </div>
            </div>
            <div className="col-md-6 start-en-1">
              <img src={iphone}  className="iphone-group-img"/>
            </div>
          </div>
        </div>
      </section> */}


      <section className="">
        <div className="container start-engine">
          <div className="row">
            <div className="col-md-7 d-flex align-items-center justify-content-center">
              <div className="start-eng  mt-md-0 mt-5 py-4  pr-2">
                <h1>Start Earning today</h1>
                <p>Engage with the Sportsverse platform and enjoy the benefits of pioneering into exclusive Digital experience and the Metaverse.</p>
                <button className="start-engine-btn" onClick={downpopfun}>
                  <h2 className="btn-h">Download App</h2>
                  <img src={apple} alt="apple" className="img1" />
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
    </>
  );
}
