import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';

import Basic from './components/home/Basic';
import Movie from './components/home/Movie';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Basic} />
            <Route exact path="/movie/:id" component={Movie} />
  
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;