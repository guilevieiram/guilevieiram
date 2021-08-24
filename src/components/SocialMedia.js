import React from 'react';

import '../styles/SocialMedia.css';
import facebook from '../images/facebook.png';

function SocialMedia() {
    return (
        <div className="SocialMedia">
            <div className="social-media-column">
                <div className="social-media-row">
                    <a href="/">/guilhermevieira</a>
                    <img src={facebook} alt="" />
                </div>

                <div className="social-media-row">
                    <a href="/">/guilhermevieirasdfadfa</a>
                    <img src={facebook} alt="" />
                </div>                <div className="social-media-row">
                    <a href="/">/guilhermeira</a>
                    <img src={facebook} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SocialMedia
