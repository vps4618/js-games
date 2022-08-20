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
    Circle();
    
})



// draw a circle
function Circle(){
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(100,100,50,0,Math.PI * 2);
    ctx.stroke(); 
    ctx.fill();
    ctx.closePath();
}


Circle();