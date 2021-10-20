import React from 'react';
import '../styles/Contact.css';

import ContactForm from './ContactForm'
import SocialMedia from './SocialMedia';

import texts from '../data/texts.json';

function Contact({language, reference}) {
    return (
        <div className="Contact">
            <div className="message-container" ref={reference}>
                <h1>{texts.contactTitle[language.sign]}</h1>
                <ContactForm 
                    language={language}
                />
            </div>
            <div className="social-media">
                <SocialMedia />
            </div>
        </div>
    )
}

export default Contact