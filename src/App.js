// Imports React, Component
import React, { Component } from 'react';
// Imports Router, Switch, Route from React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Imports Container from React Bootstrap
import { Container } from 'react-bootstrap';
// Imports Footer Component
import Footer from './components/Footer';
// Imports Header Component
import Header from './components/Header';
// Imports Browse Component
import Browse from './components/Browse';
// Imports PlaceAd Component
import PlaceAd from './components/PlaceAd';
// Imports EditAd Component
import EditAd from './components/EditAd';
// Imports AdScreen Component
import AdScreen from './components/AdScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main className='py-5'>
          <Container>
            {/* Renders the first child <Route> that matches location */}
            <Switch>
              <Route path='/' component={Browse} exact />
              <Route path='/ad/new' component={PlaceAd} />
              <Route path='/ad/:id' component={AdScreen} />
              <Route path='/edit/:id' component={EditAd} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
