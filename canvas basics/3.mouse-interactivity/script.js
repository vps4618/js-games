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
    
    
})



// draw a circle
function Circle(x,y){
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(x,y,100,50,0,Math.PI * 2);
    ctx.stroke(); 
    ctx.fill();
    ctx.closePath();
}

const mouse = {
    x:null,
    y:null
}
canvas.addEventListener('click',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    Circle(mouse.x,mouse.y);
})