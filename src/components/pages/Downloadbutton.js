import React from 'react';
import '../stylesheet/button.css'; 

import apple from '../icons/apple.png';
import android from '../icons/android.png';



export const Downloadbutton = () => {
  return (
    <div>
        {/* button */}
        <div className="download-button">
            <button className="down-btn">
                <h3>download app</h3>
                <img className="img1" src={apple}/>
                <img className="img2" src={android}/>
            </button>                         
        </div>
    </div>
  )
}
