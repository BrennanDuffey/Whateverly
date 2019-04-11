import React from 'react';
import Globe from './Globe.js';
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
const mockCountries = [ 
  {
    "name": "China",
    "population": 1418791076,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Wildlife Conservation Society China", "link": "https://china.wcs.org"},
      {"name": "Save China's Tigers", "link": "https://savechinastigers.org/"}
    ]   
  },
  {
    "name": "Mongolia",
    "population": 3166244,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Wildlife Conservation Society - Mongolia", "link": "https://mongolia.wcs.org/"},
      {"name": "Wildlife Science and Conservation Center of Mongolia", "link": "http://www.wscc.org.mn/"} 
    ] 
  }
];

const mockFavAnimals = [];
const mockSearchInput = '';
const mockIsFavorite = false;

const mockAddFav = jest.fn();

describe('Globe', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( 
      <Globe  searchInput={mockSearchInput}
              endangeredSpecies={mockEndageredSpecies} 
              countries={mockCountries}
              addFav={mockAddFav} 
              favAnimals={mockFavAnimals}
              isFavorite={mockIsFavorite}/>
    )
  });

  it('Should render correctly with all the information passed', () => {
      expect(wrapper).toMatchSnapshot();
  });
});