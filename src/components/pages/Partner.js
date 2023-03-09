import React from "react";
// partner
import "../stylesheet/partner.css";
import aws from "../partner/aws.png";
import blender from "../partner/blender.png";
import chainlink from "../partner/chainlink.png";
import dext from "../partner/dext.png";
import fiveire from "../partner/fiveire.png";
import metamask from "../partner/metamask.png";
import nvidia from "../partner/nvidia.png";
import polygon from "../partner/polygon.png";
import uniswap from "../partner/uniswap.png";
import unity from "../partner/unity.png";
import unreal from "../partner/unreal.png";
import webthree from "../partner/webthree.png";
import metalok_logo from '../partner/metalok-logo.png'
import akshaya from '../partner/akshaya-logo.png'
import propanja from '../partner/propanja-logo.png'
import web3 from '../partner/webthree.png'
import sharduem from '../partner/sharduem-logo.png'
import zeemedia from '../partner/zeemedia-logo.png'


export const Partner = () => {
  return (
    <div>
      

      <div className="pb-5 pt-5">
        <h1 className="p-heading pt-3">Built With</h1>
        <p className="our-partner-para">
          We have partnered with Technology, Software and Resource giants of the
          emerging WEB3 space for holistic growth.
        </p>
      </div>

      <div className="partner-section">
        <div className="partner-parent">
          <img src={akshaya} alt="partner" />
        </div>
        <div className="partner-parent ">
          <img src={unreal} alt="partner" />
        </div>
        <div className="partner-parent">
          <img src={polygon} alt="partner" />
        </div>
        <div className="partner-parent">
          <img src={blender} alt="partner" />
        </div>
        <div className="partner-parent">
          <img src={metalok_logo} alt="partner" />
        </div>
        <div className="partner-parent">
          <img src={dext} alt="partner" />
        </div>
      </div>

      <div className="partner-section2">
        <div className="partner-parent2">
          <img src={chainlink} alt="partner" />
        </div>
        <div className="partner-parent2">
          <img src={nvidia} alt="partner" />
        </div>
        <div className="partner-parent2">
          <img src={metamask} alt="partner" />
        </div>
        <div className="partner-parent2">
          <img src={webthree} alt="partner" />
        </div>
        <div className="partner-parent2">
          <img src={uniswap} alt="partner" />
        </div>
        <div className="partner-parent2">
          <img src={aws} alt="partner" />
        </div>
      </div>

      <div className="partner-section3">
        
        <div className="partner-parent3">
          {/* <img src={fiveire} alt="partner" /> */}
        </div>
        <div className="partner-parent3">
          <img src={sharduem} alt="partner" />
        </div>
        
        <div className="partner-parent2">
          {/* <img src={zeemedia} alt="partner" /> */}
        </div>
        <div className="partner-parent2">
          <img src={unity } alt="partner" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
