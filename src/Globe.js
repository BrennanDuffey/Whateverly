import React, { Component } from 'react';
import Button from './Button.js';
import Card from './Card.js';
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
      return <Card {...species} key={species.name}/>
      })
  }

  renderCountries = () => {
    
  }


  render() {
    return(
      <main>
        {
          this.renderSpecies()
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