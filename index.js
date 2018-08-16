// ############### SVG CODE ###################
// let circle = document.querySelector("circle");
// circle.setAttribute('fill', 'cyan');

//context is an object whose methods provide the drawing interface
//two widely supported drawing styles:
//"2d" for two dimensional and "webgl" for 3d graphics


//################# CANVAS CODE #######################
// let canvas = document.querySelector('canvas');
// let context = canvas.getContext("2d");
// context.fillStyle = "red";
// //top left coordinates(x,y) followed by 100 px wide and 50 px high
// context.fillRect(10, 10, 100, 50);

//LINES AND SURFACES

// let cx = document.querySelector("canvas").getContext("2d");
//   cx.strokeStyle = "blue";
//   cx.strokeRect(5, 5, 50, 50);
//   cx.lineWidth = 5;
//   cx.strokeRect(135, 5, 50, 50);

//PATHS
//path is a sequence of lines

// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// for(let y = 10; y < 100; y+=10){
//   //move to moves the line to where it will start
//   //line to says were to end the line that was just created
//   cx.moveTo(10, y);
//   cx.lineTo(90, y);
// }
// cx.stroke();

let cx = document.querySelector("canvas").getContext("2d");
cx.beginPath();
cx.moveTo(50, 10);
cx.lineTo(10, 70);
cx.lineTo(90, 70);
// cx.lineTo(50, 10);
//closePath finishes the path for you
// cx.closePath();
// cx.stroke();
cx.fill();
