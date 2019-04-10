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
      searchInput: '',
      favAnimals: [],
      isFavorite: false
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
      .catch(err => console.log(err))
    
    this.getLocalStorage()

  }

  addFav = (animal) => {
    let favs = this.state.favAnimals
     if (!favs.includes(animal)) {
      favs.push(animal)
     } else {
      favs = favs.filter(fav => fav !== animal)
     }
    this.setState({
      favAnimals: favs
    }, () => {
      localStorage.setItem('favs', JSON.stringify(this.state.favAnimals))
    })
  }

  getLocalStorage = () => {
  //  const animalFavorites = JSON.parse(localStorage.getItem('favs'));
   if(localStorage.getItem('favs')) {
     this.setState({ favAnimals: JSON.parse(localStorage.getItem('favs') ) } )
   }
  }
  
  generateContent = (inputValue) => {
    this.setState({
      searchInput: inputValue
    })
  }

  setFavoriteState = (favorited) => {
    this.setState({
      isFavorite: favorited
    })
  }
  render() {
    console.log(this.state.countries)
    return (
      <div className="App">
        <Header generateContent={this.generateContent}
               setFavoriteState={this.setFavoriteState}
        /> 
        <Globe searchInput={this.state.searchInput} 
            endangeredSpecies={this.state.endangeredSpecies} 
            countries={this.state.countries} 
            addFav={this.addFav}
            favAnimals={this.state.favAnimals}
            isFavorite={this.state.isFavorite}
        /> 
      </div>
    );
  }
}

export default App;
