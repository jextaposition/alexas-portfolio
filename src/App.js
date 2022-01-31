import React from 'react';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
//import SmoothScrollbar from './components/SmoothScrollbar';

function App() {
  return (
    <>
      <NavMenu />
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
