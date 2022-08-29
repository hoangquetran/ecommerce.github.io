import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './navbar.css';

const NavbarShop = () => {
    return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="nav-main">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about-us" className="nav-link" target="_blank">About Us</Link>
            <Link to="/contact" className="nav-link" target="_blank">Contact Us</Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarShop;