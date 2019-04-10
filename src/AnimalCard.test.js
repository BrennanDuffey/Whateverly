import React from 'react';
import AnimalCard from './AnimalCard.js';
import { shallow } from 'enzyme';


const mockEndangeredSpecies = 
    {
    "name": "Snow Leopard",
    "genus": "Panthera",
    "endangeredStatus": "Vulnerable",
    "locations": ["China", "Mongolia", "India"],
    "population": 6000,
    "threats": ["Poaching","Climate Change"],
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Snow_Leopard_in_Ladakh%28_Photo_by_Tashi_Lonchay%29.jpg"
    };
const mockAddFav = jest.fn();
const mockSearchInput = 'Jaguar';
const mockFavAnimals = ['Jaguar', 'Narwhal'];
const mockDefaultProps = props;

describe('AnimalCard', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <AnimalCard {...mockEndangeredSpecies}
                        addFav={mockAddFav}
                        searchInput={mockSearchInput}
                        favAnimals={mockFavAnimals}
            />
        )
    });
    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    }); 
    it('should have a proper default state', () => {
        expect(wrapper.state()).toEqual( {isFav: false} )
    });
});