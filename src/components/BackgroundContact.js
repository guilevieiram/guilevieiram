import React from 'react';
import '../styles/BackgroundContact.css';
import * as animate from '../animations';

import blobSocialOrange from '../images/blob-social-orange.png'
import blobSocialBlue from '../images/blob-social-blue.png'

function BackgroundContact() {
    return(
        <div className="BackgroundContact">
            <div className="social-background-container">
                {animate.woble(<img className="blob-social-blue" src={blobSocialBlue} alt="" />)}
                {animate.woble(<img className="blob-social-orange" src={blobSocialOrange} alt="" />)}
            </div>
        </div>
    )
}

export default BackgroundContact