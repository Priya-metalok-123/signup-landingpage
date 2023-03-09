import React from "react";
import registration from "../../icons/registration-img.png";
import apply_img from "../../icons/applyjob-img.png";
import interview_img from "../../icons/interview-img.png";
import congratulation_img from "../../icons/congratulation-img.png";
import "../../stylesheet/carrierStylesheet/careercomponent5.css";

const CareerComponent5 = () => {
  return (
    <div>
      <div className="section my-5">
        <div className="container">
          <div className="text-center ">
            <h1 className="fast-simple-haeding">The Fast & Simple Process</h1>
            <p className="col-md-7 m-auto mb-4 fast-simple-para">
              Getting onboard with us is pretty simple and easy. We have
              outlined the process in four simple steps. Looking forward to
              budding associations.
            </p>
          </div>
          <div className="row text-center">
            <div className="col-md-3 ">
              <div className="fast-simple-img">
                <img src={registration} alt="" />
              </div>
              <h3 className="registraion-all-heading">Registration</h3>
              <p className="reg-para">
                Register with us and let us get to know your interest to work
                with our amazing team.
              </p>
            </div>
            <div className="col-md-3">
              <div className="fast-simple-img">
                <img src={apply_img} alt="" />
              </div>
              <h3 className="registraion-all-heading">Apply Job</h3>
              <p className="reg-para">
                Apply in the field of your expertise from open positions within
                our team.
              </p>
            </div>
            <div className="col-md-3">
              <div className="fast-simple-img">
                <img src={interview_img} alt="" />
              </div>
              <h3 className="registraion-all-heading">Interview</h3>
              <p className="reg-para">
                Metalok Recruitment team will get in touch with you and set a
                mutually convenient date for an interview.
              </p>
            </div>
            <div className="col-md-3">
              <div className="fast-simple-img">
                <img src={congratulation_img} alt="" />
              </div>
              <h3 className="registraion-all-heading">Congratulations</h3>
              <p className="reg-para">
                Once you have cleared the interview round, Metalok Team would
                inform you of the same and warmly welcome you onboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerComponent5;
