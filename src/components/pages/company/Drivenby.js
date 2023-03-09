import React from 'react'
import "../../stylesheet/company/drivenby.css";
import fullyicons from "../../icons/fully-icon.png";


const Drivenby = () => {
    return (
        <div >
            <div className=' driven-by-section'>
                <div className='text-center'>
                    <h1 className='driven-by-safety-heading'>We’re Driven By safety</h1>
                </div>
                <div className='driven-by-main-parent'>
                    <div className='driven-by-parent'>
                        <div className='safe-section '>
                            <div className='box-content'>
                                <img src={fullyicons} alt="" />
                                <h1>safe</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </div>
                        </div>
                        <div className='secure-section'>
                           <div className='box-content'>
                            <img src={fullyicons} alt="" />
                            <h1>Secure</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                           </div>
                        </div>
                        <div className='accessible-section'>
                           <div className='box-content'>
                                 <img src={fullyicons} alt="" />
                                <h1>Accessible</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drivenby