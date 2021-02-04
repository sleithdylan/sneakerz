// Imports React, Component
import React, { Component } from 'react';
// Imports Ads Component
import Ads from './Ads';
// Imports axios
import axios from 'axios';
// Imports Search Component
import Search from './Search';
// Imports Spinner Component from React Bootstrap
import { Spinner } from 'react-bootstrap';

export class Browse extends Component {
  state = {
    ads: [],
    searchAd: '',
    loading: false
  };

  // handleInput Method
  handleInput = e => {
    this.setState({ searchAd: e.target.value });
  };

  // Lifecycle Hook
  componentDidMount() {
    // Show spinner
    this.setState({ loading: 'true' });
    axios
      // Get Request to API
      .get('http://localhost:4000/api/ads')
      // Get Response
      .then(res => {
        // Update ads state with data from API
        this.setState({ ads: res.data });
      })
      // Return error if anything goes wrong
      .catch(err => console.log(err))
      // When Promise is settled, don't show spinner
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    let filteredAds = this.state.ads.filter(ad => {
      // Returns ad in lowercase then checks if the search string is included inside of state
      return ad.name.toLowerCase().includes(this.state.searchAd.toLowerCase());
    });

    // Spinner Inline CSS
    let spinner = {
      left: '50vw',
      top: '50vh',
      position: 'absolute'
    };

    // Show Spinner when fetching data
    const adsList = this.state.loading ? (
      <Spinner animation='border' role='status' loaded={this.state.loading} style={spinner}>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    ) : (
      <Ads ads={this.state.ads && filteredAds} />
    );

    return (
      <>
        <Search handleInput={this.handleInput} />
        <h2 className='font-weight-bold'>NEW ADS</h2>
        {adsList}
      </>
    );
  }
}

export default Browse;
