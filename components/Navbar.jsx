import Link from 'next/link';
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Link href='/' passHref>
          <Navbar.Brand>Alberto's Portfolio</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href='/blog' passHref>
              <Nav.Link>Blog</Nav.Link>
            </Link>
            <Link href='/github' passHref>
              <Nav.Link>Github</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent;
