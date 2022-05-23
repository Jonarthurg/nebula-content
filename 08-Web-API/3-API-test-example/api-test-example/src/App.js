import './App.css';
import { useState, useEffect } from "react";
import Person from './components/Person/person';
function App() {
  const [data, setData] = useState({})

  const json = `{
    "employees":[
        {
          "name": "Micheal Scott",
          "username": "M-Scott",
          "city": "Scranton",
          "state": "Pennsylvania", 
          "online": false,
          "position": "manager",
          "age": 31,
          "image": "https://wallpapercave.com/wp/wp4292822.jpg"
        }, 
        { 
          "name": "Dwight Schrute",
          "username": "D-Schrute",
          "city": "Scranton",
          "state": "Pennsylvania", 
          "online": true,
          "position": "assistant to the regional manager",
          "age": 31,
          "image": "https://akns-images.eonline.com/eol_images/Entire_Site/2016101/rs_600x600-161101084815-600.rainn-wilson.cm.11116.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top"
        },
        {
          "name": "James Halpert",
          "username": "J-Halpert",
          "city": "Scranton",
          "state": "Pennsylvania", 
          "online": false,
          "position": "Sales Lead",
          "age": 31,
          "image": "https://pbs.twimg.com/profile_images/3171824697/ef75d90df2e65ce326acf30262df5918_400x400.jpeg"
        },
        {
          "name": "Toby Flenderson",
          "username": "T-Flenz",
          "city": "Scranton",
          "state": "Pennsylvania", 
          "online": true,
          "position": "HR",
          "age": 31,
          "image": "https://cdn.vox-cdn.com/thumbor/fryJcy8EmYKYAdHMAbnG-pxAlf4=/0x0:1558x970/1200x800/filters:focal(655x361:903x609)/cdn.vox-cdn.com/uploads/chorus_image/image/64609938/6e13c45928.0.jpeg"
        }
    ]
  }`

  // On Mount
  // initial Render
  useEffect(()=> {
    // Get data from API
    // Parse Data
    // Store data in state
    console.log('Pulling data')
    const data = JSON.parse(json);
    setData(data)
  },[])

  // const getData = async ()=>{
  //   // Request Data
  // }

  return (
    <div className="App">
      <h1>Characters of The Office</h1>
      <div className="people">
        {data.employees?.map((person, i) => <Person person={person} key={i}/>)}
      </div>
    </div>
  );
}

export default App;
