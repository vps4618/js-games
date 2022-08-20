'use strict';
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(ctx);

// fix streching of drawing when resizing
window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    Rectangle();
    
})



// draw a rectangle
function Rectangle(){
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'pink';
    ctx.lineWidth = 5;
    ctx.fillRect(100,100,200,100);;
    ctx.strokeRect(100,100,200,100);
}

Rectangle();