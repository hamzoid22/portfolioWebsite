import React from 'react'
import { Link } from 'react-scroll'
import logo from '../Images/HS-logo-rounded.png'
import '../Styles/Navigation.css'


function Navigation() {
  return (
    <>
        <nav className='nav'>
            <img src={logo}
            width='101'
            height='101'
            className='website-logo'
            />

            <ul>
                <li>
                    <Link to='home' spy={true} smooth={true} offset={-220} duration={500}> Home</Link>
                </li>
                <li>
                <Link to='about' spy={true} smooth={true} offset={-50} duration={500}> About</Link>
                </li>
                <li>
                <Link to='projects' spy={true} smooth={true} offset={-10} duration={500}> Projects</Link>
                </li>
                <li>
                <Link to='contact' spy={true} smooth={true} offset={-30} duration={500}> Contact</Link>
                </li>
            </ul>
        </nav>

    </>
  )
}

export default Navigation