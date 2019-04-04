import React, { Component } from 'react';
import Button from './Button.js';
import Cards from './Cards.js';
import worldMap from './worldmap.jpg'


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <main>
        <picture>
          <img src={worldMap} alt="World Map" />
        </picture>
        <Button />
        <Cards searchInput={this.props.searchInput} />
      </main>
    )
  }
}




export default Map;