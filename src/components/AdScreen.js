// Imports React, Component
import React, { Component } from 'react';
// Imports Link Component from React Router DOM
import { Link } from 'react-router-dom';
// Imports Row, Col, Image, ListGroup Component from React Bootstrap
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
// Imports axios
import axios from 'axios';
// Imports Spinner Component from React Bootstrap
import { Spinner } from 'react-bootstrap';

export class AdScreen extends Component {
  // Constructor
  constructor() {
    // Invoke constructor
    super();
    this.RemoveAd = this.RemoveAd.bind(this);
  }
  state = {
    ads: [],
    loading: false
  };

  RemoveAd(e) {
    e.preventDefault();

    axios
      .delete(`http://localhost:4000/api/ads/${this.props.match.params.id}`)
      .then(() => {
        // Redirects to Browse Route
        this.props.history.push('/');
      })
      .catch();
  }

  // Lifecycle Hook
  componentDidMount() {
    // Show spinner
    this.setState({ loading: 'true' });
    axios
      // Get Request to API
      .get(`http://localhost:4000/api/ads/${this.props.match.params.id}`)
      // Get Response
      .then((res) => {
        // Update ads state with data from API
        this.setState({ ads: res.data });
      })
      // Return error if anything goes wrong
      .catch((err) => console.log(err))
      // When Promise is settled, don't show spinner
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    // Spinner Inline CSS
    let spinner = {
      left: '50vw',
      top: '50vh',
      position: 'absolute'
    };

    let showAd;
    // Show Spinner when fetching data
    if (this.state.loading) {
      showAd = (
        <Spinner
          animation="border"
          role="status"
          loaded={this.state.loading}
          style={spinner}
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    } else {
      showAd = (
        <Row className="mt-5 pt-5">
          <Col md={6}>
            <Image src={this.state.ads.image} alt={this.state.ads.name} fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2 className="font-weight-bold">{this.state.ads.name}</h2>
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
      );
    }

    return (
      <>
        <div className="d-flex justify-content-between align-items-center">
          <div className="mb-5">
            <Link className="btn btn-light" to={`/`}>
              Go Back
            </Link>
          </div>
          <div className="mb-5">
            <Link
              className="btn btn-light mr-3"
              to={`/edit/${this.state.ads._id}`}
            >
              Edit Ad
            </Link>
            <Button
              className="btn-danger"
              type="button"
              onClick={this.RemoveAd}
            >
              Remove Ad
            </Button>
          </div>
        </div>
        {showAd}
      </>
    );
  }
}

export default AdScreen;
