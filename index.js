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

//############################LINES AND SURFACES

// let cx = document.querySelector("canvas").getContext("2d");
//   cx.strokeStyle = "blue";
//   cx.strokeRect(5, 5, 50, 50);
//   cx.lineWidth = 5;
//   cx.strokeRect(135, 5, 50, 50);

//######################PATHS
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

// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// cx.moveTo(50, 10);
// cx.lineTo(10, 70);
// cx.lineTo(90, 70);
// // cx.lineTo(50, 10);
// //closePath finishes the path for you
// // cx.closePath();
// // cx.stroke();
// cx.fill();

//###################CURVES
//QUADRATIC CURVE
// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// cx.moveTo(10, 90);
// //control=(60, 10) goal=(90, 90)
// //control point is the middle of the curve
// cx.quadraticCurveTo(60, 10, 90, 90);
// cx.lineTo(60, 10);
// cx.closePath();
// cx.stroke();

// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// cx.moveTo(10, 90);
// //control=(10, 10) control2=(90, 10) goal=(50, 90)
// cx.bezierCurveTo(10,10,90,10,50,90);
// cx.lineTo(90, 10);
// cx.lineTo(10, 10);
// cx.closePath();
// cx.stroke();

// let cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// //pair of coordinates for arcs center, a radius and then a start and end angle
// //center=(50, 50) radius=40 angle=0 to 7
// cx.arc(50, 50, 40, 0, 7 );
// // center=(150, 50) radius=40 angle=0 to ½π
// //THERE IS A LINE CONNECTING THESE TWO ARCS BECAUSE THEY ARE STILL THE SAME PATH
// cx.arc(150, 50, 40, 0, 0.5 * Math.PI);
// cx.stroke();

//###############PIE CHART

// const results = [
//   {name: "Satisfied", count: 1043, color: "lightblue"},
//   {name: "Neutral", count: 563, color: "lightgreen"},
//   {name: "Unsatisfied", count: 510, color: "pink"},
//   {name: "No comment", count: 175, color: "silver"}
// ];
//
// let cx = document.querySelector("canvas").getContext("2d");
// let total = results.reduce((sum, {count}) => sum + count, 0)
// //Start at the top
// //angle starts at -1/2 where it would normally start
// let currentAngle = -0.5 * Math.PI;
// console.log(currentAngle)
// for(let result of results) {                //this is 2π
//   let sliceAngle = (result.count/ total) * (2 * Math.PI);
//   console.log(sliceAngle)
//   cx.beginPath();
//   //center=100,100, radius=100
//   //from current angle, clockwise by slice's angle
//   cx.arc(100,100,100, currentAngle, currentAngle + sliceAngle);
//   currentAngle += sliceAngle;
//   cx.lineTo(100, 100);
//   cx.fillStyle = result.color;
//   cx.fill();
// }

//#######################  TEXT
// let cx = document.querySelector("canvas").getContext("2d");
// cx.font = '28px Georgia';
// cx.fillStyle = 'fuchsia';
// //last two arguments are fillText and strokeText
// cx.fillText("I can draw text too!", 10, 50)

//####################### IMAGES

let cx = document.querySelector("canvas").getContext("2d");
let img = document.createElement("img");
img.src = "img/player_big.png";
let spriteW = 48, spriteH = 100;
img.addEventListener("load", () => {
  let cycle = 0;
  setInterval(()=> {
    cx.clearRect(0,0,spriteW, spriteH);
    cx.drawImage(img, //source rectangle
    cycle * spriteW, 0, spriteW, spriteH,
    //destination rectangle
                  0, 0, spriteW, spriteH);
                  cycle = (cycle+1) % 8;
  }, 120)
})
