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
let ti;
let fp;
window.onload = () => {
    function animate (t,f){
        ti = t;
        fp = f;
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
    }
    animate ();
}