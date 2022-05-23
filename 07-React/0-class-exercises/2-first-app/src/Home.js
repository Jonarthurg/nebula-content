import React, { Component } from 'react';
import Greeting from './Components/Greeting';

// defining our HelloWorld component
class Home extends Component {
  // what should the component render
  render(){
    return (
      <div className="home-container">
        <h1>Hello World!</h1>
        <Greeting greeting={"Hello Bayley"} />
      </div>
    );
  }
}

export default Home;