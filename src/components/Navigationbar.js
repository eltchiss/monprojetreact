import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from 'react-router-dom';

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
          <Navbar.Brand as={Link} to="/">Jeanne Doe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Accueil</Nav.Link>
              <Nav.Link as={Link} to="/service">Services</Nav.Link>
              <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/legal">Mentions légales</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* wrapper pour gérer le décalage dû à fixed="top" */}
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