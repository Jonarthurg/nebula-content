// 1. Connect this file to the HTML document
console.log('yo')

const heading = document.querySelector('h1').innerHTML;
console.log(heading)

const header = document.querySelector('h1');
// header.style.cssText = "color: red; background-color: yellow; text-align: center;"
header.style.color = 'green'
// header.textContent = 'tired';



const time = new Date()

document.querySelector('#two').innerHTML = (time.getHours() + ':' + time.getMinutes());


