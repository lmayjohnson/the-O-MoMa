import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Components/Contact';
    describe('Contact component tests', ()=> {
        const wrapper = shallow(<Contact />);

        it('should have input for name and email', ()=> {
            //Name and email input field should be present
            expect(wrapper.find('input#name')).toEqual("");
            expect(wrapper.find('input#email')).toEqual("");
        });

    });