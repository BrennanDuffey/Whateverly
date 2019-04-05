import React, { Component } from 'react';
import Button from './Button.js';
import Cards from './Cards.js';
import worldMap from './worldmap.jpg'


class Globe extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  renderSpecies = () => {
    const { endangeredSpecies } = this.props
    console.log(endangeredSpecies)
    // return endangeredSpecies.map(val => <Cards {...val}/>)
    return this.props.endangeredSpecies.map(species => {
      return <Cards 
        name={species.name}
        genus={species.genus}
        endangeredStatus={species.endangeredStatus}
        locations={species.locations}
        population={species.population}
        threats={species.threats}
        image={species.image} 
        key={species.name} />
      })
      // .filter(card => card.name === this.props.searchInput)
  }

  render() {
    return(
      <main>
        {
          this.renderSpecies()
      }
      {/* console.log('card stuff: ', species.name); */}
      </main>
    )
  }
}




export default Globe;
{/* <picture>
  {/* <img src={worldMap} alt="World Map" /> 
</picture>
<Button /> */}