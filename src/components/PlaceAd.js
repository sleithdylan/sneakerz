// Imports React, Component
import React, { Component } from 'react';

export class PlaceAd extends Component {
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
      price: ``,
      numReviews: ``
    };
  }

  // onSubmit Method
  onSubmit(e) {
    // Prevents users from submitting more than once
    e.preventDefault();
    alert(
      `Ad: ${this.state.name} | ${this.state.price} | ${this.state.image} | ${this.state.brand} | ${this.state.category} | ${this.state.description}`
    );
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
        <h2 className='font-weight-bold'>PLACE AD</h2>
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
            <textarea
              type='text'
              className='form-control'
              value={this.state.image}
              onChange={this.onChangeImage}></textarea>
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
            <input
              type='text'
              className='form-control'
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Place Ad' className='btn btn-secondary' />
          </div>
        </form>
      </>
    );
  }
}

export default PlaceAd;
