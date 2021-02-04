// Imports React, Component
import React, { Component } from 'react';
// Imports Container, Row, Col Component from React Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
// Import React Bootstrap Icons
import * as Icon from 'react-bootstrap-icons';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col className="text-left mb-5">
              &copy; {new Date().getFullYear()} by Dylan Sleith. All rights
              reserved.
            </Col>
            <Col className="text-right mb-5">
              <a
                href="https://github.com/sleithdylan/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Icon.Github className="ml-4 text-dark" />
              </a>
              <a
                href="https://www.linkedin.com/in/dylansleith/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Icon.Linkedin className="ml-4 text-dark" />
              </a>
              <a
                href="https://www.dylansleith.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Icon.Globe className="ml-4 text-dark" />
              </a>
              <a
                href="mailto:sleithdylan@gmail.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Icon.Envelope className="ml-4 text-dark" />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
