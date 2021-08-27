import React from 'react';
import '../styles/ContactForm.css';
import * as animate from '../animations';

import emailjs from 'emailjs-com';

import sendButton from '../images/send-button.png';

// import emailjs from 'emailjs-com';

function ContactForm () {


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4lzkp5c', 'template_zxgw2ik', e.target, 'user_H5w5JpSw1OBqNALZnAMm5')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            window.alert("Your message has been sent!\n\nI'll contact you as soon as possible!")
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <form className="ContactForm" action="" onSubmit={sendEmail}>
            <input className='input' type="email" name='email' placeholder='Email' required />
            <input className='input' type="text" name='subject' placeholder='Subject' />
            <textarea className='message' type="text" name='message' placeholder='Message' required />
            {animate.upDownLight(<input className='submit-button' type="image" alt='' src={sendButton} value="send" />)}
        </form>
    )
}

export default ContactForm