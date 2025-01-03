import { useEffect, useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  
  const [theme,setTheme]=useState("light")
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme",theme)
  },[theme])
  return (
    <>
      <div className='poppins-bold' data-theme={theme}>
        <Navbar theme={theme} setTheme={setTheme} />
        <About/>
        <Projects/>
        <Skills/>
        {/* <Badges/> */}
        <Calendar theme={theme}/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
