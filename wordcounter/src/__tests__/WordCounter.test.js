import React from 'react'
import {
  configure,
  shallow
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import WordCounter from '../WordCounter';
import countWords from '../countWords';
import Counter from '../Counter';
import Editor from '../Editor';
import ProgressBar from '../ProgressBar';


configure({
  adapter: new Adapter()
});

describe('When I type some words', () => {
      const target = 10;
      const inputString = 'One two three four';

      const wordCounter = shallow( < WordCounter targetWordCount = { target } />);
      const textArea = wordCounter.find(Editor).dive().find('textarea');

     textArea.simulate('change', { target: { value: inputString } });

     it('displays the correct count as a number', () => {
       const counter = wordCounter.find(Counter)

       expect(counter.prop('count')).toBe(4);

      });

      it('displays the correct progress', () => {
        const progressBar = wordCounter.find(ProgressBar);

        expect(progressBar.prop('completion')).toBe(4 / target);
      })
});