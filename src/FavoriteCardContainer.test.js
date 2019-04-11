import React from 'react';
import FavoriteCardContainer from './FavoriteCardContainer.js';
import { shallow } from 'enzyme';

const mockEndageredSpecies = [
  {
    "name": "Snow Leopard",
    "genus": "Panthera",
    "endangeredStatus": "Vulnerable",
    "locations": ["China", "Mongolia", "India"],
    "population": 6000,
    "threats": ["Poaching","Climate Change"],
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Snow_Leopard_in_Ladakh%28_Photo_by_Tashi_Lonchay%29.jpg"
  },
  {
    "name": "Jaguar",
    "genus": "Panthera",
    "endangeredStatus": "Near Threatened",
    "locations": ["Amazonian Brazil", "South America", "Central America", "Mexico" ],
    "population": "Unknown",
    "threats": ["Poaching", "Habitat Loss", "Human Intolerance" ],
    "image": "https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  }
];
const mockFavAnimals = ["Snow Leopard"];
const mockAddFav = jest.fn();

describe('FavoriteCardContainer', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <FavoriteCardContainer endangeredSpecies={mockEndageredSpecies} 
      addFav={mockAddFav} 
      favAnimals={mockFavAnimals}/>
    )
  });

  it('Should render correctly with all the information passed', () => {
      expect(wrapper).toMatchSnapshot();
  });

  
});