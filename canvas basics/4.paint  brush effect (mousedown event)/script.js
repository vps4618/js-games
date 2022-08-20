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
});

// draw a circle
function drawCircle(){
    ctx.fillStyle = 'grey';
    ctx.beginPath();
    ctx.arc(mouse.x,mouse.y,50,0,Math.PI * 2); 
    ctx.fill();
};

const mouse = {
    x:undefined,
    y:undefined,
}

canvas.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
});
