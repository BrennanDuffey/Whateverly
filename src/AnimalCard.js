import React from 'react';
import './AnimalCard.css';

const AnimalCard = (props) => {
  return (
    <section className="cards"> 
      <img src={props.image} />
      <article>
        <button onClick={() => props.addFav(props.name)}>Add to Favorites</button>
        <h2>{props.name}</h2>
        <p className="animal-info-titles">Extinction Level: <span className="animal-info-red">{props.endangeredStatus}</span></p>
        <p className="animal-info-titles">Population: <span className="animal-info-red">{props.population}</span></p>
        <p className="animal-info-titles">Genus: <span className="animal-info">{props.genus}</span></p>
        <p className="animal-info-titles">Locations: <span className="animal-info">{props.locations.join(', ')}</span></p>
        <p className="animal-info-titles">Threats: <span className="animal-info">{props.threats.join(', ')}</span></p>
      </article>
    </section>
  )
}

export default AnimalCard; 