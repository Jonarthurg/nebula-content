import React, { useState } from 'react';

function FavColorInput(props) {
    const [color, setColor] = useState("")
    // const [data, setData] = useState("")
  
    const handleColorChange = (event)=> {
        setColor(event.target.value);
      }

    return (
        <div>
            <p>My favorite color is {color}</p>
            <form>
            <label>Enter your favorite color:
                <input
                type="text" 
                value={color}
                onChange={handleColorChange}
                />
            </label>
            </form>
        </div>
      )
}

export default FavColorInput









// const getData = ()=>{
//     // const response = await fetch("https://api.publicapis.org/entries")
//     // const results = await response.json()
//     // console.log(results.entries)

//     fetch('https://api.publicapis.org/entries')
//     .then(response => response.json())
//     .then(data => setData(data.entries));
//   }

//   useEffect(() => {
//     getData()
//   }, [])

//   console.log(data)