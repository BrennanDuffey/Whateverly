import React, { Component } from 'react';
import Map from './Map.js';
import Header from './Header.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      endangeredSpecies: null,
      countries: null,
      searchInput: ''
    }
  }

  componentDidMount = () => {
    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/KaylaLawson/endangeredSpecies')
    .then(response => response.json())
    .then(endangeredSpecies => this.setState({endangeredSpecies}, () => {
      console.log('Hi Brennen:', this.state)
    }))
    .catch(err => console.log(err))

    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/KaylaLawson/countries')
    .then(response => response.json())
    .then(countries => this.setState({countries}, () => {
      console.log('Hi Brennen:', this.state)
    }))
    .catch(err => console.log('Hi Brennen:', err))
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
       <Map searchInput={this.state.searchInput} 
            endangeredSpecies={this.state.endangeredSpecies} 
            countries={this.state.countries} /> 
      </div>
    );
  }
}

export default App;
