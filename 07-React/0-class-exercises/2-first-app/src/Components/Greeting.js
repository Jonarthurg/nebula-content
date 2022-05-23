import React from 'react';

const list = [
  "Bayley", "Jessica", "Shaundel", "Johnnaibys", "Lucian"
]

const displayList = () => {
  return list.map(name => <div className="names">{name}</div>)
}

const Greeting = (props) => {
  return (
    <div>
      <h1>{ props.greeting }</h1>
      {displayList()}
    </div>
  );
}

export default Greeting;