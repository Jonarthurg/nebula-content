import React, { useState, useRef } from 'react';
import Profile from '../Profile/profile';


function ProfileForm(props) {
    const [profile, setProfile] = useState({
        name: '',
        hobby: '',
        food: ''
      })
      const [profileList, setProfileList] = useState([])
    console.log(props)
      //Empty array
      // Runs once on Mount (first render)
      // useEffect(()=> {
      //   console.log("ComponentDidMount")
      // },[])
    
      // useEffect(()=> {
      //   console.log("APP IS UPDATING - COMPONENTDIDUPDATE")
      // })
    
      //   useEffect(()=> {
      //   console.log("Watching certain values")
      // },[profile.name, profile.hobby, profile.food])
      
    
      const createProfile = (e) => {
        e.preventDefault()
        if(profile.name && profile.hobby && profile.food){
          setProfileList([...profileList, profile])
          setProfile({
            name: '',
            hobby: '',
            food: ''
          })
    
        }
      }
      const handleChange = (event, name) => {
        setProfile({ ...profile, [name]: event.target.value })
      }
    
      const profileCards = profileList.map((profile,i) => {
        return <Profile key={i} profile={profile} />
      })
    return (
        <div>
      <form className='form'>
        <label className='label'>Enter your favorite Name:
          <input
            type="text"
            value={profile.name}
            onChange={(e) => handleChange(e, 'name')}
          />
        </label>
        <label className='label'>Enter your favorite Hobby:
          <input
            type="text"
            value={profile.hobby}
            onChange={(e) => handleChange(e, 'hobby')}
          />
        </label>
        <label className='label'>Enter your favorite Food:
          <input
            type="text"
            value={profile.food}
            onChange={(e) => handleChange(e, 'food')}
          />
        </label>
        <input type='submit' onClick={createProfile} />
      </form>
      <div className='profileCards'>
      {profileCards}
      </div>
    </div>
    );
}

export default ProfileForm