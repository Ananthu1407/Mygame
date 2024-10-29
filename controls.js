class control {
    constructor (x,y,w,h,c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.isClicking = false;
        this.touch =[];
    }
    draw(ctx){
       ctx.strokeStyle = this.c;
       ctx.strokeRect (this.x,this.y,this.w,this.h);
       ctx.stroke ();
    }
    click  (canvas,e){
        if (e.changedTouches.length > 1) return false;
        this.rect = canvas.getBoundingClientRect();
        this.nh  = this.rect.height; // nw : nh = 6:4 nw = nh * 6/4
        this.nw = this.nh * (canvas.width/canvas.height);
        this.gap = (this.rect.width - this.nw)/2;
        //let i = 0;
        for (let i = 0; i < e.changedTouches.length;i++){
            this.ex = (e.changedTouches [i].pageX - this.gap) * (canvas.width/ this.nw);
            this.ey = e.changedTouches [i].pageY * (canvas.height/this.nh);
            //this.ex > this.x && this.ex < this.x + this.w && this.ey > this.y && this.ey < this.y + this.h
            //console.log (e);
        }
        
    }
}