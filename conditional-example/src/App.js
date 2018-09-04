import React, { Component } from 'react';
import './App.css';

import Validation from "./ValidationComponent/ValidationComponent";
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    inputStr: ''
  }

  inputLength = (event) => {
    this.setState({
      inputStr: event.target.value
    })
  }

  deleteCharHandler = (index) => {
    const textInput = this.state.inputStr.split('');
    textInput.splice(index, 1);
    const updatedStr = textInput.join('');
    this.setState({ inputStr: updatedStr })
  }

  render() {
    const charList = this.state.inputStr.split('').map((ch, index) => {
      return <CharComponent removeChar={() => this.deleteCharHandler(index)} character={ch} key={ch + index} />;
    })

    return <div className="App">
        <input type="text" onChange={this.inputLength} value={this.state.inputStr}/>
        <Validation textLength={this.state.inputStr.length}></Validation>
        {charList}
      </div>;
  }
}

export default App;
