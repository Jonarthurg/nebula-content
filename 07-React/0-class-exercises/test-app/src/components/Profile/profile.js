import React from 'react';
import AboutMe from '../AboutMe/aboutMe';
import Hobbies from '../Hobbies/hobbies';
import Food from '../Food/food';
import './profile.css'

function Profile(props) {
    const {name, hobby, food} = props.profile
    return (
        <div className='profile'>
            <AboutMe name={name} />
            <Hobbies hobby={hobby} />
            <Food food={food} />
        </div>
    );
}

export default Profile