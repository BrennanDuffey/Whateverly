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

  
});

