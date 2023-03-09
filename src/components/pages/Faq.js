import React from "react";
import Accordion from "react-bootstrap/Accordion";

export const Faq = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row px-2">
          <div className="col-md-10 m-auto according-faq p-md-5">
            <h3 className="the-basic-heading text-center">FAQ's</h3>
            <p className="the-basic-border-down"></p>
            <Accordion defaultActiveKey="0" flush  >
              <Accordion.Item eventKey="0">
                <Accordion.Header className="collaps-text faq-para">
                  What are Fan tokens?
                </Accordion.Header>
                <Accordion.Body>
                  Fan tokens are blockchain secured ERC20 tokens based on the
                  polygon chain.Sportsverse fantokens represent a digital asset
                  that facilitates the user to buy/sell/trade based on the
                  team’s performance in the Sportsverse marketplace.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="faq-para">
                <Accordion.Header>
                  What is a Digital Wallet? Are they necessary to buy NFTs?
                </Accordion.Header>
                <Accordion.Body>
                  Digital wallet is a software, electronic device or an online
                  application that enables transactions online. Digital wallets
                  facilitate secured transactions, valuable customer insights
                  and access to rewards such as cashback, coupons and loyalty
                  programs. To have a secure NFT collection, crypto-supported
                  digital wallets are necessary. These wallets generate a
                  private key to the address of the asset ensuring secured, safe
                  and unique ownership of the asset.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="faq-para">
                <Accordion.Header>
                  How to create and open a Metamask Wallet?
                </Accordion.Header>
                <Accordion.Body>
                  Download the Metamask for chrome from the website Metamask.io.
                  An extension for the metamask will be created on your chrome
                  browser. Click on the extension, a page will open instructing
                  the user to follow certain steps as prompted. Follow these
                  instructions to create the wallet. Refer to the youtube link
                  from our website: https://youtu.be/KXzflw2yCCc
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="faq-para">
                <Accordion.Header>
                  Which Cryptocurrencies can be used for Trading on Sportsverse?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="faq-para">
                <Accordion.Header>
                  Are my transactions secured on the Sportsverse Platform?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! All tokens and transactions on the Sportsverse platform
                  are reinforced by a secured blockchain supported Polygon
                  Network. Decentralized, transparent and secured network is the
                  unique feature of blockchain technology.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className="faq-para">
                <Accordion.Header>
                  When will the NFT marketplace open on Sportsverse?
                </Accordion.Header>
                <Accordion.Body>
                  Currently Sportsverse has just launched the fan tokens for the
                  IPL season. We have in plan to launch an NFT Marketplace in
                  phase 2 of our product i.e, Sportsverse.
                </Accordion.Body>

                {/* <div className='text-center view-all'> <p>View All </p><p style={{fontSize:'30px'}}>&rarr;</p> </div> */}
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
