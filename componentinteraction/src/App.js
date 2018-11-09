import React, { Component } from 'react';
import './App.css';

import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    currentMeal: {
      base: "rice",
      meat: "chicken",
      dessert: "ice cream"
    }
  }

  lastNameHandler = (newLastName) => {
    const newObj = {...this.state.currentMeal};
    console.log(newObj);
    newObj.dessert = 'Apple Pie';
    // this.setState({
    //   currentMeal: { ...this.state.currentMeal, dessert: "Apple Pie" }
    // });
    this.setState({ currentMeal: newObj });
    console.log(newObj);
  }

  lastNameChangedHandler = (event) => {
    this.setState({lastName: event.target.value});
    console.log('Last Name Changed');
  }

  render() {
    return <div className="App">
        <button onClick={this.lastNameHandler}>
          Call Me
        </button>
      {this.state.currentMeal.dessert}
        <UserOutput firstName={this.state.currentMeal.dessert} lastName={this.state.currentMeal.base} changeLastName={this.lastNameHandler.bind(this, "Agrawal")} />
        <UserInput changed={this.lastNameChangedHandler} />
      </div>;
  }
}

export default App;
