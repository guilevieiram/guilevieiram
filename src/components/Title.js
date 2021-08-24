import React from 'react';
import '../styles/Title.css';

import logo from '../images/logo-orange.png'

function Title () {
    return (
        <div className='title-page'>
            <img className='logo' src={logo} alt="" />
            <div className='Title'>
                <h1>Hi!</h1>
                <h1>I'm Guile.▮</h1>
                <p>A Software Developer</p>
            </div>
        </div>

    )
};

export default Title;