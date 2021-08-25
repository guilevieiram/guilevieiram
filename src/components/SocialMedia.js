import React from 'react';
import '../styles/SocialMedia.css';
import * as animate from '../animations';

import facebook from '../images/facebook.png';

import blobSocialMobileOrange from '../images/blob-social-mobile-orange.png';
import blobSocialMobileBlue from '../images/blob-social-mobile-blue.png';

function SocialMedia() {
    return (
        <div className="SocialMedia">
            <div className="social-background-mobile">
                {animate.woble(<img className="blob-social-mobile-blue" src={blobSocialMobileBlue} alt="" />)}
                {animate.woble(<img className="blob-social-mobile-orange" src={blobSocialMobileOrange} alt="" />)}
            </div>
            <div className="social-media-column">
                <div className="social-media-row">
                    <a href="/">/guilhermevieira</a>
                    <img src={facebook} alt="" />
                </div>
                <div className="social-media-row">
                    <a href="/">@guilhermevieirasdfadfa</a>
                    <img src={facebook} alt="" />
                </div>                
                <div className="social-media-row">
                    <a href="/">.guilhermeira</a>
                    <img src={facebook} alt="" />
                </div>
                <div className="social-media-row">
                    <a href="/">.guilhermeira</a>
                    <img src={facebook} alt="" />
                </div>
                <div className="social-media-row">
                    <a href="/">.guilhermeira</a>
                    <img src={facebook} alt="" />
                </div>
                <div className="social-media-row">
                    <a href="/">.guilhermeira</a>
                    <img src={facebook} alt="" />
                </div>
                <div className="social-media-row">
                    <a href="/">.guilhermeira</a>
                    <img src={facebook} alt="" />
                </div>
                <div className="social-media-row">
                    <a href="/">.guilhermeira</a>
                    <img src={facebook} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SocialMedia
