import React from 'react';
import '../styles/Background1.css';
import * as animate from '../animations';

import topBlobBlue from '../images/blob-top-blue.png';
import topBlobOrange from '../images/blob-top-orange.png';

import bottomBlobBlue from '../images/blob-bottom-blue.png';
import bottomBlobOrange from '../images/blob-bottom-orange.png';

import arrows from '../images/arrows.png';
import arrowsMobile from '../images/arrows-mobile.png';

function Background1 () {

    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        })

    };

    return (
        <div className="Background1">

            {animate.fromUp(
                <>
                    <div className='blob-top-blue'>
                        {animate.upDown(<img src={topBlobBlue} alt="" />)}
                    </div>
                    <div className='blob-top-orange'>
                        {animate.upDown(<img src={topBlobOrange} alt="" />)}
                    </div>
                </>, 4
            )}

            {animate.fromLeft(
                <>
                    <div className='blob-bottom-blue'>
                        {animate.woble(<img src={bottomBlobBlue} alt="" />)}
                    </div>
                    <div className='blob-bottom-orange'>
                        {animate.woble(<img src={bottomBlobOrange} alt="" />)}
                    </div>
                </>, 4
            )}

            
            {animate.fromDown(
                <>
                    <div className="arrows" onClick={scrollDown}>
                        {animate.upDown(
                            <img src={arrows} alt="" />,
                            animate.getDelay(1,0)
                        )}
                        
                    </div>

                    <div className="arrows arrows-mobile" onClick={scrollDown}>
                        {animate.upDownLight(
                            <><h3>Scroll</h3>
                            <img src={arrowsMobile} alt="" /></>,
                            animate.getDelay(1,0)
                        )}
                        
                    </div>
                </>, 4.2
            )}


        </div>
    )   

}

export default Background1;