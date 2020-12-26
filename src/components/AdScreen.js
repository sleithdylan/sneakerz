// Imports React, Component
import React, { Component } from 'react';
// Imports Link Component from React Router DOM
import { Link } from 'react-router-dom';
// Imports Row, Col, Image, ListGroup Component from React Bootstrap
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
// Imports axios
import axios from 'axios';

export class AdScreen extends Component {
  state = {
    // ads state
    ads: []
  };

  // Lifecycle Hook
  componentDidMount() {
    axios
      // Get Request to API
      .get(`http://localhost:4000/api/ads/${this.props.match.params.id}`)
      // Get Response
      .then(res => {
        // Update ads state with data from API
        this.setState({ ads: res.data });
      })
      // Return error if anything goes wrong
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <Row className='d-flex flex-row-reverse'>
          <Link className='btn btn-light my-3' to={`/edit/${this.state.ads._id}`}>
            Edit Ad
          </Link>
        </Row>
        <Row className='my-5'>
          <Col md={6}>
            <Image src={this.state.ads.image} alt={this.state.ads.name} fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2 className='font-weight-bold'>{this.state.ads.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Brand:</strong> <br />
                {this.state.ads.brand}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Category:</strong> <br />
                {this.state.ads.category}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Price:</strong> <br />€{this.state.ads.price}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Description:</strong> <br />
                {this.state.ads.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default AdScreen;
