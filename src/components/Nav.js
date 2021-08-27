import React, {useState} from 'react';
import '../styles/Nav.css';
import * as animate from '../animations';

import logo from '../images/logo-white.png';

// images
import blobLogoOrange from '../images/blob-logo-orange.png';
import blobLogoBlue from '../images/blob-logo-blue.png';

import blobNavLinksOrange from '../images/blob-nav-links-orange.png';
import blobNavLinksBlue from '../images/blob-nav-links-blue.png';

// mobile images
import blobLogoMobileOrange from '../images/blob-logo-mobile-orange.png';
import blobLogoMobileBlue from '../images/blob-logo-mobile-blue.png';

import blobHamburgerOrange from '../images/blob-hamburger-orange.png';
import blobHamburgerBlue from '../images/blob-hamburger-blue.png';

import blobSideNavOrange from '../images/blob-side-nav-orange.png';
import blobSideNavBlue from '../images/blob-side-nav-blue.png';


function Nav ({scrollAbout, scrollProjects, scrollContact}) {

    const [scrolled, setScrolled] = useState(false);
    const [sideBar, setSideBar] = useState(false);

    const handleScroll = () => {
        (window.scrollY > window.innerHeight) ? setScrolled(true) : setScrolled(false);
    };
    
    const handleSetSidebar = () => {
        setSideBar(!sideBar);
    }

    window.addEventListener('scroll', handleScroll)



    return (
        <div className={'Nav' + (scrolled ? ' sticky' : '')}>

            <div className='nav-background'>

                <div className="blob-logo">
                    {animate.wobleLight(<img className='blob-logo-blue' src={blobLogoBlue} alt="" />)}
                    {animate.wobleLight(<img className='blob-logo-orange' src={blobLogoOrange} alt="" />)}
                </div>          

                <div className="blob-nav-links">
                    {animate.wobleLight(<img className='blob-nav-links-blue' src={blobNavLinksBlue} alt="" />)}
                    {animate.wobleLight(<img className='blob-nav-links-orange' src={blobNavLinksOrange} alt="" />)}
                </div>

                {/* mobile */}
                <div className="blob-logo blob-logo-mobile">
                    {animate.wobleLight(<img className='blob-logo-mobile-blue' src={blobLogoMobileBlue} alt="" />)}
                    {animate.wobleLight(<img className='blob-logo-mobile-orange' src={blobLogoMobileOrange} alt="" />)}
                </div>          

                <div className="blob-hamburger">
                    {animate.wobleLight(<img className='blob-hamburger-blue' src={blobHamburgerBlue} alt="" />)}
                    {animate.wobleLight(<img className='blob-hamburger-orange' src={blobHamburgerOrange} alt="" />)}
                </div>

                <div className={"side-bar" + (sideBar ? ' side-bar-on' : ' side-bar-off')}>
                    {animate.wobleLight(<img className='blob-side-nav-blue' src={blobSideNavBlue} alt="" />)}
                    {animate.wobleLight(<img className='blob-side-nav-orange' src={blobSideNavOrange} alt="" />)}
                </div>

            </div>

            <div className='nav-content'>
                <img className='nav-logo' src={logo} alt="Logo" 
                    onClick={() => window.scrollTo({top:0, behavior:'smooth'})}    
                />

                <div 
                    className="hamburger"
                    onClick={handleSetSidebar}
                >
                    <div className={'patty' + (sideBar ? ' cross-1' : '')}></div>
                    <div className={'patty' + (sideBar ? ' cross-2' : '')}></div>
                    <div className={'patty' + (sideBar ? ' cross-3' : '')}></div>
                </div>

                <div className={'nav-links' + (sideBar ? ' nav-links-on' : ' nav-links-off')}>
                    <p onClick={() => {
                        scrollAbout();
                        handleSetSidebar();
                    }}>About</p>
                    <p onClick={() => {
                        scrollProjects();
                        handleSetSidebar();
                    }}>Projects</p>
                    <p onClick={() => {
                        scrollContact();
                        handleSetSidebar();
                    }}>Contact</p>
                </div>

            </div>

        </div>
    )
}

export default Nav