import React from "react";
import "../../stylesheet/carrierStylesheet/carriercomponent1.css";

const CareerComponent1 = () => {
  return (
    <div>
      <section>
        <div className="container careerComponet1">
          <div className="col-md-12 m-auto career1-parent">
            <div className="text-center">
              <h2 className="join-us-haeding">
                Join Us & Become a Professional In
                <br /> your Dream Field{" "}
              </h2>
            </div>
            <div className="text-center my-4 careercomponent1-para">
              <p>
                We’ll make your professional journey into this dream world,
                knowledgeable,<br></br> fun and productive with our expertise
                and innovative ideas.
              </p>
            </div>
            <div className="text-center">
              <button className="join-the-team">Join the team</button>
            </div>
          </div>
        </div>
        <div className="borderline"></div>
      </section>
    </div>
  );
};

export default CareerComponent1;
