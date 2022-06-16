console.log('connected')

// Store all DOM elements you will need in their own JS variables

// Grab the value from the user input and store it in a variable

// Using online temp. conversion formulas, create the functions to convert the Celsius input to F and K

let input = document.querySelector('#celsiusNum')
let btn = document.getElementById('convert')
let newFTemp = document.querySelector('#frnhtResult')
let newKTemp = document.querySelector('#kelvResult')
// let result = document.createElement('h2')
let boxes = document.getElementsByClassName('box')
console.log(boxes)



console.log(input.value)

function toFahrenheit(){
    
    result.innerText = (input.value *1.8) + 32; 
    newFTemp.appendChild(result)
}

fBtn.addEventListener('click', toFahrenheit);

function toKelvin(){
    let result = document.createElement('h2')
    result.innerText = (input.value + 273.15); 
    newKTemp.appendChild(result)
}

kBtn.addEventListener('click', toKelvin);