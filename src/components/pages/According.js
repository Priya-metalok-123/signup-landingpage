import React from "react";
import {useState} from 'react'
import "../stylesheet/according.css";


const According = () => {
  const [accord1, setAccord1] = useState(false);
  const [accord2, setAccord2] = useState(false);
  const [accord3, setAccord3] = useState(false);
  const [accord4, setAccord4] = useState(false);
  const [accord5, setAccord5] = useState(false);

  let accordClick1 = () => {
    setAccord1(!accord1);
  };

  let accordClick2 = () => {
    setAccord2(!accord2);
  };

  let accordClick3 = () => {
    setAccord3(!accord3);
  };
  let accordClick4 = () => {
    setAccord4(!accord4);
  };
  let accordClick5 = () => {
    setAccord5(!accord5);
  };

  return (
    <>
      <div className="container accordion-section">
        <div className="accordion-parent1 "onClick={accordClick1}>
          <div className="d-flex justify-content-between" >
            <h3 className="head-h">What is the difference between Token and a Sport token? </h3>
            <h3 className={accord1 ? "cross" :"display"} onClick={accordClick1} style={{ color: "#6A6D9E",cursor:"pointer" }}> + </h3>
          </div> 
        </div>
        <div className={accord1 ? ('para-rev') : ('d-none')}>
          <p className="head-p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium sit? </p> 
        </div> 

        <div className="accordion-parent1 p-3 " onClick={accordClick2}>
          <div className="d-flex justify-content-between">
            <h3 className="head-h">Who can open a draft account ?</h3>
            <h3 className={accord2 ? "cross" :"display"} onClick={accordClick2} style={{ color: "#6A6D9E",cursor:"pointer" }}> + </h3>
          </div> 
        </div>
        <div className={accord2 ? ('para-rev ') : ('d-none ')}>
         <p className="head-p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium sit? </p> 
        </div> 
 
        <div className="accordion-parent1 p-3" onClick={accordClick3}>
          <div className="d-flex justify-content-between" >
            <h3 className="head-h">What if we withdraw money abroad ?</h3>
            <h3 className={accord3 ? "cross" :"display"} onClick={accordClick3} style={{ color: "#6A6D9E",cursor:"pointer" }}> + </h3>
          </div>  
        </div>
        <div className={accord3 ? ('para-rev') : ('d-none')}>
         <p className="head-p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium sit? </p>  
        </div>

        <div className="accordion-parent1 p-3 "onClick={accordClick4}>
          <div className="d-flex justify-content-between" >
            <h3 className="head-h"> Can I cancel my subscription or switch to another account anytime ?</h3>
            <h3 className={accord4 ? "cross" :"display"} onClick={accordClick4} style={{ color: "#6A6D9E",cursor:"pointer" }}> + </h3>
          </div> 
        </div>
        <div className={accord4 ? 'para-rev' : 'd-none'}>
         <p className="head-p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium sit? </p> 
        </div> 
          
        <div className="accordion-parent1 p-3 " onClick={accordClick5}>
          <div className="d-flex justify-content-between">
            <h3 className="head-h">What happens if I withdraw more than $250 ?</h3>
            <h3 className={accord5 ? "cross" :"display"} onClick={accordClick5} style={{ color: "#6A6D9E",cursor:"pointer" }}> + </h3>
          </div>
        </div>
        <div className={accord5 ? 'para-rev' : 'd-none'}>
         <p className="head-p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium sit? </p> 
        </div>



      </div>  
    </>
  );
};

export default According;
