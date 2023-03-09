import React from 'react'
import CareerComponent1 from '../pages/career/careerComponent1';
import CareerComponent2  from '../pages/career/careerComponent2';
import CareerComponent3 from '../pages/career/careerComponent3';
import CareerComponent5 from '../pages/career/careerComponent5';
import CareerComponent4 from '../pages//career/careerComponent4';
import CareerComponent6 from '../pages//career/careerComponent6';
import CareerComponent7 from '../pages//career/careerComponent7';
import Header from "./header";
import Footer from '../pages/footer';


const CareerPage = () => {
  return (
   <>
      <div className="page-head">
        <Header/>
      </div>
       <CareerComponent1 />
       <CareerComponent2 />
       <CareerComponent3 />
       <CareerComponent4 />
       <CareerComponent5 />
       <CareerComponent6 />
       <CareerComponent7 />
       <Footer />
   
   </>
  )
}

export default CareerPage