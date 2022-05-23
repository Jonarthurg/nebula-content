// Here I am getting a reference to the HTML <canvas> element.
const canvas = document.getElementById('canvas');

// From the above reference, I now get the elements context - this is what we'll be drawing on.
const ctx = canvas.getContext('2d');

/* I'm using built-in methods and properties here to style my canvas as a rectangle and fill it with the color
 green */
ctx.fillStyle = 'green';

/* the fillRect() method creates a rectangle starting from an x - y coordinate (10, 10) and then sizing it 150 units wide
 and 100 tall. */
ctx.fillRect(10, 10, 150, 100);