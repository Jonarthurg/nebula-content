// COUNTER EXERCISE

// Select the body element from index.html
//const body = document.querySelector('body')
const body = document.body;
console.log(body)

// Set an attribute of 'style' to the body tag and add a background color of anything other than white

body.setAttribute('style', 'background-color: pink')


/* -------------------------------------------------------------------------- */

// Create an h1 element

 let h1Element = document.createElement('h1')


// Append a new h1 element to the body element as a child

body.appendChild(h1Element)

// Add text to the h1 element 

document.querySelector('h1').innerText = "Hello"



// Assign the background color of this element to something unique

h1Element.style.backgroundColor = 'orange'


// Set a new style attribute to the h1 element

h1Element.setAttribute('style', 'color: red' )

// Add font size to the h1Element

// h1Element.style.fontSize = '150px'

// h1Element.setAttribute('style', 'font-size: 200px', 'style','color: blue')

// Set the default text to the number zero
h1Element.innerHTML = '0'













// /* -------------------------------------------------------------------------- */

// // Create a button element to increment the h1 text
const newbtn = document.createElement('button')
body.appendChild(newbtn)

// let btn = document.createElement('button')
// // Append the button element to the body element
// document.body.appendChild(btn)

body.appendChild(newbtn)

// // Add text to the boxButton

newbtn.innerText = "Increment"
// btn.innerText = 'Increase'
// // Add a class attribute to boxButton
// btn.setAttribute('class', 'count-up')


newbtn.setAttribute("class", "boxButton")
// /* -------------------------------------------------------------------------- */

// // Create another button element to decrement the h1 text
// let btn2 = document.createElement('button')

const secondButton = document.createElement('button')
// // Add the button element to the body element
// document.body.appendChild(btn2)

body.appendChild(secondButton)

// // Add text to the button element
// btn2.innerText = 'Decrease'

secondButton.innerText = "Decrement"
// // Add a class attribute to the button element
// btn2.setAttribute('class', 'count-down')

// secondButton.setAttribute("class","boxButton")

secondButton.setAttribute("style","background-color: cyan; color: white")
// /* -------------------------------------------------------------------------- */
// // ADD BUTTON FUNTION
// // Create functionality that, when you click this button it increases the h1 value




secondButton.addEventListener("click", function decrement(){


counter = counter - 1
h1Element.innerText = counter



})


let counter = 0


newbtn.addEventListener("click", function increment(){


    counter  = counter + 1;
    
    h1Element.innerText = counter
    
    })

// let clicks = 0
// // btn.setAttribute('onclick', 'increaseCount()')

// function increaseCount() {
//         clicks += 1
//         h1Element.innerText = clicks;
// }
// btn.addEventListener('click', increaseCount)
// // Create functionality that, when you click this button it decreases the h1 value
// // btn2.setAttribute('onclick', 'decreaseCount()')

// function decreaseCount() {
//     clicks -= 1
//     h1Element.innerText = clicks;
// }

// btn2.addEventListener('click', decreaseCount)

// /* -------------------------------------------------------------------------- */
// // DELETE BUTTON FUNCTION 
// btn2.removeEventListener('click', decreaseCount)