// Imports React, Component
import React, { Component } from 'react';
// Imports Card Component from React Bootstrap
import { Card } from 'react-bootstrap';
// Imports Link Component from React Router DOM
import { Link } from 'react-router-dom';

export class Ad extends Component {
  render() {
    return (
      <Card className='my-3 rounded' border='light'>
        <Link to={`/ad/${this.props.ad._id}`} className='text-decoration-none'>
          <Card.Body className='bg-light text-dark'>
            <Card.Img variant='top' src={this.props.ad.image} className='p-4' />
            <Card.Title className='font-weight-bold'>{this.props.ad.brand}</Card.Title>
            <div className='d-flex justify-content-between align-items-center'>
              <Card.Subtitle className='my-2'>{this.props.ad.name}</Card.Subtitle>
              <Card.Text className='font-weight-bold h5'>€{this.props.ad.price}</Card.Text>
            </div>
          </Card.Body>
        </Link>
      </Card>
    );
  }
}

export default Ad;
