import React from 'react'
import face from '../Images/face-image.png'
import '../Styles/About.css'

function About() {
  return (
    <div className='about-section' id='about'>
        <img src={face}
        width='530.5px'
        height='577px'
        className='face-image'
        alt='my-face' />
        <div className='about-text'>
            <h1 className='small-title'>Who is Hamza?</h1>
            <h1 className='main-title'>About me <hr className='about-line'/></h1>
            <p className='text'>Hello there! My name is Hamza Serrokh, I am a recent computer <br/> science graduate from Brunel University 
            London. Throughout my <br/> time at university I have gained skills with front end and back end <br/> development by completing a range of 
            projects which are <br/> showcased below. <br/> <br/> My love for programming began during my A Levels where I <br/> completed some paid courses on Java. 
            Possessing the ability of <br/> bringing ideas to life through code gripped me straight away and <br/> to this very day still has a firm hold 
            on me. I aspire to be at the <br/> forefront of software engineering contributing to and leading the <br/> evolution of software to solve 
            emerging problems. <br/> <br/> Along with developing traditional websites with Java, JavaScript, <br/> HTML, and CSS I also develop smart contracts 
            for decentralised <br/> applications with Solidity that operate on a blockchain network. I <br/> have harnessed skills with design software like 
            Adobe XD and <br/> Figma. <br/> <br/> I work with the following technologies:</p>
            <ul className='tech-list1'>
                <li>React</li>
                <li>Hardhat</li>
                <li>Node.js</li>
            </ul>
            <ul className='tech-list2'>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Solidity</li>
            </ul>
        </div>
    </div>
  )
}

export default About