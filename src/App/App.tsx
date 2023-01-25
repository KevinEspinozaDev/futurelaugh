import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import RouterOutlet from './Routes/RouterOutlet';
import Footer from './Footer/Footer';

function App() {

  return (
    <>
      {/** Navbar fixed **/}
      <Navbar />

      {/* The Application */}
      <div className="mainContainer">
        <RouterOutlet />
      </div>

      <Footer />
    </>
  )
}


export default App
