
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import { Footer } from './components/Footer'
import Homepage from './components/Homepage'
import { Projects } from './components/Projects'


function App() {
  

  return (
    <div>
      <Homepage />
      {/* <About />  */}
      <Projects />
      <Footer />
    </div>
  )
}

export default App
