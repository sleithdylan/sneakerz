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
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
