import React from 'react';
import '../styles/Contact.css';

import ContactForm from './ContactForm'
import SocialMedia from './SocialMedia';

function Contact({reference}) {
    return (
        <div className="Contact">
            <div className="message-container" ref={reference}>
                <h1>Lets Talk!</h1>
                <ContactForm />
            </div>
            <div className="social-media">
                <SocialMedia />
            </div>
        </div>
    )
}

export default Contact