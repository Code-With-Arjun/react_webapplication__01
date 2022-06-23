import React from 'react'
import './component/css/Card.css'

import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from './component/Courses';
import Contact from './component/Contact';
function App() {
  return (
    <>




<BrowserRouter>
<Header/>
    <Routes>
    
 
       <Route path="/" element={<Home />}/>
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      
  
    </Routes>
    <Footer/>
  </BrowserRouter>


  </>
  );
}

export default App;
