import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, NavLink } from 'react-router-dom';
import "../CSS/Navbar.css";

import Home from '../pages/Home';
import Service from '../pages/Service';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Legal from '../pages/Legal';


function Navigationbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg"  fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Jeanne Doe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" className="text-uppercase">Accueil</Nav.Link>
              <Nav.Link as={NavLink} to="/service" className="text-uppercase">Services</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio" className="text-uppercase">Portfolio</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="text-uppercase">Contact</Nav.Link>
              <Nav.Link as={NavLink} to="/legal" className="text-uppercase">Mentions légales</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </div>
    </>
  );
}

export default Navigationbar;