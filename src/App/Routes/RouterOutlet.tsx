import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import About from '../About/About';


const RouterOutlet = () => {
    return (
    <Routes>
        <Route path='/' element={ <Navigate to="/home" /> }/>

        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
  );
}

export default RouterOutlet;