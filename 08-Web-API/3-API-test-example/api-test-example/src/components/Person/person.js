import React from 'react';
import "./person.css"

  export default function Person(props){
      const {age, city, name, online,position,state,username, image} = props.person
    return(
        <div id='person'>
            <img width = "150" height = "150" src={image}></img>
            <div className='info'>
                <h1>{name}</h1>
                <p>Age: {age}</p>
                <p>Position: {position}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Username: {username}</p>
                <p>Online: {online?`${username} is Online` : "Offline"}</p>
            </div>
        </div>
    ) 
  }