
import './App.css'
import About from './components/About'
import Homepage from './components/Homepage'
import LoadingScreen from './components/Landing'

function App() {
  

  return (
    <div className=''>
      <LoadingScreen />
      <Homepage />
      <About />
    </div>
  )
}

export default App
