// Imports React, Component
import React, { Component } from 'react';
// Imports Ads Component
import Ads from './Ads';
// Imports axios
import axios from 'axios';

export class Browse extends Component {
  state = {
    // ads state
    ads: []
  };

  // Lifecycle Hook
  componentDidMount() {
    axios
      // Get Request to API
      .get('http://localhost:4000/api/ads')
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
        <h2 className='font-weight-bold'>NEW ADS</h2>
        <Ads ads={this.state.ads} />
      </>
    );
  }
}

export default Browse;
