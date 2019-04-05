import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      inputValue:  ' '
    }
  }

  handleChange = (e) => {
    this.setState({
      // const { value } = e.target
      inputValue: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.generateContent(this.state.inputValue);
  }

  render() {
    return(
      <header>
        <h1>Name</h1>
        <form>
          <input type="search" placeholder=" Search Animal..." onChange={this.handleChange} />  
          <button onClick={this.handleClick}>Submit</button> 
        </form> 
      </header>
    
    )
  }
}

export default Header;
