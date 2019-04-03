import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return(
      <header>
        <h1>Name</h1>
        <input type="search" value={} placeholder="  Search Animal..." />  
        <button onClick={}>Submit</button>  
      </header>
    
    )
  }
}

export default Header;
