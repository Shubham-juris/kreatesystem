import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Home from './Components/Navbar/Home/Home';
import Contact from './Components/Navbar/Home/ContactUs/Contact';
import Services from './Components/Services/Services';


function App() {
  return (
    <>
    <Navbar/>
      <Home/>
      <Services/>
      <Contact/>
  
    </>
  );
}

export default App;
