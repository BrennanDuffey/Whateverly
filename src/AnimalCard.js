import React, { Component } from 'react';
import './AnimalCard.scss';

class AnimalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      isFav: false
    }
  }
  render () {
    let favbtn;
    let favClass = "";
    if(this.props.favAnimals.includes(this.props.name)) {
      favbtn = 'Favorited!'
      favClass = ' favorited'
      // console.log('name: ', props.favAnimals.includes(props.name))
    } else{
      favbtn = 'Add to Favorites'
    }
    return (
      <section className="cards">
        <img src={this.props.image} />
        <article>
          <button onClick={(e) => {
          this.props.addFav(this.props.name)
          
        }
          } id='favbtn' className={favClass}>{favbtn}</button>

        <h2>{this.props.name}</h2>
        <p className="animal-info-titles">Extinction Level: <span className="animal-info-red">{this.props.endangeredStatus}</span></p>
        <p className="animal-info-titles">Population: <span className="animal-info-red">{this.props.population}</span></p>
        <p className="animal-info-titles">Genus: <span className="animal-info">{this.props.genus}</span></p>
        <p className="animal-info-titles">Locations: <span className="animal-info">{this.props.locations.join(', ')}</span></p>
        <p className="animal-info-titles">Threats: <span className="animal-info">{this.props.threats.join(', ')}</span></p>
        </article>
      </section>
    )
  }
}

export default AnimalCard; 