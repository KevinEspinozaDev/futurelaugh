import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import RouterOutlet from './Routes/RouterOutlet';

function App() {

  return (
    <>
      {/** Navbar fixed **/}
      <Navbar />

      {/* The Application */}
      <div className="mainContainer">
        <RouterOutlet />
      </div>
    </>
  )
}


export default App
