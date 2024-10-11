import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './modules/home/Home'
import 'typeface-playfair-display';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Cleaning from './modules/cleaning/Cleaning';
import CleaningProducts from './modules/cleaning/cleaningProducts/CleaningProducts';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cleaning" element={<Cleaning />} />
        <Route path="/cleaning/products" element={<CleaningProducts />} />
      </Routes>
    </>
  )
}

export default App;

