
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiance from './components/Experiance'
import Footer from './components/Footer'
import Contact from './components/Contact'


const App = () => {
  return (
    <>
     <div>
     <Navbar/>
      <Home/>
      <Experiance/>
      <About/>
      <Portfolio/>
      
      <Contact/>
      <Footer/>
     </div>
  
    </>
  )
}

export default App
