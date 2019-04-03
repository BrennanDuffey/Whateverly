import React, { Component } from 'react';
import Map from './Map.js';
import Header from './Header.js';
import api from './api.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header /> 
       <Map /> 
      </div>
    );
  }
}

export default App;
