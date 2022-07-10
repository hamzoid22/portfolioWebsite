import React, { useState } from 'react'
import '../Styles/ContactForm.css'

function ContactForm() {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div>
            <form className='contact-form'>
                <div className='form-group'>
                    <label htmlFor='name'>
                        <input type='text' id='name' name='name' placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>
                        <input type='text' id='email' name='email' placeholder='Email'value={email} onChange={e => setEmail(e.target.value)}/>
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>
                        <textarea type='text' id='message' name='message' placeholder='Message' value={message} onChange={e => setMessage(e.target.value)}/>
                    </label>
                </div>
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default ContactForm