import React from 'react';
import './DogCard.css'

export default function DogCard({dog}){
    return(
        <div className='dogCard'>
            <img src={dog} alt={dog}/>
        </div>
    )
}