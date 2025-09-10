import { useState } from 'react'
import Navigation from './components/Navigation'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <Navigation />
  <div className="pt-16">   {/* pushes content down */}
    <Intro />
    <About />
    <Skills />
    <Project />
    <Contact />
    <Footer />
  </div>
</>
  )
}

export default App
