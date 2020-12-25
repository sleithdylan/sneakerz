// Imports React, Component
import React, { Component } from 'react';
// Imports Container, Row, Col Component from React Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col className='text-center py-3'>FOOTER</Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
