import React from 'react';
import AnimalCard from './AnimalCard.js';
import CountryCard from './CountryCard.js';

const CountryCardContainer = (props) => {
  return (
    <section>
      {props.countries.filter(country => country.name.toLowerCase().includes(props.searchInput)).map(country => {
        return <CountryCard {...country}  key={country.name}/>
      })}
      {props.endangeredSpecies
      .filter(species => species.locations.map(location => location.toLowerCase())
        .includes(props.searchInput))
        .map(species => {
        return <AnimalCard {...species} key={species.name} addFav={props.addFav} favAnimals={props.favAnimals} />
      })}
    </section>
  )
}

export default CountryCardContainer;