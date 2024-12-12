import React from 'react';
// Import your main CSS file (if you have one)
import Home from"./Home";
import About from './About';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
function App(){
  return(
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
export default App;