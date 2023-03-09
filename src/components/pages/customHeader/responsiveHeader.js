// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

import { NavLink } from 'react-router-dom';
// import "../stylesheet/header.css";
import './responsive.css';

// import logoblue from '../icons/logo-blue.png';

function Header() {
	

	return (
		<header class="header-div">
        <div class="nav-section">
          <div class="logo-section">
            <img src="https://metalok.io/wp-content/uploads/2022/06/image-1@2x.png" alt="" />
            {/* <h1>FILMABLE</h1> */}
          </div>
          <div class="links">
            <ul class="menu-links">
              <li id="nav-link1"><a href="#">Home</a>     </li>
              <li id="nav-link2"><a href="#about">Learn</a>    </li>
              <li id="nav-link3"><a href="#features">Fan Tokens</a> </li>
             
              <li id="nav-link4"><a href="#teams">Company</a>    </li>
              <li id="nav-link5"><a href="#teams">Support</a>    </li>
              <li id="nav-link6"><a href="#teams">Roadmap</a>    </li>
               {/* <div class="contact-btn" id="nav-link7">
                <button ><a href="#"> Contact</a></button>
              </div>  */}
          </ul>
          </div>
          <div class="main-burger-btn">
          <div class="burger">
            <div class="line1 l1"></div>
            <div class="line2 l2"></div>
            <div class="line3 l3"></div>
          </div>
          <div class="contact-btn" id="nav-link7">
            <button ><a href="#"> Contact</a></button>
          </div>
        </div>
        </div>
      </header>
		
	);
}

export default Header;