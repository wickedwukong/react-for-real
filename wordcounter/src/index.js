
import ReactDOM from 'react-dom';
import React from 'react';
import WordCounter from './WordCounter'

  ReactDOM.render(
    <WordCounter targetWordCount={10} />, 
    document.getElementById('app')
  ); 