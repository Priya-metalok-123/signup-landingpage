import React from 'react'
import '../stylesheet/teamsslide.css';
import Slider from "react-slick";

import graph from "../icons/delhi-g.png";



import srh from '../icons/srh-logo.png';
import delhi from "../icons/delhi.png";
import kkr from '../icons/kkr-logo.png';
import rr from '../icons/royal-logo.png';


import csk from '../icons/csk-logo.png';
import mumbai from '../icons/mumbai-logo.png';
import gujarat from '../icons/gujarat-logo.jpg';
import rcb from '../icons/rcb-logo.png';
import punjab from '../icons/punjab.png';
import lucknow from '../icons/lucknow-logo.png';


const TeamsSlide = () => {
    
  const team_scroll = [
    {
      team_img: srh,
      team_head: "HSVC",
      team_name: "Sunrisers Hyderabad",
      team_graph: graph,
      win_dollar: "$5.54",
      winning_percent: "-0.41%",
    },
    {
      team_img: kkr,
      team_head: "KSVC",
      team_name: "Kolkata Knight Riders",
      team_graph: graph,
      win_dollar: "$5.55",
      winning_percent: "-0.42%",
    },
    {
      team_img: rr,
      team_head: "RSVC",
      team_name: "Rajasthan Royals",
      team_graph: graph,
      win_dollar: "$5.56",
      winning_percent: "-0.43%",
    },
    {
      team_img: csk,
      team_head: "CSVC",
      team_name: "Chennai Super Kings",
      team_graph: graph,
      win_dollar: "$5.57",
      winning_percent: "-0.44%",
    },
    {
      team_img: mumbai,
      team_head: "MSVC",
      team_name: "Mumbai Indians",
      team_graph: graph,
      win_dollar: "$5.58",
      winning_percent: "-0.45%",
    },
    {
      team_img: gujarat,
      team_head: "GSVC",
      team_name: "Gujarat Titans",
      team_graph: graph,
      win_dollar: "$5.58",
      winning_percent: "-0.45%",
    },
    {
      team_img: rcb,
      team_head: "RSVC",
      team_name: "Royal Challengers Bangalore",
      team_graph: graph,
      win_dollar: "$5.58",
      winning_percent: "-0.45%",
    },
    {
      team_img: punjab,
      team_head: "PSVC",
      team_name: "Punjab Kings",
      team_graph: graph,
      win_dollar: "$5.59",
      winning_percent: "-0.46%",
    },
    {
      team_img: delhi,
      team_head: "DSVC",
      team_name: "Delhi Capitals",
      team_graph: graph,
      win_dollar: "$5.59",
      winning_percent: "-0.46%",
    },
    {
      team_img: lucknow,
      team_head: "LSVC",
      team_name: "Lucknow Super Giants",
      team_graph: graph,
      win_dollar: "$5.59",
      winning_percent: "-0.46%",
    },
   
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [

      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

 
    return (
    <>
   
    <div className="text-center">
    <marquee
      width="80%"
      height="40px"
      style={{ color: "white" }}
      direction="left"
    >
      This IPL we’re stronger with the association with Sportsverse. Enjoy
      the game of cricket and earn while experiencing the edge-of-the-seat
      matches between the champions of the game. This IPL we’re stronger
      with the association with Sportsverse. Enjoy the game of cricket and
      earn while experiencing the edge-of-the-seat matches between the
      champions of the game.
    </marquee>
  </div>

  <Slider {...settings} className="team-scroll-section">
    {team_scroll.map((teamscroll) => (
      <div>
        <div className="team-scroll-parent">
          <div className="team-scroll-child">
            <div className="team-logo-img">
              <img src={teamscroll.team_img} alt="" />
            </div>
            <div>
              <div className="team-scroll-heading">
                {teamscroll.team_head}
              </div>
              <div className="team-name-text">{teamscroll.team_name}</div>
            </div>
            <div className="team-graph-img">
              <img src={teamscroll.team_graph} alt="" />
            </div>
            <div className="team-win-dollar">
              <p className="dollar">{teamscroll.win_dollar}</p>
              <p className="percent">{teamscroll.winning_percent}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>



  </>


  )
}

export default TeamsSlide