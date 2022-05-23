import React from 'react';

function Food(props) {
  return (
    <div>
        <p>Food</p>
        <p>My favorite food is {props.food}</p>
      </div>
  );
}

export default Food 