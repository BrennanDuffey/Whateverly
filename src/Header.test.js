import React from 'react';
import Header from './Header.js';
import { shallow } from 'enzyme';


const mockGenerateContent = jest.fn();
const mocksSetFavoriteState = jest.fn();

describe('Header', () => {
  let wrapper 

  beforeEach(() => {
    wrapper = shallow(
      <Header 
        generateContent={mockGenerateContent} 
        setFavoriteState={mocksSetFavoriteState}
      />
    ); 
  });

  it('should match the snapshot with all of the data passed in', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
      expect(wrapper.state()).toEqual( {showFavorites: true});
  });

  it('Should call invoke handleClick when button is clicked', () => {
    expect(wrapper.state()).toEqual( {showFavorites: true});
    wrapper.find('.show-favorites').simulate('click', {
      preventDefault: () => {
      }
    });
    expect(wrapper.state()).toEqual( {showFavorites: false});
    expect(mocksSetFavoriteState).toBeCalled();
    });

  it('Should have a function handle change that fires off generateContent fn', () => {
    wrapper.find('.search').simulate('change', {
      preventDefault: () => {},
      target: { value: 'text' }
    });
    expect(mockGenerateContent).toBeCalled();
  });
});