import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/Home/About';
import Services from './components/Home/Services';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';

import Career from './components/pages/Career';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <ScrollToTop />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Career />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;