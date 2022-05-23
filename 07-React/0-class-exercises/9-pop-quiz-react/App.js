import React from 'react'
import './App.css';
import ULinterface from './ULinterface';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dogs: []
    }
  }

  async getDogs(){
    const holdRes = await fetch("https://dog-api/")
    return holdRes.json();
  }

  componentDidMount(){
    this.getDogs()
      .then(dogs => {
        this.setState({ dogs: dogs })
      })
      .catch(err => console.error(err));

    console.log("Testing...");
  }

  displayNames(){
    return this.state.dogs.map(dog => 
      <li key={dog.id}>{dog.name}</li>
    )
  }

  render(){
    return (
      <div>
        <header className="App-header">
          Dogs
        </header>
        <ULinterface>{this.displayNames()}</ULinterface>
      </div>
    );
  }
}

export default App;


// There are mistakes in this code. Can you spot the issues and fix them? (without trying to run the code)
// Note: you can assume we have access to React

// What order will the code run in?