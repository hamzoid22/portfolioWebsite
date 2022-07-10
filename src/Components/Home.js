import React from 'react'
import '../Styles/Home.css'
import memoji from '../Images/memoji.png'

function Home() {
  return (
    <div className='home-section' id='home'>
        <img src={memoji}
        width='491'
        height='491'
        className='memoji' />
        <div className='home-text'>
          <h1 className='name-title'>Hello, I'm Hamza</h1>
          <h1 className='big-title'>A computer science graduate  who <br/> loves to build websites</h1>
          <p className='summary-text'>Bridging the gap between ideas and reality with experience in <br/> Web 2.0 & Web 3.0 technologies</p>
          <h2 className='signature'>Hamza Serrokh</h2>
        </div>
      </div>
  )
}

export default Home