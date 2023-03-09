import React from "react";
import "../../stylesheet/carrierStylesheet/carriercomponent2.css";
import teamworkimg from "../../icons/teamwork-img.png";
import secured from "../../icons/secured-img.png";
import learning from "../../icons/learn-img.png";
import culture from "../../icons/cultur-img.png";

const CareerComponent2 = () => {
  return (
    <div>
      <section>
        <div className="container careercomponent2">
          <div className=" row m-auto">
            <div className="col-xl-4 col-md-12 mx-auto">
              <h1 className="why-you-heading">
                Why You <br /> Should Join{" "}
              </h1>
              <h1 className="why-you-heading2">
                Our Awesome
                <br /> Team
              </h1>
              <p className="careercomponent2-para">
                Nurturing out-of-the-box ideas and lending all the support the
                young professionals require to see their ideas become fruition,
                we are the best choice to grow professionally.
              </p>
            </div>


            <div className="col-xl-4 col-md-6 pl-xl-5 ">


              <div className="pt-4 why-you-should-parent-2">
                <div className="why-you-section-img ">
                  <img src={teamworkimg} alt="" />
                </div>
                <h3 className="why-you-side-heading">Team Work</h3>
                <p className="careercomponent2-para">

                  Supportive and diverse team ensures mutual growth in the
                  organization.
                </p>
              </div>



              <div className="pt-4 why-you-should-parent-2">
                <div className="why-you-section-img">
                  <img src={secured} alt="" />
                </div>
                <h3 className="why-you-side-heading" style={{ width: "280px" }}>
                  Learning Opportunity
                </h3>
                <p className="careercomponent2-para">
                  We value ideas and innovations and provide our employees with
                  equal opportunity for growth and learning.
                </p>
              </div>

            </div>
            <div className="col-xl-4 col-md-6 pl-xl-4">
              <div className="pt-4 why-you-should-parent-2">
                <div className="why-you-section-img">
                  <img src={learning} alt="" />
                </div>
                <h3 className="why-you-side-heading">Secured Future</h3>
                <p className="careercomponent2-para">
                  {" "}
                  We are committed to growth and keep updating to the new
                  technological and organization trends ensuring the secured
                  future of our employees and partners.
                </p>
              </div>
              <div className="pt-4 why-you-should-parent-2">
                <div className="why-you-section-img">
                  <img src={culture} alt="" />
                </div>
                <h3 className="why-you-side-heading">Culture</h3>
                <p className="careercomponent2-para">
                  An open, sensitive and evolving work atmosphere and
                  encouraging work culture is the pillar of our organisation.
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CareerComponent2;
