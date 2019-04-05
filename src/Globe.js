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
    const { endangeredSpecies } = this.props
    console.log(endangeredSpecies)
    // return endangeredSpecies.map(val => <Cards {...val}/>)
    return this.props.endangeredSpecies.map(species => {
      return <Card {...species} key={species.name}/>
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