import React, { Component } from 'react';
import Map from './Map.js';
import Header from './Header.js';
import api from './api.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ' '
    }
  }
  
  generateContent = (inputValue) => {
    // console.log(inputValue)
    this.setState({
      searchInput: inputValue
    })

  }

  render() {
    return (
      <div className="App">
       <Header generateContent={this.generateContent} /> 
       <Map searchInput={this.state.searchInput} /> 
      </div>
    );
  }
}

export default App;
