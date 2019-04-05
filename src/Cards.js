import React from 'react';
import './Cards.css';
const Cards = () => {
  return (
    <section className="cards"> 
      <img src="https://c402277.ssl.cf1.rackcdn.com/photos/1341/images/hero_full/snow-leopard-test.jpg?1345592123" alt="prop-stuff" />
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