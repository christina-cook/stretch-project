import React, {useState, useEffect} from 'react';
import {Navbar, NavDropdown} from 'react-bootstrap'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
      <Navbar.Brand as={Link} to="/">Hue Pic It</Navbar.Brand>
      <NavDropdown title="User" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/">Account</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">Favorites</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >Sign Out</NavDropdown.Item>
      </NavDropdown>
    </Navbar>

  )
}

export default Header;
