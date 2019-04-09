import React from 'react';
import AnimalCard from './AnimalCard.js';

const AnimalCardContainer = (props) => {
  return (
    <section> 
      {props.endangeredSpecies
      .filter(species => species.name.toLowerCase() === props.searchInput.toLowerCase())
      .map(species => {
        return <AnimalCard {...species} key={species.name} addFav={props.addFav}/>
      })}
    </section>
  )
}

export default AnimalCardContainer;


