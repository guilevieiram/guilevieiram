import React from 'react';
import '../styles/Background1.css'

import topBlobBlue from '../images/blob-top-blue.png';
import topBlobOrange from '../images/blob-top-orange.png';

import bottomBlobBlue from '../images/blob-bottom-blue.png';
import bottomBlobOrange from '../images/blob-bottom-orange.png';

import arrows from '../images/arrows.png';
import arrowsMobile from '../images/arrows-mobile.png';

function Background1 () {
    return (
        <div className="Background1">

            <div className='blob-top-blue'><img src={topBlobBlue} alt="" /></div>
            <div className='blob-top-orange'><img src={topBlobOrange} alt="" /></div>

            <div className='blob-bottom-blue'><img src={bottomBlobBlue} alt="" /></div>
            <div className='blob-bottom-orange'><img src={bottomBlobOrange} alt="" /></div>

            <div className="arrows"><img src={arrows} alt="" /></div>

            <div className="arrows arrows-mobile">
                <h3>Scroll</h3>
                <img src={arrowsMobile} alt="" />
            </div>

        </div>
    )   

}

export default Background1;