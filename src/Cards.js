import React from 'react';
import './Cards.css';
const Cards = (props) => {
  return (
    <section className="cards"> 
      <img src={props.image} />
      <article>
        {/* favorite an animal */}
        <h2>Animal Name</h2>
        <p>Extinction Level: </p>
        <p>Population: </p>
        <p>Genus: </p>
        <p>Locations: </p>
        <p>Threats: </p>
        <p>Get Involved: </p>
      </article>
    </section>
  )
}

export default Cards; 