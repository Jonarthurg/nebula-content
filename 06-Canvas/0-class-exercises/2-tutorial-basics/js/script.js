const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// function draw() {
//     ctx.fillStyle = 'rgb(102, 205, 170)';
//     ctx.fillRect(10, 10, 50, 50);

//     ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
//     ctx.fillRect(30, 30, 50, 50);
// }

// function draw() {
//     ctx.fillRect(25, 25, 100, 100);
//     ctx.clearRect(45, 45, 60, 60);
//     ctx.strokeRect(50, 50, 50, 50);
// }

// draw();

// Drawing paths
// function draw() {
//     ctx.beginPath();
//     ctx.moveTo(75, 50);
//     ctx.lineTo(100, 85);
//     ctx.lineTo(100, 35);
//     ctx.fill();
// }

// draw();

// function drawGrid() {
//     for (let i = 0; i < 6; i++) {
//         for (let j = 0; j < 6; j++) {
//             ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0)`;
//             ctx.fillRect(j * 25, i * 25, 25, 25);
//         }
//     }
//     ctx.clearRect();
// }

// drawGrid();


// function draw() {
    //   ctx.setLineDash([4, 2]);
    //   ctx.lineDashOffset = -offset;
    //   ctx.strokeRect(10, 10, 100, 100);
    // }

    
let offset = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Red Square
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.setLineDash([]);
    // Big Rectangle
    ctx.strokeRect(300, 50, 100, 100);

    // Blue Square
    ctx.fillStyle = 'rgba(0, 0, 200, .5)';
    ctx.fillRect(30, 30, 50, 50);

    // Triangle
    ctx.setLineDash([4, 2]);
    ctx.lineDashOffset = -offset;

    ctx.beginPath();
    ctx.moveTo(125, 150);
    ctx.lineTo(250, 150);
    ctx.lineTo(250, 100);
    ctx.closePath();
    ctx.stroke();
}

function march() {
    offset++;
    if (offset > 16) {
      offset = 0;
    }
    console.log("here we are")
    draw();
    setTimeout(march, 20);
}
  
march();