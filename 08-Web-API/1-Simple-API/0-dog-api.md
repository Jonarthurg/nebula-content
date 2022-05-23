# [DOG API](https://dog.ceo/dog-api/)
<!-- For instructors: https://github.com/Nebula-Academy/dog-api -->
- Before we get started, run `npx create-react-app dog-api`
In this exercise we're going to render some images of dogs from a real API. 

A BIG aspect of API's and if they are widely use is documentation. Many APIs can be needlessly complex to figure out and good documentation can allow us to navigate the api. 

[Dogs API](https://dog.ceo/dog-api/) is very simple and therefore doesn't have much documentation. Other APIs will require you to create access keys. Pay for utility and have other hurdles to raise the bar to entry. Remember: just because it's free for us to use doesn't mean someone isn't incurring costs. The person that set up the [dog API](https://dog.ceo/dog-api/) has a database running somewhere and that is costing them money. 

The first thing to do is to install some sort of [JSON browser viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US)

This will allow us to view data in our browser. For example our JSON from our last project would look like this:
```js
`{"employees":[{"name": "Micheal Scott","username": "M-Scott","city": "Scranton","state": "Pennsylvania", "online": false,"position": "manager","age": 31}, { "name": Dwight Schrute","username": "D-Schrute","city": "Scranton","state": "Pennsylvania", "online": true,"position": "assistant to the  ","age": 31},{"name": "James Halpert","username": "J-Halpert","city": "Scranton","state": "Pennsylvania", "online": false,"position": "Sales Lead","age": 31},{"name": Toby Flenderson","username": "T-Flenz","city": "Scranton","state": "Pennsylvania", "online": true,"position": "HR","age": 31}]}`
```
And we want it to look like this:
```js
`{
    "employees":[
        {
          "name": "Micheal Scott",
          "username": "M-Scott",
          "city": "Scranton",
          "state": "Pennsylvania", 
          "online": false,
          "position": "manager",
          "age": 31
        }, 
        ...
        ...
        ...

  }`
```

Now that we have that installed, let's take a look at a route: `https://dog.ceo/api/breeds/list/all`

Clicking this link allows us to see the result of a request to a server. 
- We requested to see all breeds (based on their api specifications we had to create our URL in a specific way)
- They responded with a list of breeds
```js
{
  "message": {
    "affenpinscher": [
      
    ],
    "african": [
      
    ],
    "airedale": [
      
    ],
    "akita": [
      
    ],
    ...
    ...
    ...
```

Notice in the [documentation](https://dog.ceo/dog-api/documentation/) we have a list of different `endpoints`. There are only a few on this small, free API but there can be many more. 

For example [YouTube player API](https://developers.google.com/youtube/v3/docs) has dozens of endpoints

Now that we have a list of breeds we can take a look and pick one out. We can then use that information to request a breed:
For example I'd like Sheepdogs. 

Let's head back to the documentation and grab their ['by breed' endpoint](https://dog.ceo/dog-api/documentation/breed) and then use the given url. `https://dog.ceo/api/breed/hound/images`. Notice thier default has `hound`. I want to swap that with `sheepdog`. 

## Making a request
Inside our `App.js` let's make a request for the dogs
```js
// fetch the data
fetch(`https://dog.ceo/api/breed/sheepdog/images`)
  // convert the data from json into an object
  .then(res => res.json())
  // return that object
  // log the response 
  .then(res => console.log(res))
```
> Here we are creating a promise and chaining events together using `.then()` to manipulate the data as needed. We'll likely need to save this information to a hook so let's do that now. 
- Import `useState`
```js
import React, { useState } from 'react';
```
- Create the hook 
```js
const [dogs, setDogs] = useState([]);
```
- We want to update the last line of our promise to `setDogs` HOWEVER this will cause our component to update, which will cause our fetch to fire again, causing our component to render and fetch infinitely. So lets create a `useEffect` to wrap the fetch statement.
```js
// Update our import
import React, { useState, useEffect } from 'react';

//create our useEffect
useEffect(() => {
  fetch(`https://dog.ceo/api/breed/sheepdog/images`)
    // convert the data from json into an object
    .then(res => res.json())
    // return that object
    .then(res => setDogs(res.message))
  },[])
```
Notice the empty array for dependencies at the end. This means 'run this `useEffect` once when we load the component. 

We also updated our last `.then`
```js
.then(res => setDogs(res.message))
```
Now we just need to create a component and pass the information down
- I'm creating a functional component called `DogCard.js`, mapping over `dogs` and then passing props through the component
```js
<div className="App">
  {dogs.map(dog => <DogCard key={dog} dog={dog}/>)}
</div>
```
For now my dog component just renders the link
```js
import React from 'react';
export default function DogCard(props){
    console.log(props)
    return(
        <h1>{props.props}</h1>
    )
}
```
Next let's actually render the images by swapping the h1 with an img tag:
```js
  <img src={props.dog} alt={props.dog}/>
```
Okay great, we are rending images of dogs. Let's style the images to render in a specific style:
```css
/* My App.css looks like this:  */
.App{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
/* and my DogCard.css looks like this: */
.dogCard{
    max-height: 300px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 3px 4px 5px black;
    overflow: hidden;
}

.dogCard img{
    height: 300px;
}
```
Great! Our furry friends are looking good. Let's now add some functionality to our application. 

We don't just want to have 1 type of dog show up. We want to be able to search for specific dogs. 

Let's create a hook to receive a search term and a component for searching. 

First we need some options:
```js
  const [options, setOptions] = useState([]);
```
Then we need to fetch and update our options, this can go in it's own `useEffect` or in the existing one:
```js
fetch(`https://dog.ceo/api/breeds/list/all`)
  .then(res => res.json())
  .then(res => setOptions(res.message))
```
Next we want to creat a search component and render it. It needs to pass a function down so that we can pass data back up to our `App.js`. It also needs to receive our options so that we can create a dropdown to select a dog. 

Our new Component, Search.js:
```js
import React from 'react';
import './Search.css'
export default function Search(props){
    return(
        <div className='search'>
            <select onChange={e => props.handleChange(e)}>
                {props.options.map(dogName =><option key={Math.random(1)*1000000} value={dogName}>{dogName}</option>)}
            </select>
        </div>
    )
}
```
Using our `Search.js` component in `App.js`
```js
<Search search={handleChange} options={options}/>
```
Handle change needs to be a function that re-sets dogs hook in `App.js`
```js
// Our new function
const handleChange = (e) => {
  e.preventDefault();
  fetch(`https://dog.ceo/api/breed/${e.target.value}/images`)
    .then(res => res.json())
    .then(res => setDogs(res.message))
}
```
Let's take a look at our newest response, the one for `setOptions`.

It's actually an object, and we wont be able to iterate over that. So we need to modify our fetch to return an array.

Now our last step in the fetch looks something like this:
```js
.then(res => {
  let arr = [];
  for(let key in res.message){
    arr.push(key)
  }
  setOptions(arr)
})
```
The data we needed was in the keys, we store the keys in an array and use that for fetching the dropdown. 

## CODE UPDATE:
Incase we have diverged, this is what your code should look like:
```js
// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import DogCard from './components/DogCard/DogCard';
import Search from './components/Search/Search';

function App() {
  const [dogs, setDogs] = useState([]);
  const [options, setOptions] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/sheepdog/images`)
      .then(res => res.json())
      .then(res => setDogs(res.message))

    fetch(`https://dog.ceo/api/breeds/list/all`)
      .then(res => res.json())
  
      .then(res => {
        let arr = [];
        for(let key in res.message){
          arr.push(key)
        }
        setOptions(arr)
      })
    },[])
    
  

  return (
    <div className="App">
      <Search search={handleChange} options={options}/>
      {dogs.map(dog => <DogCard key={dog} dog={dog}/>)}
    </div>
  );
}

export default App;
```
```js
//DogCard.js
import React from 'react';
import './DogCard.css'
export default function DogCard(props){
    return(
        <div className='dogCard'>
            <img src={props.dog} alt={props.dog}/>
        </div>
    )
}
```
```js
// Search.js
import React from 'react';
import './Search.css'
export default function Search(props){
    // console.log(props);
    return(
        <div className='search'>
            <select onChange={e => props.handleChange(e)}>
                {props.options.map(dogName =><option key={Math.random(1)*1000000} value={dogName}>{dogName}</option>)}
            </select>
        </div>
    )
}
```

The final thing to do is to make sure that our dropdown actually represents the dropdown we've selected.

This requires us to add a hook
```js
const [dropValue, setDropValue] = useState('');
```
Setting that hook:
```js
const handleChange = (e) => {
    e.preventDefault();
    setDropValue(e.target.value); // <-- This line is new!
    fetch(`https://dog.ceo/api/breed/${e.target.value}/images`)
      .then(res => res.json())
      .then(res => setDogs(res.message))
  }
```
Passing that value down to the component
```js
<Search handleChange={handleChange} options={options} dropValue={dropValue}/>
```
And using it in the component:
```js
<select onChange={e => props.handleChange(e)} value={props.dropValue}>
```
While we're here lets make a small quality of life change (qol/QoL)
- Create a default value for when no breed has been selected
```js
<div className='search'>
  <select onChange={e => props.handleChange(e)} value={props.dropValue}>
      <option defaultValue>Select an Option</option>
      {props.options.map(dogName =><option key={Math.random(1)*1000000} value={dogName}>{dogName}</option>)}
  </select>
</div>
```