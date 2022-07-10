import React from 'react'
import '../Styles/Projects.css'
import finchPicture from '../Images/finch.png'
import greenBox from '../Images/green-box.png'
import neoTerra from '../Images/neo-terra.png'
import pharmaChain from '../Images/pharmachain.png'

function Projects() {
  return (
    <div className='projects-section' id='projects'>
        <h1 className='projects-title'>Projects Completed <hr className='projects-line'/></h1>
        <div className='finch-section'>
            <img src={finchPicture} 
            width='618.22px'
            height='320px'
            className='finch' />
            <img src={greenBox} 
            width='570px'
            height='171'
            className='finch-box'/>
            <p className='finch-text'>A program implemented for a Finch robot with navigation, object <br/> detection and draw shape 
            capabilities. Each function performed is <br/> based on the user input.</p>
            <h1 className='finch-title'>Finch Robot Game</h1>
            <p className='finch-tech1'>Java</p>
            <p className='finch-tech2'>VS Code</p>
            <p className='finch-tech3'>Finch</p>
        </div>
        <div className='neo-section'>
          <img src={neoTerra} 
              width='618.22px'
              height='320px'
              className='neo' />
            <img src={greenBox} 
              width='570px'
              height='171'
              className='neo-box'/>
            <h1 className='neo-title'>Neo Terra</h1>
            <p className='neo-text'>A web application implemented to address the 13th UN Sustainable <br/> Development Goal - Climate Action. 
            The application consists of articles <br/> regarding climate change and its consequences, a quiz to test the users <br/> knowledge and 
            a carbon footprint calculator that provides actionable <br/> steps to reduce the users’ carbon output based on their inputs.</p>
            <p className='neo-tech1'>React</p>
            <p className='neo-tech2'>Node.js</p>
            <p className='neo-tech3'>HTML</p>
            <p className='neo-tech4'>JavaScript</p>
            <p className='neo-tech5'>Axios API</p>
            <p className='neo-tech6'>CSS</p>
        </div>
        <div className='pharma-section'>
          <img src={pharmaChain} 
            width='618.22px'
            height='320px'
            className='pharma' />
          <img src={greenBox} 
            width='570px'
            height='171'
            className='pharma-box'/>
          <h1 className='pharma-title'>PharmaChain</h1>
          <p className='pharma-text'>A decentralised web application was built to combat the growing <br/> issue of falsified pharmaceutical 
          products. The back end of the <br/> application is a smart contract that operates on the Ethereum <br/> blockchain</p>
          <p className='pharma-tech1'>React</p>
          <p className='pharma-tech2'>JavaScript</p>
          <p className='pharma-tech3'>Solidity</p>
          <p className='pharma-tech4'>Firebase</p>
          <p className='pharma-tech5'>HTML</p>
        </div>
    </div>
  )
}

export default Projects