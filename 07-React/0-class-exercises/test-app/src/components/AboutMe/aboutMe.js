import React from 'react';

function AboutMe(props) {
    const {name} = props
  return (
    <div>
        <p>About me</p>
        <p>My name is {name}</p>
      </div>
  );
}

export default AboutMe