import React from 'react';
import AnimalCard from './AnimalCard.js';

const FavoriteCardContainer = (props) => {
  return (
    <section> 
      {/* <h2>Favorites</h2> */}
      {props.endangeredSpecies.filter(species => props.favAnimals.includes(species.name))
      .map(species => {
          return <AnimalCard {...species} key={species.name} addFav={props.addFav} favAnimals={props.favAnimals}/>
      })}
    </section>
  )
}

export default FavoriteCardContainer;

