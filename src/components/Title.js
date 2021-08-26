import React, {useState} from 'react';
import '../styles/Title.css';

import logo from '../images/logo-orange.png'
import Typewriter from 'typewriter-effect';

function Title () {

    const finalText = "Hi! I'm Guile.▮";


    return (
        <div className='title-page'>
            <img className='logo' src={logo} alt="" />
            <div className='Title'>
                <h1><Typewriter 
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
            </div>
        </div>

    )
};

export default Title;