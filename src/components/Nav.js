import React, {useState} from 'react';
import '../styles/Nav.css';

import logo from '../images/logo-white.png';
import navBackgroundOrange from '../images/nav-background-orange.png';
import navBackgroundBlue from '../images/nav-background-blue.png';

function Nav () {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        (window.scrollY > window.innerHeight) ? setScrolled(true) : setScrolled(false);
    };
    
    window.addEventListener('scroll', handleScroll)

    return (
        <div className={'Nav' + (scrolled ? ' sticky' : '')}>

            <div className='nav-background'>
                <img className='nav-background-blue' src={navBackgroundBlue} alt="" />
                <img className='nav-background-orange' src={navBackgroundOrange} alt="" />
            </div>

            <div className='nav-content'>
                <img className='nav-logo' src={logo} alt="Logo" />
                <div className='nav-links'>
                    <a href='/'>About</a>
                    <a href='/'>Projects</a>
                    <a href='/'>Contact</a>
                </div>
            </div>

        </div>
    )
}

export default Nav