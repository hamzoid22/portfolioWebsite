import React from 'react'
import git from '../Images/git-icon.png'
import LinkedIn from '../Images/linkedin-icon.png'
import '../Styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <img src={git}
        width='53px'
        height='51px'
        className='git-icon'
        alt='' />
        <img src={LinkedIn}
        width='53px'
        height='51px'
        className='linked-icon' 
        alt='' />
        <hr className='footer-line'/>
        <p className='my-email'>hamzaserrokh2@gmail.com</p>
    </div>
  )
}

export default Footer