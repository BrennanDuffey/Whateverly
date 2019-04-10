import React from 'react';
import Link from './Link.js'
import './CountryCard.css';

const CountryCard = (props) => {
  return (
    <article className="cc-card">
      <h2>{props.name}</h2>
      <p className="cc">Homo-Sapian Population: <span className="cc-pop">{props.population}</span></p>
      <p className="cc">Threats: <span className="cc-info">{props.topThreats.join(', ')}</span></p>
      <p className="cc">Conservation Groups: <span className="cc-info">{props.conservationGroups.map(group => {
        return <Link link={group.link} name={group.name} key={group.name}/>
      })}</span></p>
    </article>
  )
}

//Conservation groups could go in its own component IMO Brennan

export default CountryCard;