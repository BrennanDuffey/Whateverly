import React from 'react';
import AnimalCard from './AnimalCard.js';

const AnimalCardContainer = (props) => {
  return (
    <section> 
      {props.endangeredSpecies
      .filter(species => species.name.toLowerCase().includes(props.searchInput))
      .map(species => {
        return <AnimalCard {...species} key={species.name} addFav={props.addFav} favAnimals={props.favAnimals}/>
      })}
    </section>
  )
}

export default AnimalCardContainer;


