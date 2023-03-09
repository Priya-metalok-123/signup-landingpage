import React from "react";
import Footer from "./footer";
import "../stylesheet/roadmap.css";
import Homeheader from "./Homeheader";
import box from "../icons/box.png";
import boxtwo from "../icons/box-2.png";
import boxthree from "../icons/box-3.png";
import boxfour from "../icons/box-4.png";
import boxfive from "../icons/box-5.png";
import roadone from "../icons/road-one.png";
import roadtwo from "../icons/road-two.png";
import roadthree from "../icons/road-three.png";
import roadfour from "../icons/road-four.png";
import roadfive from "../icons/road-five.png";
import loops from "../background-images/loops-background.png";

const roadmapPage = () => {
  return (
    <div className="road">
      <div className="headbackk">
        <Homeheader />
      </div>

      <section>
        <div className="container">
          <div className="row roadmap">
            <div className="col-md-7 m-auto roadmap-head">
              <h1>Roadmap </h1>
              <p>
                The Development of our platform is scheduled in multiple phases
                to cater to the latest technological advances and consumer
                behaviour and demands of the future. Our users can look forward
                to exciting updates in Sportsverse in the near future.
              </p>
            </div>
            <p className="roadmap-underline"></p>
          </div>
        </div>
      </section>

      <div className="loops-img">
        <img src={loops} alt="" />
      </div>
      {/* <section>
        <div className="container">
          <div className="row road-map-section">
            <div className="col-lg-6">
              <div className="box-img">
                <img src={box} />
              </div>
              <div className="col-lg-11 trading-padding  trading">
                <h6>Phase 1</h6>
                <h1>Trading</h1>
                <p>
                  A hybrid trading platform combining the pros of profits from
                  trading and exhilaration of watching the match. Users can
                  participate in & gain from the victory of their favourite
                  teams.
                </p>
              </div>
              <div className="phase1-img">
                <img src={roadone} />
              </div>
            </div>
          </div>

          <div className="row road-map-section">
            <div className="col-lg-6 border-second"></div>
            <div className="col-lg-6">
              <div className="box2-img">
                <img src={boxtwo} />
              </div>
              <div className="col-lg-11 marketplace  trading">
                <h6>Phase 2</h6>
                <h1>
                  NFT
                  <br /> Marketplace
                </h1>
                <p>
                  An exclusive NFT marketplace where users can buy, own and even
                  trade their favourite match moments, exclusive merchandise,
                  match-winning elements like winning ball etc on a secured
                  network powered by blockchain and DLT.
                </p>
              </div>
              <div className="phase2-img">
                <img src={roadtwo} />
              </div>
            </div>
          </div>

          <div className="row road-map-section">
            <div className="col-lg-6 m-auto">
              <div className="box3-img">
                <img src={boxthree} />
              </div>
              <div className="col-lg-8 staking  trading">
                <h6>Phase 3</h6>
                <h1>Staking</h1>
                <p>
                  Rewarding the fan loyalty, Sportsverse can incorporate staking
                  where fans can earn rewards for holding cryptocurrencies or
                  NFTs of their favourite players, teams or more.
                </p>
              </div>
              <div className="phase3-img">
                <img src={roadthree} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="box4-img">
                <img src={boxfour} />
              </div>
              <div className="col-lg-9 merchandise m-auto trading">
                <h6>Phase 4</h6>
                <h1>Merchandise</h1>
                <p>
                  Also in our execution plan is rewarding our loyal customers
                  with exclusive merchandise that include signed jerseys, shoes
                  & more from their favourite players, match-winning sports
                  equipment and others against the NFTs and tokens they hold.
                </p>
              </div>
              <div className="phase4-img">
                <img src={roadfour} />
              </div>
            </div>
          </div>
        </div>
      </section> */}
       <section className="road-map-line-section">
        <div className="container">
          <div className="row road-map-section">
            <div className="col-lg-6">
              <div className="box-img animate-imgs">
                <img src={box} />
              </div>
              <div className="col-lg-11 trading-padding  trading">
                <h6>Phase 1</h6>
                <h1>Trading</h1>
                <p>
                  A hybrid trading platform combining the pros of profits from
                  trading and exhilaration of watching the match. Users can
                  participate in & gain from the victory of their favourite
                  teams.
                </p>
              </div>
              <div className="phase1-img ">
                <img src={roadone} className="animate-imgs"/>
              </div>
            </div>
          </div>

          <div className="row road-map-section">
            <div className="col-lg-6 border-second"></div>
            <div className="col-lg-6">
              <div className="box2-img animate-imgs">
                <img src={boxtwo} />
              </div>
              <div className="col-lg-11 marketplace  trading">
                <h6>Phase 2</h6>
                <h1>
                  NFT
                  <br /> Marketplace
                </h1>
                <p>
                  An exclusive NFT marketplace where users can buy, own and even
                  trade their favourite match moments, exclusive merchandise,
                  match-winning elements like winning ball etc on a secured
                  network powered by blockchain and DLT.
                </p>
              </div>
              <div className="phase2-img animate-imgs">
                <img src={roadtwo} />
              </div>
            </div>
          </div>

          <div className="row road-map-section">
            <div className="col-lg-6 m-auto">
              <div className="box3-img animate-imgs">
                <img src={boxthree} />
              </div>
              <div className="col-lg-8 staking  trading">
                <h6>Phase 3</h6>
                <h1>Staking</h1>
                <p>
                  Rewarding the fan loyalty, Sportsverse can incorporate staking
                  where fans can earn rewards for holding cryptocurrencies or
                  NFTs of their favourite players, teams or more.
                </p>
              </div>
              <div className="phase3-img animate-imgs">
                <img src={roadthree} />
              </div>
            </div>
          </div>
          <div className="row road-map-section">
            <div className="col-lg-6 border-second"></div>
            <div className="col-lg-6">
              <div className="box2-img animate-imgs">
              <img src={boxfour} />
              </div>
              <div className="col-lg-11 merchandise  trading-1">
                <h6>Phase 4</h6>
                <h1>
                  Merchandise
                </h1>
                <p>
                Also in our execution plan is rewarding our loyal customers with exclusive merchandise
                 that include signed jerseys, shoes & more from their favourite players, match-winning sports equipment and 
                 others against the NFTs and tokens they hold.

                </p>
              </div>
              <div className="phase4-img animate-imgs">
              <img src={roadfour} />
              </div>
            </div>
          </div>
          <div className="row road-map-section">
            <div className="col-lg-6 m-auto">
              <div className="box3-img animate-imgs">
                <img src={boxfive} />
              </div>
              <div className="col-lg-8   trading">
                <h6>Phase 5</h6>
                <h1>Metaverse</h1>
                <p>
                Creating a more immersive sports experience to sports 
                fans across the globe, we have in roadmap development of a sports exclusive metaverse where
                 players can enjoy the virtual experience of a live match, community building through virtual events and 
                 shopping experience in the NFT galleries, participate in matches in virtual stadiums, and more.

                </p>
              </div>
              <div className="phase3-img animate-imgs">
                <img src={roadfive} />
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="box4-img animate-imgs">
                <img src={boxfour} />
              </div>
              <div className="col-lg-9 merchandise m-auto trading">
                <h6>Phase 4</h6>
                <h1>Merchandise</h1>
                <p>
                  Also in our execution plan is rewarding our loyal customers
                  with exclusive merchandise that include signed jerseys, shoes
                  & more from their favourite players, match-winning sports
                  equipment and others against the NFTs and tokens they hold.
                </p>
              </div>
              <div className="phase4-img animate-imgs">
                <img src={roadfour} />
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <div className=" text-center download-paper">
        <a href="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/Whitepaper+Version+2_compressed.pdf"><button>download The White Paper</button></a>
      </div>

      <Footer />
    </div>
  );
};

export default roadmapPage;
