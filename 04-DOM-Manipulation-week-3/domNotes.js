

const holdH1 = document.querySelector('h1');
console.log(holdH1.innerText)


const holdH1Two = document.querySelector('#someID');
console.log(holdH1Two.innerHTML)


const allHeadings = document.querySelectorAll('h1');

console.log(allHeadings)


const holdID = document.getElementById('someID')

console.log(holdID)


const holdDiv  = document.getElementById('jesus')

holdDiv.style.backgroundColor = "cyan";

const holdRandom  = document.getElementsByClassName('random')

//  holdRandom.style.backgroundColor = "pink"; 


 const documentBody = document.querySelector('body')

 console.log(documentBody)

 documentBody.setAttribute('style', 'background-color: gray')

 const secondDiv = document.getElementById('secondDiv')

secondDiv.style.backgroundColor = "lightpink";
  
   


function addApostle(){

let newDivApostle = document.createElement('div')
document.body.appendChild(newDivApostle) 

newDivApostle.innerText = "little John"

}

