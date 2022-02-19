import React from 'react';
import '../styles/Title.css';
import * as animate from '../animations'

import logo from '../images/logo-orange.png'
import Typewriter from 'typewriter-effect';

import texts from '../data/texts.json';

function Title ({language, scrollContact, showGames}) {
    return (
        <div className='title-page'>
            {animate.fromUp(
                <img className='logo' src={logo} alt=""/>
                , 4
            )}
            <div className='Title'>
                <div className='greet'>
                    <h1  onClick={showGames} ><Typewriter 
                        options={{
                            cursor: '▮',
                            delay: 200,
                            strings: Object.keys(texts.greet).map((element) => 
                                texts.greet[element]
                            ),
                            autoStart: true,
                            loop: true,
                        }}
                    /></h1>
                </div>


                <p>{texts.title[language.sign]}</p>
                <button 
                    className='contact-button-title'
                    onClick={scrollContact}
                >{texts.contactCall[language.sign]}</button>
            </div>
        </div>

    )
};

export default Title;