'use strict';
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ParticlesArray = [];
// console.log(ctx);

// fix streching of drawing when resizing
window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});



const mouse = {
    x:undefined,
    y:undefined,
}

canvas.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    // drawCircle();
});

// class creating new particles objects
class Particle{
    constructor(){
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x = Math.random() * canvas.width;  // will create random number between 0 and canvas width
        this.y = Math.random() * canvas.height;  // will create random number between 0 and canvas height
        this.size  = Math.random() * 5 + 1; // will give a number between 1 and 6
        this.speedX = Math.random() * 3 - 1.5; //will give a number between -1.5 and 1.5 
        this.speedY = Math.random() * 3 - 1.5; //will give a number between -1.5 and 1.5 
    }

    update(){
        this.x += this.speedX/10;
        this.y += this.speedY/10;
    }

    draw(){
        ctx.fillStyle = 'grey';
        ctx.beginPath();
        ctx.arc(this.x,this.y,10,0,Math.PI * 2); 
        ctx.fill();
    }
}

//create new particles
function init(){
    for(let i = 0; i < 100; i++){
        ParticlesArray.push(new Particle());
    }
} 

init();

// console.log(ParticlesArray);

// handle particles in array by updating and drawing
function handleParticles(){
    for(let i = 0; i  < ParticlesArray.length; i++){
        ParticlesArray[i].update();
        ParticlesArray[i].draw();
    }
}

// animating particles
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    handleParticles();
    requestAnimationFrame(animate);

}
animate();