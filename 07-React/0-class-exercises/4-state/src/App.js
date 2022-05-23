import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      hangryMeter: 6
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      hangryMeter: this.state.hangryMeter + 1
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this.handleClick}>Getting more Hangry</button>
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Hangry Meter! </h1>     
          <div>{this.state.hangryMeter}</div>
        </header>
      </div>
    );
  }
}

// document.addEventListener("click", callBackFunction);
export default App;