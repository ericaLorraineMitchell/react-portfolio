import React from 'react'
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import About from './components/About/about';
import Experience from './components/Experience/experience';
import Projects from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';



const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
    
    </>
  )
}

export default App;