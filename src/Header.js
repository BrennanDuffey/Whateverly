import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showFavorites: false
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.props.generateContent(e.target.value.trim());
  }

  handleClick = (e) => {
    e.preventDefault();
    //method from app takes showfavorite as argument
    this.setState({showFavorites: !this.state.showFavorites})
  }

  render() {
    let showFavBtn = 'Show Favorites';
    // if (this.state.showFavorites)
    return(
      <header>
        <h1>Kayla's Ark</h1>
        <form>
          <input type="search" placeholder=" Search Animal..." onChange={this.handleChange} />  
          <button>{showFavBtn}</button>
        </form> 
      </header>
    
    )
  }
}

export default Header;
