import React from "react";
import "../stylesheet/headerSection.css";
import fantoken from "../background-images/fan-tokens.png";
import android from "../icons/android.png";
import {useState} from 'react'
function HeaderSection() {

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






      {/* arrange here start  */}
      <div className=" pt-5 pb-5">
        <div className="container  learn-bg p-5 ">
          <div className=" row ">
            <div className="col-md-8">
              <h1 className="learn-the-spts-heading">What is a Fan token?</h1>
              <p className="learn-the-spts-text">
              Fan tokens are the digital assets representing every team in the league. With the advanced technology available, each token is created as a blockchain secured ERC20 token based on Polygon Network.These fan tokens are launched on the decentralised ecosystem of Polygon Blockchain which offers all the advantages of it i.e, transparency, digital security, Immutable and fast.
              </p>
            </div>
            <div className="col-md-3 fan-token-img">
              <img src={fantoken} alt="image" className="fan-token" style={{width:'100%'}}/>
            </div>
            <div className="col-md-1">
            </div>
          </div>
          <div className="row "> 
                <div className="learn-button1">
                    <button className="sport-btn" onClick={downpopfun}>
                      <h3>download app</h3>
                      {/* <img className="img1" src={apple}/> */}
                      <img className="img2" src={android}/>
                    </button>
                </div>
                {/* <div className="learn-button d-block">
                  <button className="sport-btn">
                    <h3>download app</h3>
                    <img className="img1" src={apple} />
                    <img className="img2" src={android} />
                  </button>
                </div> */}
            <p className="learn-the-sprt-line"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
