import React from 'react';
import '../styles/ContactForm.css';

import sendButton from '../images/send-button.png';

import emailjs from 'emailjs-com';

function ContactForm () {

    const sendEmail = (submission) => {
        console.log('sending email')
    }

    return (
        <form className="ContactForm" action="" onSubmit={sendEmail}>
            <input className='input' type="email" name='email' placeholder='Email' required />
            <input className='input' type="text" name='email' placeholder='Subject' />
            <textarea className='message' type="text" name='email' placeholder='Message' required />
            <input className='submit-button' type="image" src={sendButton} value="send" />
        </form>
    )
}

export default ContactForm