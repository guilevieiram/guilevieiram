import React from 'react';
import '../styles/Footer.css';
import * as animate from '../animations';

import upArrow from '../images/up-arrow.png';
import texts from '../data/texts.json';

function Footer({language}) {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="Footer">
            <p>
                © Guile Vieira - 2021
            </p>

            <p>
                {texts.footer[language.sign]}
            </p>
            {animate.upDown(
                <button onClick={scrollTop}>    
                    <img src={upArrow} alt="arrow-up" />
                    <p>Up</p>
                </button>
            )}

        </div>

    )
}

export default Footer
