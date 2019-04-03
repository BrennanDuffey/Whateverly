import React, { Component } from 'react';
import Map from './Map.js';
import Header from './Header.js';
import api from './api.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }
  
  generateContent = (inputValue) => {
    console.log(inputValue)
  }

  render() {
    return (
      <div className="App">
       <Header generateContent={this.generateContent} /> 
       <Map /> 
      </div>
    );
  }
}

export default App;
