import React from 'react'
import ULinterface from './ULinterface';
import Greeting from './Components/Greeting';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dogs: ["Theodore", "Sparky"]
    }
  }

  getDogs = () => {
    console.log(this, "<-- running get dogs. If we don't use an arrow we lose this!");
    return ""
  }

  componentDidMount(){
    console.log("Testing...");
  }

  displayNames(){
    return this.state.dogs.map(name => 
      <li>{name}</li>
    )
  }

  render(){
    return (
      <div>
        <h1>Dog Names From State</h1>
        <ULinterface onClick={this.getDogs}>{this.displayNames()}</ULinterface>
        <h2>Greetings From The Greeting Component</h2>
        <Greeting />
      </div>
    );
  }
}

export default App;
