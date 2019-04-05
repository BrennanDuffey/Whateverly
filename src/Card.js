import React from 'react';
import './Cards.css';
const Cards = (props) => {
  return (
    <section className="cards"> 
      <img src={props.image} />
      <article>
        {/* favorite an animal */}
        <h2>{props.name}</h2>
        <p>Extinction Level: {props.endangeredStatus}</p>
        <p>Population: {props.population}</p>
        <p>Genus: {props.genus}</p>
        <p>Locations: {props.locations.join(', ')}</p>
        <p>Threats: {props.threats.join(', ')}</p>
        <p>Get Involved:</p>
      </article>
    </section>
  )
}

export default Cards; 