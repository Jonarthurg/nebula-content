import React, { Component } from 'react';
import Intro from './Components/Introduction/Intro';
import SkillsPage from './Components/Skills/SkillsPage';
import './App.css';

class App extends Component {
  render(){
    const myName = "Tefe"
    return (
      <div id="app-container">
        <Intro name={myName} />
        <SkillsPage />
      </div>
    );
  }
}

export default App;