import React from 'react';
import './CountryCard.css';

const CountryCard = (props) => {
  return (
    <article>
      <h2>{props.name}</h2>
      <p>Population: {props.population}</p>
      <p>Threats: {props.topThreats.join(', ')} </p>
      <p>Conservation Groups: {props.conservationGroups.join(', ')} </p>
    </article>
  )
}

//Conservation groups could go in its own component IMO Brennan

export default CountryCard;