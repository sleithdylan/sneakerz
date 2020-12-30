// Imports React, Component
import React, { Component } from 'react';
// Imports Ads Component
import Ads from './Ads';
// Imports axios
import axios from 'axios';
// Imports Search Component
import Search from './Search';

export class Browse extends Component {
  state = {
    ads: [],
    searchAd: ''
  };

  // handleInput Method
  handleInput = e => {
    this.setState({ searchAd: e.target.value });
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
    let filteredAds = this.state.ads.filter(ad => {
      // Returns ad in lowercase then checks if the search string is included inside of state
      return ad.name.toLowerCase().includes(this.state.searchAd.toLowerCase());
    });

    return (
      <>
        <Search handleInput={this.handleInput} />
        <h2 className='font-weight-bold'>NEW ADS</h2>
        <Ads ads={this.state.ads && filteredAds} />
      </>
    );
  }
}

export default Browse;
