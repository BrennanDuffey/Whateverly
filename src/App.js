import React, { Component } from 'react';
import Globe from './Globe.js';
import Header from './Header.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      endangeredSpecies: [],
      countries: [],
      searchInput: ''
    }
  }

  componentDidMount = () => {
    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/KaylaLawson/endangeredSpecies')
    .then(response => response.json())
    .then(data => this.setState({endangeredSpecies: data.endangeredSpecies }))
    .catch(err => console.log(err))

    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/KaylaLawson/countries')
    .then(response => response.json())
    .then(data => this.setState({countries: data.countries}))
    .catch(err => console.log( err))
  }
  
  generateContent = (inputValue) => {
    // console.log(inputValue)
    this.setState({
      searchInput: inputValue
    })

  }

  render() {
    // console.log(this.state.endangeredSpecies);
    console.log(this.state.countries)
    return (
      <div className="App">
       <Header generateContent={this.generateContent} /> 
       <Globe searchInput={this.state.searchInput} 
            endangeredSpecies={this.state.endangeredSpecies} 
            countries={this.state.countries} /> 
      </div>
    );
  }
}

export default App;
