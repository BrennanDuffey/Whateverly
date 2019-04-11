import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showFavorites: true
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.props.generateContent(e.target.value.trim().toLowerCase());
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.setFavoriteState(this.state.showFavorites)
    this.setState({showFavorites: !this.state.showFavorites})
  }

  render() {
    let showFavBtn = 'Show Favorites';
    if (!this.state.showFavorites) {
      showFavBtn = "Show All";
    } 

    return(
      <header>
        <h1>Kayla's Ark</h1>
        <input className='search' type="search" placeholder=" Search Animal or Country..." onChange={this.handleChange} />  
        <button className='show-favorites' onClick={this.handleClick}>{showFavBtn}</button>
      </header>
    
    )
  }
}

export default Header;
