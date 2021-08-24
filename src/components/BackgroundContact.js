import React from 'react';
import '../styles/BackgroundContact.css';


import blobSocialOrange from '../images/blob-social-orange.png'
import blobSocialBlue from '../images/blob-social-blue.png'

function BackgroundContact() {
    return(
        <div className="BackgroundContact">
            <div className="social-background-container">
                <img className="blob-social-blue" src={blobSocialBlue} alt="" />
                <img className="blob-social-orange" src={blobSocialOrange} alt="" />
            </div>

        </div>
    )
}

export default BackgroundContact