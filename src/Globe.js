import React, { Component } from 'react';
import CountryCardContainer from './CountryCardContainer.js';
import AnimalCardContainer from './AnimalCardContainer.js';

class Globe extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  // renderSpecies = () => {
  //   return this.props.endangeredSpecies
  //   .filter(species => species.name.toLowerCase() === this.props.searchInput.toLowerCase())
  //   .map(species => {
  //     return <AnimalCard {...species} key={species.name} addFav={this.props.addFav}/>
  //   })
  // }

  // renderCountry = () => {
  //   return this.props.countries.filter(country => country.name.toLowerCase() === this.props.searchInput.toLowerCase()).map(country => {
  //     return <CountryCard {...country}  key={country.name}/>
  //   })
  // }

  // renderCountrySpecies = () => {
  //   return this.props.endangeredSpecies
  //   .filter(species => species.locations.map(location => location.toLowerCase())
  //     .includes(this.props.searchInput.toLowerCase()))
  //   .map(species => {
  //     return <AnimalCard {...species} key={species.name} addFav={this.props.addFav}/>
  //   })
  // }


  render() {
    return(
      <main>
        <CountryCardContainer endangeredSpecies={this.props.endangeredSpecies} 
          countries={this.props.countries}
          addFav={this.props.addFav} 
          searchInput={this.props.searchInput} 
        />
        <AnimalCardContainer endangeredSpecies={this.props.endangeredSpecies} 
          addFav={this.props.addFav} 
          searchInput={this.props.searchInput} 
        />
      </main>
    )
  }
}




export default Globe;
