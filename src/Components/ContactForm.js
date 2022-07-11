import React, { useState, useRef } from 'react'
import '../Styles/ContactForm.css'
import emailjs from '@emailjs/browser';

function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const form = useRef()

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_diu2tli', 'template_gxk32mq', form.current, 'vpFc_9kap-4dZMlrJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        handleReset()
    }

    function handleReset() {
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className='contact-form'>
                <div className='form-group'>
                    <label htmlFor='name'>
                        <input type='text' id='name' name='name' placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} />
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>
                        <input type='text' id='email' name='email' placeholder='Your Email' value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>
                        <textarea type='text' id='message' name='message' placeholder='Message' value={message} onChange={e => setMessage(e.target.value)} />
                    </label>
                </div>
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default ContactForm