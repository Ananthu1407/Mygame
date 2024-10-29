"use strict";
class hero {
    constructor (img, gameWidth, gameHeight){
         this.img = img;
         this.nf;
         this.w = 64;
         this.h = 64;
         this.shownX = 0;
         this.shownY = gameHeight - this.h;
         this.x;
         this.y;
         this.spriteWidth =  64;
         this.frameY;
         this.gf = 0;
         this.sg = 5;
         this.hitBox_s;
         this.hitBox_w;
         //this.position = Math.floor (this.gf/this.sg) % 6;
         this.frameX = 0;
         this.Animation = false;
         this.currFrame = "run_R";
         this.frames =[{
            "name": "run_L",
            "width" : 64,
            "Y"      : 64 * 9,
            "Nf" : 8,
            "wide" : false
            },
            {
            "name": "run_R",
             "width" : 64,
             "Y"      : 64*11,
             "Nf" : 8,
             "wide" : false
            },
            {
            "name": "attack_L",
            "width" : 192,
            "Y"      : (64*46) + 192,
            "Nf" : 6,
            "wide" : true
            },
            {
            "name": "attack_R",
            "width" : 192,
            "Y"      : (64*46) + (192 * 3),
            "Nf" : 6,
            "wide" : true
            }];
    }
    draw (ctx){
        this.frames.forEach ((state) => {
            if (state.name == this.currFrame){
                this.frameY = state.Y;
                this.nf = state.Nf;
                this.spriteWidth = state.width;
                if (state.wide){
                    this.x = this.shownX - 64;
                    this.y = this.shownY - 64;
                }else {
                    this.x = this.shownX;
                    this.y = this.shownY;
                }
            }
        });
        this.hitBox_s = {
            x:this.shownX,
            y:this.shownY,
            w:64,
            h:64
        }
        this.hitBox_w = {
            x:this.x,
            y:this.y,
            w:this.spriteWidth,
            h:this.spriteWidth
        }
        ctx.drawImage (
        this.img,
        this.frameX * this.spriteWidth,
        this.frameY,
        this.spriteWidth,
        this.spriteWidth,
        this.x,
        this.y,
        this.spriteWidth,
        this.spriteWidth);
        ctx.strokeRect (this.hitBox_s.x,this.hitBox_s.y,this.hitBox_s.w,this.hitBox_s.h);
        ctx.strokeRect (this.hitBox_w.x,this.hitBox_w.y,this.hitBox_w.w,this.hitBox_w.h);
       //console.log (this.frameX);
    }
    update (){
        if (this.Animation){
            this.gf++;
            this.frameX = Math.floor (this.gf/this.sg) % this.nf;
            /*if (this.currFrame == "run_R"){
                this.shownX ++;
            }else if (this.currFrame == "run_L"){
                this.shownX --;
            }else */if (this.currFrame == "attack_R" || this.currFrame == "attack_L"){
                if (this.frameX == 5){
                    if (this.currFrame == "attack_R") this.currFrame = "run_R";
                    if (this.currFrame == "attack_L") this.currFrame = "run_L";
                    this.Animation = false;
                }
            }
        }else {
            this.gf = 0;
            this.frameX = 0;
        }
    }
}