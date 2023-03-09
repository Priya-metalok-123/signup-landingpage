import React from "react";
import "../stylesheet/learnPage1.css";
import "../stylesheet/depends.css";
import android from "../icons/android.png";
import tick from "../icons/tick-mark-icon.png";
import righttick from "../icons/tick.png";
import Depends from "./Depends";
import Header from "./header";
import Footer from "./footer";
import { Faq } from "./Faq";

import {useState} from 'react'

export default function LearnPage1() {



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
                <Header />
            </div>
            <div className="pt-5 pb-5">
                <div className="container  learn-bg p-5 ">
                    <h1 className="learn-the-spts-heading">
                        Learn the Sportsverse<br></br> Advantage
                    </h1>
                    <p className="learn-the-spts-text">
                        Get a different perspective of Sports and discover new ways of
                        revenue through our
                        Sportsverse. Explore the Sportsverse to know and learn more about
                        your favourite
                        Sports, trading advantages, NFTs and exclusive Sports merchandise.
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
            <section>
                <div className="container">
                    <div className="row sports pt-4 pl-3">
                        <div className="col-lg-5 pl-0">
                            <h3 className="sports-trade-heading">

                                Sports trade vs <br></br>
                                Sport betting which <br></br>is better?
                            </h3>
                        </div>
                        <div className="col-lg-7 pl-0">
                            <p className="sports-trade-text">
                                The greatest misconception concerning Sports trading and platforms like Sportsverse is
                                that they are misinterpreted with betting. Trading involves an analytical and logical procedure of
                                interpreting the past and current information available to own or trade off a financial asset, in
                                case of sportsverse the asset can be the team token. While betting is placing the odds on a particular
                                team and winning or losing the betting amount according to the team’s performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <br></br>
            {/* table paragraph1 */}
            <div className="container">
                <div className="row t-para">
                    <div className="col-lg-6 s-trade px-0">
                        <table>
                            <tr>
                                <th>Sports Trade</th>
                            </tr>
                            <tr>
                                <td>
                                    <ul className="trade-list p-md-4 p-0">
                                        <li>
                                            <div className="d-flex "><span className="trade-span">. </span>
                                                <p >Involves analysis and interpretation of previous and current information.
                                                    <span className="trade-tick">
                                                        <img src={righttick} />
                                                    </span>
                                                </p>

                                            </div>



                                        </li>

                                        <li>
                                            <div className="d-flex "><span className="trade-span">. </span>
                                                <p>Has more legitimacy with state legality.
                                                    <span className="trade-tick">
                                                        <img src={righttick} />
                                                    </span>
                                                </p>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="d-flex "> <span className="trade-span">. </span>

                                                <p>
                                                    Consistent income without win or loss of
                                                    assets for the trader
                                                    <span className="trade-tick">
                                                        <img src={righttick} />
                                                    </span>
                                                </p>
                                            </div>


                                        </li>
                                        <li>
                                            <div className="d-flex "><span className="trade-span">. </span>

                                                <p>Sports trading is a long term investment.
                                                    <span className="trade-tick">
                                                        <img src={righttick} />
                                                    </span>
                                                </p>
                                            </div>



                                        </li>
                                        <li>
                                            <div className="d-flex "> <span className="trade-span">. </span>

                                                <p> Slower but sustainable profits with minimal
                                                    risks.
                                                    <span className="trade-tick">
                                                        <img src={righttick} />
                                                    </span>
                                                </p>
                                            </div>


                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-lg-6 s-trade1 px-0">
                        <table>
                            <tr>
                                <th>Betting</th>
                            </tr>
                            <tr>
                                <td>
                                    <ul className="trade-list p-md-4 p-0">
                                        <li>
                                            <p className="d-flex"><span className="trade-span">. </span>More importance to instinct and playing with the odds.</p>



                                        </li>

                                        <li>
                                            <p className="d-flex"><span className="trade-span">. </span>Less Regulatory and legal legitimacy.</p>



                                        </li>
                                        <li>
                                            <p className="d-flex"> <span className="trade-span">. </span>The final outcome for the better is either a win or a loss.</p>



                                        </li>
                                        <li>
                                            <p className="d-flex"><span className="trade-span">. </span>Betting is a short term gain or loss investment.</p>



                                        </li>
                                        <li>
                                            <p className="d-flex"><span className="trade-span">. </span>Quick results with high risks. Profits only when
                                                odds are in the better's favour.</p>



                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="border-table-bottom-ending "></p>
            </div>
            {/* table paragraph1 */}
            <br></br>
            <br></br>

            <div className="container">
                <div className="row different-how-can-you-section">
                    <div className="col-xl-4 justify-content-start">
                        <h2 className="different-ways-heading">
                            How can you earn money from Sports-trading platforms
                        </h2>
                        <ol className="ol-text1">
                            <li className="d-flex" ><span className="pr-2">1.</span> <span >NFTs can include those of players,match moents or winning moments.</span> </li>
                            <li className="d-flex" ><span className="pr-2">2.</span> <span >Trading & Staking rewards for fan loyalty.</span> </li>
                            <li className="d-flex" ><span className="pr-2">3.</span> <span >Sports digital collectibles include NFTs of sports jerseys, balls and other sports equipment.</span></li>
                        </ol>
                    </div>
                    <div className="col-xl-1"></div>
                    <div className="col-xl-7">
                        <p className="different-text">
                            The advent of digital transformation and high-end technologies have
                            opened up new avenues of financial income through digital medium and
                            digital currency via sports. Blockchain technology, NFTs of Sportspersons 
                            and sports elements, trading & staking of sports digital collectibles are
                            currently the most lucrative methods of revenue generation.
                        </p>
                        <div className="row ">
                            <div className="col-md-6 ">
                                <div className="tick-section pt-3">
                                    <img src={tick} alt="icon" className="" />
                                    <p className="different-text-tick">Trading</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tick-section pt-3">
                                    <img src={tick} alt="icon" className="" />
                                    <p className="different-text-tick">Staking</p>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6">
                                <div className="tick-section pt-3">
                                    <img src={tick} alt="icon" className="" />
                                    <p className="different-text-tick">NFT Utility</p>
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="tick-section pt-3">
                                    <img src={tick} alt="icon" className="" />
                                    <p className="different-text-tick">incididunt ut labore</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="border-table-bottom-ending "></p>
            </div>
            <div className="container different-how-can-you-section ">
                <div className="row px-2">
                    <div className="col-md-5">
                        <h1 className="different-ways-heading">
                            What are your odds <br></br>of doing a good <br></br>trade?
                        </h1>
                        <p className="different-text  p-md-0 p-2">
                            In Sportsverse, the price of the team tokens
                            depends on the performance of the team during
                            a live match. But by the nature of trading itself,
                            loss to traders are mitigated to a great level
                            ensuring the outcome of the trade most
                            probably ends in a profit to traders.
                        </p>
                    </div>
                    <div className="col-md-6 m-auto ">
                        <p className="pt-4 d-flex"><img src={tick} alt="icon" className="" style={{ width: '34px', height: '34px' }} /><span class="what-are-your-section-ol-list">High Probability of Profits at the end of the trade</span></p>
                        <p className="pt-4 d-flex"><img src={tick} alt="icon" className="" style={{ width: '34px', height: '34px' }} /><span class="what-are-your-section-ol-list">Vast Scope for Sports Trading</span></p>
                        <p className="pt-4 d-flex"> <img src={tick} alt="icon" className="" style={{ width: '34px', height: '34px' }} /><span class="what-are-your-section-ol-list">Immersive experience of the game while
                            profiting from team’s victory</span></p>
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="border-table-bottom-ending "></p>
            </div>



            <Depends />



            <br></br>
            <br></br>
            <Faq />
            {/* <According /> */}
            <br></br>
            <Footer />
        </>
    );
}
