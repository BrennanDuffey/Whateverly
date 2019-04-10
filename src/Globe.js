import React, { Component } from 'react';
import CountryCardContainer from './CountryCardContainer.js';
import AnimalCardContainer from './AnimalCardContainer.js';
import FavoriteCardContainer from './FavoriteCardContainer.js';

class Globe extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    // state.displayFavs is true render favs else render all
    // toRender = those ^^^^ results
    if(this.props.isFavorite) {
      return (
        <main> 
          <FavoriteCardContainer endangeredSpecies={this.props.endangeredSpecies} 
          addFav={this.props.addFav} 
          favAnimals={this.props.favAnimals}
        />
        </main>
      )
    } else {
      return(
        <main>
          <CountryCardContainer endangeredSpecies={this.props.endangeredSpecies} 
            countries={this.props.countries}
            addFav={this.props.addFav} 
            searchInput={this.props.searchInput} 
            favAnimals={this.props.favAnimals}
          />
          <AnimalCardContainer endangeredSpecies={this.props.endangeredSpecies} 
            addFav={this.props.addFav} 
            searchInput={this.props.searchInput} 
            favAnimals={this.props.favAnimals}
          />
        </main>
      )
    }
    
  }
}




export default Globe;
