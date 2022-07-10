import Navigation from './Components/Navigation'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import './Styles/App.css'

function App() {
  return (
    <>
    <div className='app'>
      <div className='container'>
        <Navigation/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App