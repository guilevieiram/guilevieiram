import React from 'react';
import '../styles/About.css';
import texts from '../data/texts.json';


function About ({language, reference}) {
    return (
        <div className='About' ref={reference}>
            <h2>{texts.aboutTitle[language.sign]}</h2>
            {texts.aboutText[language.sign].map((element) => 
            // does not support tags
                <p key={element}>{element}</p>
            )}
            
        </div>
    )
}

export default About