let returnValue = 0

let inputNum = document.querySelector("#input")






const firstBtn = document.querySelector("#btn")
const cResults = document.querySelector("#conversionResults")


function conversionPlease(){

returnValue = (inputNum.value - 32) / 1.8

cResults.innerHTML = Math.floor(returnValue) 


}


firstBtn.addEventListener("click", conversionPlease)


document.querySelector('#input')
