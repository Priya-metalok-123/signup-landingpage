import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import "../stylesheet/home-header.css";
import logo from "../icons/sports-white-nik.png";
// import RPC from '../web3RPC.ts';
import RPC from "../../web3RPC.ts";
import { Web3Auth } from "@web3auth/web3auth";
import { getPublic } from "@toruslabs/eccrypto";
// import { loginServer, postAvatarURL } from "../services/userService";
import { loginServer, } from "../../services/userService";

export const Homeheader = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const clientId =
    "BK_TX48ntUieviViLOy8xwUhCirzTQI3uL7NwHsKkZk_-R7Zzpoxc2WNJDauT3OMRpolI7wlNRHUgT8SD0hjNDE";

  const [web3auth, setWeb3auth] = useState("");
  const [provider, setProvider] = useState("");
  const [idToken, setidToken] = useState("");
  const [pubKey, setpubKey] = useState("");
  const [userInfo, setUserInfo] = useState(null)
  const [showlogout, setShowlogout] = useState(false)

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    console.log("web response: ", web3authProvider);
  };

  const getId = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const id = await web3auth.authenticateUser();
    setidToken(id.idToken);
  };

  const afterLogin = async () => {
    const res = await loginServer(idToken, pubKey);
    console.log(res);
    setUserInfo(res.user)
    setShowlogout(true)
    return true;
  };

  // const senData = async () =>{
  //   const apiURl = "https://backend.sportsverse.cricket/users/login/"
  //   const object ={
  //     publicKey:pubKey,
  //     userName:userInfo.user
  //   }
  // }

  const getPrivateKey = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    return privateKey;
  };

  const getPubKey = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const app_scoped_privkey = await getPrivateKey();
    const app_pub_key = getPublic(
      Buffer.from(app_scoped_privkey.padStart(64, "0"), "hex")
    ).toString("hex");
    console.log(app_pub_key);
    setpubKey(app_pub_key);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    setProvider(null);
    setUserInfo(null)
    setShowlogout(false);
    await web3auth.logout();
  };

  useEffect(() => {
    const init2 = async () => {
      await getId();
      await getPubKey();
    };
    if (provider) init2();
  }, [provider]);

  useEffect(() => {
    const init2 = async () => {
      await getId();
      await getPubKey();
    };
    if (provider) init2();
  }, [provider]);

  useEffect(() => {
    const init3 = async () => {
      await afterLogin();
    };
    if (idToken && pubKey) {
      init3();
    }
  }, [idToken, pubKey]);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId: clientId,
          chainConfig: {
            chainNamespace: "eip155",
            chainId: "0x89", // hex of 80001, polygon testnet
            rpcTarget:
              "https://polygon-mainnet.g.alchemy.com/v2/Nk7m4OIjCz5bq189rdj83esGinAAL7MF",
          },
          authMode:"WALLET",
          uiConfig: {
            theme: "dark",
            loginMethodsOrder: ["facebook", "google"],
            appLogo:
              "https://metalok.io/wp-content/uploads/2022/06/image-1@2x.png", // Your App Logo Here
          },
          defaultLanguage: "en",
        });

        setWeb3auth(web3auth);

        await web3auth.initModal();
        if (web3auth.provider) {
          setProvider(web3auth.provider);
          console.log(provider);
        }
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    console.log(web3auth);
  }, [web3auth]);


  const [downpop, setDownpop] = useState(false)


  const downpopfun = () => {
    setDownpop(true)
  }

  const downpopfunclose = () => {
    setDownpop(false)

  }



  return (
    <main>
<div className={downpop ? 'd-block' : 'd-none'}>
        <div className="download-popup">
          <div className="download-popup-child">
            <div className="download-pop" onClick={downpopfunclose}>X</div>
            <h1>Mobile App Coming Soon. Sign up  and Join our Community to get Whitelisted.</h1>
          </div>
        </div>
      </div>

      <header className="headerone">
        <img src={logo} alt="logo" className="logo-res" />
        <div className="navone">
          <nav ref={navRef} >
            <a>
              <NavLink to="/">Home</NavLink>
            </a>
            {/* <a>
              <NavLink to="/learnPage1">Learn</NavLink>
            </a> */}


         <div className="dropdown mx-auto" >
              <button className="dropbtn1 mr-4" >Learn</button>
              <div className="dropdown-content">
               <NavLink to="/learnPage1">Learn</NavLink>
                <NavLink to="/learnPage2">Sportsverse101</NavLink>

              </div>
            </div>



            {/* <a>
              <NavLink to="/learnPage2">Sportsverse101</NavLink>
            </a> */}
            <a className="">
              <NavLink to="/fantokensPage">Fan Tokens</NavLink>
            </a>
         
            <a>
              <NavLink to="/roadmapPage">Roadmap</NavLink>
            </a>
  
            <div className="btn-div">
              <button className="download-btn-1" onClick={downpopfun}>Download App</button>

              {showlogout == false && <button className="login-btn" onClick={login}> 
                SIGN UP
              </button>}
              {showlogout && <button className="login-btn">{userInfo.name}</button>}

            </div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
        </div>
    
      </header>
    </main>
  );
};
export default Homeheader;
