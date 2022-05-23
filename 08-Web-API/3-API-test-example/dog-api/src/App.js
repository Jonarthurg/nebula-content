import './App.css';
import React, { useState, useEffect } from 'react';
import DogCard from './components/DogCard/DogCard';
import Search from './components/Search/Search';

function App() {

  const [dogs, setDogs] = useState([]);
  const [options, setOptions] = useState([]);


  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/list/all`)
      .then(res => res.json())
      .then(res => setOptions(Object.keys(res.message)))
      // .then(res => {
      //   let arr = [];
      //   for(let key in res.message){
      //     arr.push(key)
      //   }
      //   setOptions(arr)
      // })
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    fetch(`https://dog.ceo/api/breed/${e.target.value}/images`)
      .then(res => res.json())
      .then(res => setDogs(res.message))
  }

  console.log(options)
  return (
    <div className="App">
      <Search handleChange={handleChange} options={options}/>
      {dogs.map(dog => <DogCard key={dog} dog={dog} />)}
    </div>
  );
}

export default App;
