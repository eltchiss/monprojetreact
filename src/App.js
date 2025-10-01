import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from './pages/Home';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/service">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/legal">Mentions légales</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/legal" element={<Legal/>}></Route>
      </Routes>
    </div>
  );
}
