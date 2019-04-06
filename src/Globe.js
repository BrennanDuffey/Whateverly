import React, { Component } from 'react';
import Button from './Button.js';
import AnimalCard from './AnimalCard.js';
import CountryCard from './CountryCard.js'
// import worldMap from './worldmap.jpg'


class Globe extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  renderSpecies = () => {
    return this.props.endangeredSpecies
    .filter(species => species.name === this.props.searchInput)
    .map(species => {
      return <AnimalCard {...species} key={species.name}/>
    })
  }

  renderCountry = () => {
    return this.props.countries.filter(country => country.name === this.props.searchInput).map(country => {
      return <CountryCard {...country}  key={country.name}/>
    })
  }

  renderCountrySpecies = () => {
    return this.props.endangeredSpecies
    .filter(species => species.locations.includes(this.props.searchInput))
    .map(species => {
      return <AnimalCard {...species} key={species.name}/>
    })
  }


  render() {
    return(
      <main>
        {
          this.renderSpecies(),
          this.renderCountry()
          // this.renderCountrySpecies()
        }
        {
          this.renderCountrySpecies()
        }
      </main>
    )
  }
}




export default Globe;
{/* <picture>
  {/* <img src={worldMap} alt="World Map" /> 
</picture>
<Button /> */}