import React from 'react';
import '../styles/ContactForm.css';
import * as animate from '../animations';

import emailjs from 'emailjs-com';

import sendButton from '../images/send-button.png';

import texts from '../data/texts.json';


function ContactForm ({language}) {


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_235zmaf', 'template_zxgw2ik', e.target, 'gI2YbEutdZDmogsUC')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            window.alert("Your message has been sent!\n\nI'll contact you as soon as possible!")
        }, (error) => {
            console.log(error.text);
            window.alert("Looks like our servers are down...\n\nTry contacting me on my social media!")
        });
    }

    return (
        <form className="ContactForm" action="" onSubmit={sendEmail}>
            <input className='input' type="email" name='email' placeholder={texts.contactForm[language.sign][0]} required />
            <input className='input' type="text" name='subject' placeholder={texts.contactForm[language.sign][1]} />
            <textarea className='message' type="text" name='message' placeholder={texts.contactForm[language.sign][2]} required />
            <span style={{zIndex: '3'}}>{animate.upDownLight(<input className='submit-button' type="image" alt='' src={sendButton} value="send" />)}</span>
        </form>
    )
}

export default ContactForm