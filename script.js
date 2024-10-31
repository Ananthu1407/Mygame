//import {hero} from "./hero.js";
"use strict";
const canvas = document.getElementById ("canvas");
canvas.width = 600;
canvas.height = 400;
const ctx = canvas.getContext ("2d");
const player = new hero (heroImg,600,400);
const left = new control (0,300,100,100,"red");
const right = new control (100,300,100,100,"red");
const atk = new control (500,300,100,100,"red");
const sensor = new evls (canvas,left,right,atk,player);
let frames=-1;
let fps;
let deltatime;
let lastTime = 0;
window.onload = () => {
    function animate (time){
        deltatime = time - lastTime;
        lastTime = time;
        fps = Math.round ((1000/deltatime)*100)/100;
        ctx.clearRect (0,0,canvas.width,canvas.height);        
        ctx.drawImage (bg1,0,0);
       /* ctx.fillStyle = "white";
        ctx.fillRect (0,0,canvas.width,canvas.width);
        ctx.fill ();*/
        left.draw (ctx);
        right.draw (ctx);
        atk.draw (ctx);
        player.draw (ctx);
        player.update ();
        sensor.upt ();
        requestAnimationFrame (animate);
        ctx.save ();
        ctx.scale (2,2);
        ctx.fillText (fps,40,40);
        ctx.restore ();
        //ctx.fillText (timer,40,80);
        //ctx.fillText (frames,40,120);
    }
    animate (0);
}