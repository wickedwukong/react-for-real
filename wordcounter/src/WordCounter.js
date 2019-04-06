import React from 'react';
import ProgressBar from './ProgressBar'
import Counter from './Counter'
import SaveManager from './SaveManager'
import Editor from './Editor'




function makeFakeRequest() {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
       if (Math.random() > 0.5) {
         resolve('success');
       } else {
        reject("failure");
       }
     }, 100)
  });
}



function countWords(text) {
  return text ? text.match(/\w+/g).length : 0;
}





class WordCounter extends React.Component {
  constructor() {
     super();
     this.state = {text: ''};
     this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(currentText) {
     this.setState(() => ({ text: currentText }));
  }

  render() {
    const {targetWordCount} = this.props;
    const {text} = this.state;
    const wordCount = countWords(text);
    const progress = wordCount / targetWordCount;



      return (
        <form className="measure pa4 sans-serif">
        <Editor text={text} onTextChange={this.handleTextChange} />
        <div className="flex mt3">
          <Counter count={wordCount} />
          <ProgressBar completion={progress}/>
          <SaveManager data={this.state} saveFunction={makeFakeRequest} />
        </div>
        </form>
      );
  }
}

export default WordCounter;