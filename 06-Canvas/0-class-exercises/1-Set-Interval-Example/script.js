const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
console.log(canvas.height)
console.log(canvas.width)
function draw(){
    ctx.fillStyle = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    ctx.fillRect((canvas.width/2)-25, (canvas.height/2)-25, 50, 50);
}
/*
    Method setInterval (that exists on our browsers window interface) 
    that tells our browser to run our draw() function 
    every x number of miliseconds
    I chose 500 (.5 second).
*/
window.setInterval(draw, 500);