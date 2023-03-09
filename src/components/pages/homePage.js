// import React from "react";
import React, { useEffect, useRef, useState } from "react";
import logo from "../icons/sports-white-nik.png";
// import RPC from '../web3RPC.ts';
import RPC from "../../web3RPC.ts";
import { Web3Auth } from "@web3auth/web3auth";
import { getPublic } from "@toruslabs/eccrypto";
// import { loginServer, postAvatarURL } from "../services/userService";
import { loginServer, } from "../../services/userService";
import "../stylesheet/homestyle.css";
import "../stylesheet/header.css";
import "../stylesheet/common.css";
import "../stylesheet/downloadpopup.css";
import buybg from "../background-images/buysell-bg-1.png";
import android from "../icons/android.png";
import { Homeheader } from "./Homeheader";

export const HomePage = () => {
  // sigin up satrt here 
  const clientId =
  "BK_TX48ntUieviViLOy8xwUhCirzTQI3uL7NwHsKkZk_-R7Zzpoxc2WNJDauT3OMRpolI7wlNRHUgT8SD0hjNDE";

const [web3auth, setWeb3auth] = useState("");
const [provider, setProvider] = useState("");
const [idToken, setidToken] = useState("");
const [pubKey, setpubKey] = useState("");
const [userInfo, setUserInfo] = useState(null)
const [showlogout, setShowlogout] = useState(false)

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  const [downpop, setDownpop] = useState(false)


  const downpopfun = () => {
    setDownpop(true)
  }

  const downpopfunclose = () => {
    setDownpop(false)
    


    const downpopfun = () => {
      setDownpop(true)
    }
  
    const downpopfunclose = () => {
      setDownpop(false)
  
    }
  }  

    

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


 
  
  return (
    <div>
      <div className={downpop ? 'd-block' : 'd-none'}>
        <div className="download-popup">
          <div className="download-popup-child">
            <div className="download-pop" onClick={downpopfunclose}>X</div>
            <h1>Mobile App Coming Soon. Sign up  and Join our Community to get Whitelisted. </h1>
          </div>
        </div>
      </div>

      <div className="headbackk">
        <Homeheader />
      </div>
      <div className="home-back">
        <div className="background-lines">
          <div className="container">
            {/* <img src={logo} alt="logo" /> */}
            <div className="row">
              <div className="col-md-6 col-sm-12 pt-5">
                <h1 className="indias-heading-text pt-5">
                  India’s #<span className="span-heading-text">1</span>st
                </h1>
                <h1 className="indias-heading-text">
                  <span className="span-heading-text">Sports</span>
                  Trading{" "}
                </h1>{" "}
                <h1 className="indias-heading-text"> Platform</h1>
              
                <p className="watch">
                SignUp now to claim your free fan tokens
                </p>
                <div className="india-best-button">
                  <button className="best-btn" onClick={downpopfun}>
                    <h3 className="down-custom-2">download app</h3>
                    {/* <img className="img1" src={apple} /> */}
                    <img className="img1" src={android} />
                  </button>
                  
              {showlogout == false && <button className="login-btn sigin-up-custom" onClick={login}> 
                SIGN UP
              </button>}
              {showlogout && <button className="login-btn">{userInfo.name}</button>}
                </div>
                <br></br>
                
              </div>
              <div className="col-md-6 col-sm-12 pb-8">
                <img src={buybg} alt="image" className="buy-bg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
