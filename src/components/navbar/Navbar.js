import React from "react";
import {
  Navbar
} from "react-bootstrap";


const NavbarComponent = () => {

  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand>Employee App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    </Navbar.Collapse>
  </Navbar>
    </div>
  );
};
export default NavbarComponent;
