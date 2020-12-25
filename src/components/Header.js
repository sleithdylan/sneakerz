// Imports React, Component
import React, { Component } from 'react';
// Imports Navbar, Nav, Container Component from React Bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap';
// Imports LinkContainer Component from React Router Bootstrap
import { LinkContainer } from 'react-router-bootstrap';

export class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
          <Container className='py-1'>
            <LinkContainer to='/'>
              <Navbar.Brand className='font-weight-bold'>SNEAKERZ.</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <LinkContainer to='/'>
                  <Nav.Link>Browse</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/ad'>
                  <Nav.Link>Place Ad</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
