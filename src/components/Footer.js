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
            <Col className="text-center mb-5">
              &copy; Dylan Sleith | G00354557{' '}
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
