// Imports React, Component
import React, { Component } from 'react';
// Imports axios
import axios from 'axios';
// Imports Link Component from React Router DOM
import { Link } from 'react-router-dom';

export class EditAd extends Component {
  constructor() {
    super();
    // Bind methods to onChange Events
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);

    // State
    this.state = {
      _id: ``,
      name: ``,
      image: ``,
      description: ``,
      brand: ``,
      category: ``,
      price: ``
    };
  }

  // onSubmit Method
  onSubmit(e) {
    // Prevents users from submitting more than once
    e.preventDefault();

    // newAd Object
    const newAd = {
      name: this.state.name,
      price: this.state.price,
      image: this.state.image,
      brand: this.state.brand,
      category: this.state.category,
      description: this.state.description
    };

    // Update ad
    axios
      .put(`http://localhost:4000/api/ads/${this.state._id}`, newAd)
      .then(() => {
        // Redirects to Browse Route
        this.props.history.push(`/ad/${this.props.match.params.id}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // Lifecycle Method
  componentDidMount() {
    // Gets ad ID
    axios
      .get(`http://localhost:4000/api/ads/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          _id: res.data._id,
          name: res.data.name,
          price: res.data.price,
          image: res.data.image,
          brand: res.data.brand,
          category: res.data.category,
          description: res.data.description
        });
      })
      .catch(err => console.log(err));
  }

  // onChangeName Method
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  // onChangeImage Method
  onChangeImage(e) {
    this.setState({
      image: e.target.value
    });
  }

  // onChangeDescription Method
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  // onChangeBrand Method
  onChangeBrand(e) {
    this.setState({
      brand: e.target.value
    });
  }

  // onChangeCategory Method
  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }

  // onChangePrice Method
  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  render() {
    return (
      <>
        <Link className='btn btn-light mb-4' to={`/ad/${this.props.match.params.id}`}>
          Go Back
        </Link>
        <h2 className='font-weight-bold'>EDIT AD</h2>
        <br />
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className='form-group'>
            <label>Price</label>
            <input
              type='text'
              className='form-control'
              value={this.state.price}
              onChange={this.onChangePrice}
            />
          </div>
          <div className='form-group'>
            <label>Image</label>
            <input
              type='text'
              className='form-control'
              value={this.state.image}
              onChange={this.onChangeImage}
            />
          </div>
          <div className='form-group'>
            <label>Brand</label>
            <input
              type='text'
              className='form-control'
              value={this.state.brand}
              onChange={this.onChangeBrand}
            />
          </div>
          <div className='form-group'>
            <label>Category</label>
            <input
              type='text'
              className='form-control'
              value={this.state.category}
              onChange={this.onChangeCategory}
            />
          </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea
              type='text'
              className='form-control'
              value={this.state.description}
              onChange={this.onChangeDescription}></textarea>
          </div>
          <div className='form-group'>
            <input type='submit' value='Edit Ad' className='btn btn-block btn-secondary' />
          </div>
        </form>
      </>
    );
  }
}

export default EditAd;
