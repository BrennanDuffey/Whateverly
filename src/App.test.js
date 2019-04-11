import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App.js';
import Globe from './Globe.js';
import Header from './Header.js';


describe('App', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( 
      <App/>
    );
  });

  it('Should render correctly with all the information passed', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('Should have default states', () => {
    expect(wrapper.state()).toEqual({
      endangeredSpecies: [],
      countries: [],
      searchInput: '',
      favAnimals: [],
      isFavorite: false
    });
  });

  it('Should be able to update favAnimals state', () => {
    expect(wrapper.state().favAnimals).toEqual([]);
    wrapper.instance().addFav('Jaguar');
    expect(wrapper.state().favAnimals).toEqual(['Jaguar']);
  });

  it('Should be able to update favAnimals state', () => {
    expect(wrapper.state().favAnimals).toEqual(['Jaguar']);
    wrapper.instance().addFav('Jaguar');
    expect(wrapper.state().favAnimals).toEqual([]);
  });

  it('Should be able to update searchInput state', () => {
    expect(wrapper.state().searchInput).toEqual('');
    wrapper.instance().generateContent('Jaguar');
    expect(wrapper.state().searchInput).toEqual('Jaguar');
  });


  it('Should be able to update isFavorite state', () => {
    expect(wrapper.state().isFavorite).toEqual(false);
    wrapper.instance().setFavoriteState(true);
    expect(wrapper.state().isFavorite).toEqual(true);
  });
});

