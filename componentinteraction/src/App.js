import React, { Component } from 'react';
import './App.css';

import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    firstName: "Parth",
    lastName: "Vijayvargiya"
  };

  lastNameHandler = (newLastName) => {
    this.setState({ lastName: newLastName });
    console.log('Handler called');
  }

  lastNameChangedHandler = (event) => {
    this.setState({lastName: event.target.value});
    console.log('Last Name Changed');
  }

  render() {
    return <div className="App">
        <button onClick={this.lastNameHandler.bind(this, 'Vijay')}>Call Me</button>
        <UserOutput firstName={this.state.firstName} lastName={this.state.lastName} changeLastName={this.lastNameHandler.bind(this, 'Agrawal')} />
        <UserInput changed={this.lastNameChangedHandler}/>
      </div>;
  }
}

export default App;
