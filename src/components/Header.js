import React from 'react';
import { Image, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../images/LOGO-HEADLINE.png';
import './App.css';

class Header extends React.Component {
  render(){
    return (
    <Navbar default staticTop collapseOnSelect style={{margin:'0px'}}>
        <Navbar.Header>
          <LinkContainer to="/">
            <a className="navbar-left"><Image responsive id="logo" src={logo} /></a>
          </LinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/about">
              <NavItem eventKey={1}>About Us</NavItem>
            </LinkContainer>
            <LinkContainer to="/products">
              <NavItem eventKey={2}>Products</NavItem>
            </LinkContainer>
            <LinkContainer to="/services">
              <NavItem eventKey={3}>Services</NavItem>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <NavItem eventKey={4}>Portfolio</NavItem>
            </LinkContainer>
            <LinkContainer to="/brands">
              <NavItem eventKey={5}>Brands</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem eventKey={6}>Contact Us</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
