import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import RouterOutlet from './Routes/Routes';

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
