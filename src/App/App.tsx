import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import RouterOutlet from './Routes/RouterOutlet';
import Footer from './Footer/Footer';

import logo from './../assets/logo.gif';



{/* The Application */}
{/** Navbar fixed
<Navbar /> 
**/}

{/* 
<div className="mainContainer">
  <RouterOutlet />
</div>

<Footer />
*/}
function App() {

  const audio: Partial<HTMLAudioElement> = document.getElementById('audio')!;

  const pause = () => {
    audio.pause();
  }
  const play = () => {
    audio.play();
  }

  return (
    <>
      <div className="container">
        <div className="buttonsContainer">
          <button onClick={pause}>Pause</button>
          <button onClick={play}>Play</button>
        </div>

        <div className="content">
          <img src={logo} alt="Future laugh" />
          <h2>Very soon the laughy robot will be online!</h2>
        </div>
      </div>

    </>
  )
}


export default App
