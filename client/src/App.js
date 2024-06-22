import React from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Products from './Components/Products';
import HomePage from './Components/HomePage';
import MenSection from './Components/MenSection';
import KidSection from './Components/KidSection';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/sign-up">Register</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/kids">Kids</Link></li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/:product" element={<Products />} />
            <Route path="/men" element={<MenSection />} />
            <Route path="/kids" element={<KidSection />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
