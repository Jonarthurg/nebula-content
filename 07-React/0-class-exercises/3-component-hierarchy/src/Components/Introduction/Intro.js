import React from 'react';
import Button from './Button';
import './Intro.css';

const Intro = (props) => {
  return (
    <main id="intro-page-container">
      <div id="intro-page">
        <h1>Intro</h1>
        <h2></h2>
        <p>Hi. My name is {props.name} and I like React</p>
        <Button title={"Resume"} />
      </div>
    </main>
  );
}

export default Intro;