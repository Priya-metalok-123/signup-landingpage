import React from "react";
import { useState } from "react";
import "../../stylesheet/carrierStylesheet/carriercomponent3.css";

import location from "../../icons/location-img.png";
import dollar from "../../icons/Salary-Icon.png";
const CareerComponent3 = () => {
  const explore = [
    {
      // daysago: "9 days ago",
         daysago: "",
      jobposition: "Talent Acquisition Specialist",
      lookingfor:
        "We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!",
      joblocation: "Hyderabad",
      // salary: "80,000-99,999+super",
      salary: "As per company norms",
    },
    {
      daysago: "",
      jobposition: "AR/VR Developer",
      lookingfor:
        "We are looking for an enthusiastic and confident individual who has (1-3yrs) experience in Recruitment. Join our wonderful team and elevate your career!",
      joblocation: "Hyderabad",
      salary: "Consistent with company standards",
    },
    {
      daysago: "",
      jobposition: "React Native Developer",
      lookingfor:
        "We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!",
      joblocation: "Hyderabad",
      salary: "As per company norms",
    },
    {
      daysago: "",
      jobposition: "UI/UX Designer",
      lookingfor:
        "We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!",
      joblocation: "Hyderabad",
      salary: "As per company norms",
    },
    {
      daysago: "",
      jobposition: "Illustrator",
      lookingfor:
        "We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!",
      joblocation: "Hyderabad",
      salary: "As per company norms",
    },
    {
      daysago: "",
      jobposition: "Backend Developer",
      lookingfor:
        "We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!",
      joblocation: "Hyderabad",
      salary: "As per company norms",
    },
  ];

  // console.log("helllllooooooooo" + explore.talent.daysago)
  return (
    <div>
      <section>
        <div className="container">
          <div className="explore-jobs-head" >
            <h3>Explore jobs</h3>
            <p>Join our innovative and dynamic team.</p>
          </div>
          <div className="container">
            <div className="row my-2">
              {explore.map((expData) => (
                <div className="col-lg-4 mb-3 career-component3">
                  <div className="text-right daysago-para">
                    {expData.daysago}
                  </div>

                  <div>
                    <h1 className="position-heading">{expData.jobposition}</h1>
                  </div>
                  <div>
                    <p className="looking-for-para">{expData.lookingfor}</p>
                  </div>
                  <div className="d-flex gap-2">
                    <div>
                      <img
                        src={location}
                        alt=""
                        style={{ width: "12px", height: "16px" }}
                      />
                    </div>
                    <div className="loc-sal-para">{expData.joblocation}</div>
                  </div>
                  <div className="d-flex gap-2">
                    <div>
                      <img
                        src={dollar}
                        alt=""
                        style={{ width: "15px", height: "15px" }}
                      />
                    </div>

                    <div className="loc-sal-para">{expData.salary}</div>
                  </div>
                  <div className="text-center">
                    <button className="apply-button">Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerComponent3;
