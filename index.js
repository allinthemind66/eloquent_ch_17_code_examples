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

let cx = document.querySelector("canvas").getContext("2d");
  cx.strokeStyle = "blue";
  cx.strokeRect(5, 5, 50, 50);
  cx.lineWidth = 5;
  cx.strokeRect(135, 5, 50, 50);
