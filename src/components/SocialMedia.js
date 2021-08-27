import React from 'react';
import '../styles/SocialMedia.css';
import * as animate from '../animations';

import socialMediaData from '../data/social-media.json'

import blobSocialMobileOrange from '../images/blob-social-mobile-orange.png';
import blobSocialMobileBlue from '../images/blob-social-mobile-blue.png';

function SocialMedia() {
    console.log(socialMediaData[0].mediaLink)
    return (
        <div className="SocialMedia">
            <div className="social-background-mobile">
                {animate.woble(<img className="blob-social-mobile-blue" src={blobSocialMobileBlue} alt="" />)}
                {animate.woble(<img className="blob-social-mobile-orange" src={blobSocialMobileOrange} alt="" />)}
            </div>

            <div className="social-media-column">
                
                {socialMediaData.map(({tag, image, link}) => (
                    <div key={link} className="social-media-row" onClick={() => window.location.href = link}>
                        <p>{tag}</p>
                        <img src={image} alt="" />
                    </div>
                ))}

            </div>

        </div>
    )
}

export default SocialMedia
