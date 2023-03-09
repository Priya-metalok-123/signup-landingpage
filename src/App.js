
import React, { useState, useEffect } from 'react';
import './App.css';
import "./components/fonts/ClashDisplay-Semibold.ttf";
// import "./components/fonts/ClashDisplay-Bold.ttf";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/pages/homePage';


function App() {
 

  return (
    <div className="App">
       <>
      
       
   <BrowserRouter>
     <Routes>

       <Route path='/' element={<HomePage/>}/>
       {/* <Route path='/learnPage1' element={<LearnPage1/>}/>
       <Route path='/learnPage2' element={<LearnPage2/>}/>
       <Route path='/fantokensPage' element={<FanTokens/>}/>
       <Route path='/companyPage' element={<CompanyPage/>}/>
       <Route path='/supportPage' element={<SupportPage/>}/>
       <Route path='/roadmapPage' element={<RoadmapPage/>}/>
       <Route path='/careerPage' element={<CareerPage/>}/> */}

     </Routes>
   </BrowserRouter>
      
    </>
    </div>
  );
}

export default App;
