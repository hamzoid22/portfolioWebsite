import React from 'react'
import '../Styles/Contact.css'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div className='contact-section' id='contact'>
        <div className='contact-text'>
            <h1 className='contact-small-title'>Want to connect?</h1>
            <h1 className='contact-big-title'>Contact Me <hr className='contact-line'/></h1>
        </div>
        <div className='form'>
            <ContactForm/>
        </div>
    </div>
  )
}

export default Contact