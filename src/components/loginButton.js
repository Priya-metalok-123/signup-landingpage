
import React, { useState, useEffect } from 'react';

// import RPC from "./web3RPC.ts";
// import RPC from "../../web3RPC.ts"
import RPC from '../web3RPC.ts';
import {Web3Auth} from "@web3auth/web3auth";
import { getPublic } from "@toruslabs/eccrypto";
import { loginServer, postAvatarURL } from "../services/userService";

function LoginButton() {
  const clientId = "BK_TX48ntUieviViLOy8xwUhCirzTQI3uL7NwHsKkZk_-R7Zzpoxc2WNJDauT3OMRpolI7wlNRHUgT8SD0hjNDE";

  const [web3auth, setWeb3auth] = useState("");
  const [provider, setProvider] = useState("");
  const [idToken, setidToken] = useState("");
  const [pubKey, setpubKey] = useState("");

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);    
  };

  const getId = async() => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const id = await web3auth.authenticateUser();
    setidToken(id.idToken);
  };

  const afterLogin = async () => {
    const res =  await loginServer(idToken,pubKey);
    console.log(res);
    return true;
    
  }

  const getPrivateKey = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    return privateKey;
  };

  const getPubKey= async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const app_scoped_privkey = await getPrivateKey();
    const app_pub_key = getPublic(Buffer.from(app_scoped_privkey.padStart(64, "0"), "hex")).toString("hex");
    console.log(app_pub_key);
    setpubKey(app_pub_key);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  useEffect(() => {
    const init2 = async () => {
      await getId();
      await getPubKey();
    }
    if(provider)
      init2();
    
  },[provider])

  useEffect(() => {
    const init2 = async () => {
      await getId();
      await getPubKey();
    }
    if(provider)
      init2();
    
  },[provider])

  useEffect(() => {
    const init3 = async () => {
      await afterLogin();
    }
    if(idToken && pubKey)
    {
      init3();
    }
  },[idToken,pubKey])

  useEffect(() => {
    
    const init = async () => {
      try {

      const web3auth = new Web3Auth({
        clientId:clientId,
        chainConfig: {
          chainNamespace: "eip155",
          chainId: "0x89", // hex of 80001, polygon testnet
          rpcTarget: "https://polygon-mainnet.g.alchemy.com/v2/Nk7m4OIjCz5bq189rdj83esGinAAL7MF",
        },
        authMode:"WALLET",
        uiConfig: {
          theme: "dark",
          loginMethodsOrder: ["facebook", "google"],
          appLogo: "https://metalok.io/wp-content/uploads/2022/06/image-1@2x.png", // Your App Logo Here
        },
        defaultLanguage: "en",
        
      });

      setWeb3auth(web3auth);

      await web3auth.initModal();
        if (web3auth.provider) {
          setProvider(web3auth.provider);
          console.log(provider)
        };
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  useEffect(()=>{
    console.log(web3auth)
  },[web3auth])

  return (
    <div className="App">
       <>
      <button onClick={login} className="card">
        Login
      </button>
      
    </>
    </div>
  );
}

export default LoginButton;
