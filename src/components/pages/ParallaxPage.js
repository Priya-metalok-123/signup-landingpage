import React from 'react';
import '../stylesheet/style.css';
import screen1 from "../background-images/screen1.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export const ParallaxPage = () => {
  return (
    <div>
        <div>

        </div>
        <div className="container margi">

        {/* <div className='animation zoom-in'> */}
            <section className="background">
                
                <div className="container content-wrapper">
                 <div className='row m-auto' >
                    <div className='col-md-6'>
                    <p className="content-title">
                    <img src={screen1} alt="" />
                    </p>
                    </div>
                    <div className='col-md-6'>
                    <p className="content-subtitle">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut massa mattis nibh semper pretium.</p>
                    </div>
                 </div>
                </div>
                
            </section>
            {/* </div> */}

            {/* <div className='animation zoom-out'> */}
            <section className="background">
                
                <div className="content-wrapper">
                 <p className="content-title">Cras lacinia non eros nec semper.</p>
                 <p className="content-subtitle">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut massa mattis nibh semper pretium.</p>
                </div>
                
            </section>
            {/* </div> */}

            <section className="background">
                <div className="content-wrapper">
                 <p className="content-title">Etiam consequat lectus.</p>
                 <p className="content-subtitle">Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at nibh aliquam dapibus.</p>
                </div>
            </section>
        </div> 

         
    </div>
  )
}
