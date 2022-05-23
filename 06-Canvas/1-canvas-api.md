![Nebula Academy](https://nebulaacademy.com/static/media/NebulaAcademyLogoNextToTitle.7d951a1b.png)

# Canvas
- Canvas can be used for rendering graphs, game graphics, art, or other visual images on the fly
- Updating the HTML DOM is very intensive and will make our computers lag if we're doing it too much
- In the game project we intend to update the DOM a lot - therefore we'd like to utlize HTML Canvas

## What is it?
- The CANVAS element is embedded right in the HTML
- The scripts that draw on it are either in the HTML or in a linked external file
- It doesn't re-render the DOM, it just re-draws itself, which is much less intensive
- It allows you to programmatically update the pixel data contained in an HTML `<canvas>` element to create 2D and 3D scenes

## What is the Syntax?
- `<canvas id="canvas"></canvas>`
- We would then write JavaScript to create elements on that canvas
- We then can write more JavaScript to modify and move those elements
For example:
```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
```

This will create a canvas (of default width & height - 300 pixels wide and 150 pixels high). It then will draw a green rectangle on it.

# Lets practice!
- Create an html document that has a canvas
- Create a JavaScript document that has access to that canvas
- Draw a square (not rectangle) that is a different color than green

## What is an API?
- We will dive into this much deeper a little later in the curriculum but for now, from MDN: 
- Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place.
- As a real-world example, think about the electricity supply in your house, apartment, or other dwellings. If you want to use an appliance in your house, you plug it into a plug socket and it works. You don't try to wire it directly into the power supply — to do so would be really inefficient and, if you are not an electrician, difficult and dangerous to attempt.
- Canvas is a browser API - it allows us to create complex visual updates without having to create an acual element that avoids updating the DOM
- Why is this important?
    -   Because we need to utlize the Canvas API!

## Canvas API
- Before we can start drawing stuff on the Canvas we need to understand where the items will be drawn
- The origin of this grid is positioned in the top left corner at coordinate (0,0). All elements are placed relative to this origin. So the position of the top of an item becomes x pixels from the left and y pixels from the top, at coordinate (x,y).
- Canvas technically only supports drawing rectangles and lines 
- However, there are many path drawing functions which make it possible to compose very complex shapes
Generally speaking your code could look like this:
```js
// Draw a filled rectangle
fillRect(x, y, width, height)
// or
// Draws a rectangular outline
strokeRect(x, y, width, height)
// Delete the rectangle so that we can re-draw it based on where you want this rectangle to move
clearRect(x, y, width, height)
```

## An example of a triangle:
```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```

## An example of a smiley-face
```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
     var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
  }
}
```

## Activity:
- Write a comment describing what each line of code is achieving in the past two examples.
- What are all the parameters of an arc?

## Set Interval:
- A standard interaction is to utilize re-rendering via `setInterval(fn, ms)`
- Set Interval will run a function ever x number of ms
- It can be helpful to think of this as a whiteboard - you need to erase it to re-draw, in theory if you're really good with your 'eraser' you only need to erase a portion of the canvas, but this can be incredibly tricky

A simple example:
```js
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
```

In this example we are:
- Clearing the canvas
- Drawing a rectangle
- Updating it's x & y coordinates (with a little logic to handle the edges)
- And repeating every 30 milliseconds
```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let dx = 2;
let dy = -2;
let x = 25;
let y = 25;

ctx.fillStyle = 'green';

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, 50, 50);

    
    if(x + dx > canvas.width-50 || x + dx < 0) {
        dx = -dx;
    }
    if(y + dy > canvas.height-50 || y + dy < 0) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 30);
```
- W3 schools [has some cool examples](https://www.w3schools.com/jsref/met_win_setinterval.asp)
- Some games are turn-based and therefore there will be no set-interval.. the function will instead call on click, similar to tic-tac-toe or the calculator game


# Tutorial Time!
- In 10 steps create a [simple brick breaker](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)

# Resources:
- W3 has a [great game example](https://www.w3schools.com/graphics/tryit.asp?filename=trygame_default_gravity)
