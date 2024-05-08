'use client';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from './global.module.css'
import { CardTitle } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar className={styles.divisor}>
        <Nav className="me-auto">
          <CardTitle className={styles.brand}>Florezf90 Gym</CardTitle>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link className={styles.number}>1-800-555-1234</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className={styles.number} >
            Mon - Fri: 8:00AM - 7:00PM | Sat - Sun: Closed
          </Nav.Link>
        </Nav>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="my-3 mx-4" />
          <Navbar.Collapse id="responsive-navbar-nav" className="my-3 mx-4" >
            <Nav className="me-auto">
             <Nav.Link href="/" >Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/contact">
                Get in Touch
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
