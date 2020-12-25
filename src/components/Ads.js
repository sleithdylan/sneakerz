// Imports React, Component
import React, { Component } from 'react';
// Imports Row, Col Component from React Bootstrap
import { Row, Col } from 'react-bootstrap';
// Imports Ad Component
import Ad from './Ad';

// Exports Ads Component
export class Ads extends Component {
  render() {
    return (
      <>
        <h2 className='font-weight-bold'>NEW ADS</h2>
        <Row>
          {this.props.ads.map((ad, _id) => (
            <Col sm={12} md={6} lg={4} key={ad._id}>
              {/* Loops through "ads" state and returns a ad with a ad and key prop */}
              <Ad ad={ad} key={_id} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default Ads;
