//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction 
// console.log('js is connected')

const holdH1 = document.querySelector('h1');
// console.log(holdH1.innerText)

const holdIdElement = document.querySelector("#some-id");
// console.log(holdIdElement.innerHTML)

const holdID = document.getElementById('some-id')
// console.log(holdID.innerHTML)
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_textcontent_innerhtml_innertext

const headings = document.querySelectorAll('h1') // returns all elements matching this query
// console.log(headings);

let divs = document.querySelectorAll('.box')
console.log(divs)

const divColor = document.querySelector('div'); // stores the FIRST element that matches this query
divColor.style.backgroundColor = "pink";

const documentBody = document.querySelector('body');
documentBody.setAttribute('style', 'background-color: lightgray');

let text = document.getElementById('box1').textContent;
document.getElementById('box3').innerHTML = 'happy saturday!';

// function that runs for our button 'onclick' event
function addDiv() {
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    newDiv.innerHTML = 'hi there';
}

// removing an attribute from an HTML element
// target element in DOM using bracket notation
const bodyNodes = document.body.getElementsByTagName('*');
console.log(bodyNodes)

const box2 = bodyNodes[5]

// box2.removeAttribute('class');

// remove class using classList
// box2.classList.remove('box');

// get the attribute of an element
const heading2 = document.querySelector('.some-class')

console.log(heading2.getAttribute('id'));


console.log(box2)
// const holdId = document.getElementById('some-id')
// console.log(holdIdElement)
// console.log(holdId)

// const holdIdElement1 = document.querySelector(".some-class");
// console.log(holdIdElement1)
// const holdId = document.getElementsByClassName('some-class')
// console.log(holdId)

// const holdAllDivs = document.querySelectorAll('div');
// console.log(holdAllDivs)

// const div1 = document.getElementsByName('div-1')
// console.log(div1)


// target the elements to be changed & store them in a variable
// const holdDiv = document.querySelector("div");
// modify that element's propery via the variable
// holdDiv.style.backgroundColor = "blue";

// OR do it without a variable
// document.querySelector("div").style.backgroundColor = "red";

// holdDiv.setAttribute('style', 'background-color:pink');

//ADding text into element
// document.body.innerText = `Welcome Everyone!`;


// setTimeout(() => {
//     div.classList.add('makePink')
//     div.innerText = "Hey I'm Pink now!!"
// }, 3000);


// const divs = document.querySelectorAll('div')
// const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
// // divs.forEach(div => {
// //     const randomNum = Math.floor(Math.random() * 6)
// //     div.style.backgroundColor = colors[randomNum]
// // })

// const div = document.querySelector('div')
// const names = ['eric', 'daniel', 'kelly', 'jordan']

// names.forEach(name =>{
//     let p = document.createElement("p");
//     p.innerText = name
//     div.appendChild(p);
// })


// setInterval(function(){ 
//     const randomNum = Math.floor(Math.random() * 6)
//     div.style.backgroundColor = colors[randomNum]
// }, 2000);



const apple = {
    name:'bob',
    color: 'green'
}