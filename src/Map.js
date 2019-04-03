import React, { Component } from 'react';
import Button from './Button.js';
import Cards from './Cards.js';

class Map extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <main>
        <picture>
          <img src="" alt="World Map" />
        </picture>
        <Button />
        <Cards />
      </main>
    )
  }
}




export default Map;