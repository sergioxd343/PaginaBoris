import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './modules/home/Home'
import 'typeface-playfair-display';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Cleaning from './modules/cleaning/Cleaning';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cleaning" element={<Cleaning />} />
      </Routes>
    </>
  )
}

export default App;

