import React from 'react';
import Header from './Header.js';
import { shallow } from 'enzyme';


const mockGenerateContent = jest.fn();

describe('Header', () => {
    let wrapper 
    beforeEach(() => {
        wrapper = shallow(
            <Header generateContent={mockGenerateContent} 

            />
        ) 
    })

    it('should have a default state', () => {
        expect(wrapper.state()).toEqual( {inputValue: ' '})
    });

    it('should match the snapshot with all of the data passed in', () => {
        expect(wrapper).toMatchSnapshot();
    });

})