import React from 'react'
import {
  configure,
  shallow
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Counter from '../Counter';
import renderer from 'react-test-renderer';


    describe('A counter', () => {
        it('Displays the count and label', () => {
            const counter = renderer.create( < Counter legend = "Count" count = { 34 } />);
              expect(counter.toJSON()).toMatchSnapshot();
            });
        });