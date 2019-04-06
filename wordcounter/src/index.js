import React from 'react';
import ReactDOM from 'react-dom';

function Counter({count}) {
  return (
    <p className="mb2">
      Word Count: {count}
    </p>
  );
}

function ProgressBar({completion}) {
  const percentage = completion * 100
  return (
<div className="mv2 flex flex-column">
   <label htmlFor="progress" className="mv2">
   Progress
   </label>
   <progress value={completion} id="progress" className="bn">
   {percentage}%
   </progress>
</div>
  );
}

const SUCCESS = 'SUCCESS'; 
const FAILURE = 'FAILURE'; 
const WAITING = 'WAITING'; 
const IDLE = 'IDLE';

function SaveButton({onClick}) {
  return (
    <button className="pv2 ph3" onClick={onClick}>
      Save
    </button>
  );
}

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

function Editor({ text, onTextChange}) { 
  function handleChange(event) { 
    onTextChange(event.target.value);
  }

  return (
<div className="flex flex-column mv2"> <label htmlFor="editor" className="mv2">
        Enter your text:
      </label>
<textarea value={text} id="editor" onChange={handleChange}/> 
</div>); 
}

function countWords(text) {
  return text ? text.match(/\w+/g).length : 0;
}

class SaveManager extends React.Component { 
  constructor() {
    super();
    this.state = {saveStatus: IDLE};
    this.save = this.save.bind(this);
  }
  save(event) {
    event.preventDefault();
    this.setState(() => {status: WAITING});
    this.props
    .saveFunction(this.props.data).then(
       success => this.setState(() => ({ saveStatus: SUCCESS })),
       failure => this.setState(() => ({ saveStatus: FAILURE }))
    );
  }

  render() { 
    return (
          <div className="flex flex-column mv2"> 
          <SaveButton onClick={this.save} /> 
          <AlertBox status={this.state.saveStatus} />
          </div> );
    }
}

function AlertBox({ status }) { 
  if (status === FAILURE) {
  return <div className="mv2">Save failed</div>; } 
  else if (status === SUCCESS) {
       return <div className="mv2">Save successful</div>; 
} else if (status === WAITING) {
  return <div className="mv2">Saving...</div>; } 
  else {
  return null; 
}
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

  ReactDOM.render(
    <WordCounter targetWordCount={10} />, 
    document.getElementById('app')
  ); 