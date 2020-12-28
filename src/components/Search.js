// Imports React, Component
import React, { Component } from 'react';
// Imports Form Component from React Bootstrap
import { Form } from 'react-bootstrap';

export class Search extends Component {
  render() {
    // Search Bar Inline CSS
    let formControlUnderlined = {
      borderWidth: 0,
      borderBottomWidth: '1px',
      borderRadius: 0,
      paddingLeft: 0
    };

    return (
      <div>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Search Sneaker...'
            onChange={this.props.handleInput}
            style={formControlUnderlined}
          />
        </Form.Group>
      </div>
    );
  }
}

export default Search;
