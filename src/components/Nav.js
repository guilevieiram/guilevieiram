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

import languages from '../data/languages.json';
import texts from '../data/texts.json';



function Nav ({language, setLanguage, scrollAbout, scrollProjects, scrollContact, sideBar, setSideBar}) {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        (window.scrollY > window.innerHeight) ? setScrolled(true) : setScrolled(false);
    };
    
    const handleSetSidebar = () => {
        setSideBar(!sideBar);
    }

    const findLanguage = (sign) => {
        let selectedLang = 'fr';
        languages.forEach((lang) => {
            if(sign === lang.sign){selectedLang = lang}
        })
        return selectedLang;
    }

    window.addEventListener('scroll', handleScroll)

    return (
        <div className={'Nav' + (scrolled ? ' sticky' : '')}>

            <div className='nav-background'>
                
                <div className="blob-logo">
                    {animate.fromDown(
                        <>
                            {animate.wobleLight(<img className='blob-logo-blue' src={blobLogoBlue} alt="" />)}
                            {animate.wobleLight(<img className='blob-logo-orange' src={blobLogoOrange} alt="" />)}
                        </>, 3.5
                    )}
                </div>          

                <div className="blob-nav-links">
                    {animate.fromDown(
                        <>
                            {animate.wobleLight(<img className='blob-nav-links-blue' src={blobNavLinksBlue} alt="" />)}
                            {animate.wobleLight(<img className='blob-nav-links-orange' src={blobNavLinksOrange} alt="" />)}
                        </>, 4
                    )}
                </div>
     
                {/* mobile */}
                <div className="blob-logo blob-logo-mobile">
                    {animate.fromLeft(
                        <>
                            {animate.wobleLight(<img className='blob-logo-mobile-blue' src={blobLogoMobileBlue} alt="" />)}
                            {animate.wobleLight(<img className='blob-logo-mobile-orange' src={blobLogoMobileOrange} alt="" />)}
                        </>, 4
                    )}
                </div>          

                <div className="blob-hamburger">
                    {animate.fromRight(
                        <>
                            {animate.wobleLight(<img className='blob-hamburger-blue' src={blobHamburgerBlue} alt="" />)}
                            {animate.wobleLight(<img className='blob-hamburger-orange' src={blobHamburgerOrange} alt="" />)}
                        </>, 4.2
                    )}

                </div>

                <div className={"side-bar" + (sideBar ? ' side-bar-on' : ' side-bar-off')}>
                    {animate.upDownLight(<img className='blob-side-nav-blue' src={blobSideNavBlue} alt="" />)}
                    {animate.upDownLight(<img className='blob-side-nav-orange' src={blobSideNavOrange} alt="" />)}
                </div>

            </div>

            <div className='nav-content'>

                {animate.fromNothing(
                    <>
                        <img className='nav-logo' src={logo} alt="Logo" 
                            onClick={() => window.scrollTo({top:0, behavior:'smooth'})}    
                        />
                    </>, 4.5
                )}

                <div 
                    className="hamburger"
                    onClick={handleSetSidebar}
                > 
                    {animate.fromNothing(
                        <>
                            <div className={'patty' + (sideBar ? ' cross-1' : '')}></div>
                            <div className={'patty' + (sideBar ? ' cross-2' : '')}></div>
                            <div className={'patty' + (sideBar ? ' cross-3' : '')}></div>
                        </>, 4.7
                    )}
                </div>


                {animate.fromNothing(
                    <>
                        <div className={'nav-links' + (sideBar ? ' nav-links-on' : ' nav-links-off')}>
                            <p onClick={() => {
                                scrollAbout();
                                handleSetSidebar();
                            }}>{texts.navbar[language.sign][0]}</p>
                            <p onClick={() => {
                                scrollProjects();
                                handleSetSidebar();
                            }}>{texts.navbar[language.sign][1]}</p>
                            <p onClick={() => {
                                scrollContact();
                                handleSetSidebar();
                            }}>{texts.navbar[language.sign][2]}</p>
                            <form action="">
                            <select name="language-form" id="language-form"
                                onChange={(event) => {
                                    setLanguage(findLanguage(event.target.value));
                                }}
                                className='flag'
                            >
                                {languages.map((lang)=>{
                                    if(lang.sign === language.sign){
                                        return (<option value={lang.sign}key={lang.sign} selected>{lang.flag}</option>)
                                    }
                                    else{
                                        return (<option value={lang.sign}key={lang.sign}>{lang.flag}</option>)
                                    }
                                }   
                                )}
                            </select>
                            </form>

                        </div>
                    </>, 4.5
                )}



            </div>

        </div>
    )
}

export default Nav