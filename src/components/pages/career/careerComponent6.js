import React from 'react'
import "../../stylesheet/carrierStylesheet/careercomponent6.css";
import checked_img from "../../icons/tick-mark-icon.png";



const CareerComponent6 = () => {
  return (
    <div className='section'>
        <div className='container'>
            <div className='life-sportsverse-section'>
                <div className='row'>
                    <div className='col-md-4 life-heading'>
                       <h1 >Life At Sportsverse </h1>
                    </div>
                    <div className=' col-md-7 my-3 m-auto'>
                        <p className='life-para'> We guarantee an enlightening, inclusive and edification journey with our company. Our clients, colleagues and partners create a friendly and open atmosphere, encouraging discussion of ideas, innovations and concepts.
 </p>
                    </div>
                </div>
                <div className='row my-4'>
                    <div className='col-md-3 d-flex gap-4 '>
                        <img src={checked_img} alt="" className='checked-img'/>
                        <h4 className='life-sub-heading'>Innovation</h4>
                    </div>
                    <div className='col-md-3 d-flex gap-4 pl-md-5 pl-auto my-md-auto my-3'>
                        <img src={checked_img} alt="" className='checked-img'/>
                        <h4 className='life-sub-heading'>Safe</h4>
                    </div>
                    <div className='col-md-3 d-flex gap-4'>
                        <img src={checked_img} alt="" className='checked-img'/>
                        <h4 className='life-sub-heading'>Growth</h4>
                    </div>
                    <div className='col-md-3 d-flex gap-4 my-md-auto my-3'>
                        <img src={checked_img} alt="" className='checked-img'/>
                        <h4 className='life-sub-heading'>Reliable
</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CareerComponent6