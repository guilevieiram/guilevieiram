import React from 'react';
import '../styles/Title.css';
import * as animate from '../animations'

import logo from '../images/logo-orange.png'
import Typewriter from 'typewriter-effect';

function Title ({scrollContact, showGames}) {
    return (
        <div className='title-page'>
            {animate.fromUp(
                <img className='logo' src={logo} alt=""/>
                , 4
            )}
            <div className='Title'>
                <h1  onClick={showGames} ><Typewriter 
                    options={{
                        cursor: '▮',
                        delay: 200,

                    }}
                    onInit={(tw) => {
                        tw.typeString("I'm Guile!")
                        .start();
                    }}
                /></h1>

                <p>A Software Developer</p>
                <button 
                    className='contact-button-title'
                    onClick={scrollContact}
                >Get in touch!</button>
            </div>
        </div>

    )
};

export default Title;