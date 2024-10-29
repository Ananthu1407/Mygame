class evls {
    constructor (canvas,left,right,atk,player){
        this.e;
        canvas.addEventListener ("touchstart", (e) => {
            this.e = e;
            if (left.click (canvas,e)) left.isClicking = true;
            if (right.click (canvas,e)) right.isClicking = true;
            if (atk.click (canvas,e)) atk.isClicking = true;
             
        });
        canvas.addEventListener ("touchmove", (e) => {
            if (left.click (canvas,e)) {
                left.isClicking = true;
                right.isClicking = false;
            }
            if (right.click (canvas,e)){
                right.isClicking = true;
                left.isClicking = false;
            }
            if ( !(left.click (canvas,e) || right.click (canvas,e))){
                left.isClicking = false;
                right.isClicking = false;
            }
        });
        canvas.addEventListener ("touchend", (e) => {
            if ( (left.click (canvas,e) || right.click (canvas,e))){
                left.isClicking = false;
                right.isClicking = false;
            }
        });
        canvas.addEventListener(
  "touchmove",
  (e) => {
    // Iterate through the list of touch points that changed
    // since the last event and print each touch point's identifier.
    for (let i = 0; i < e.changedTouches.length; i++) {
      console.log(
        `changedTouches[${i}].identifier = ${e.changedTouches[i].identifier}`,
      );
    }
  },
  false,
);

    }
    upt (){
        if (left.isClicking){
            player.currFrame = "run_L"
            player.shownX --;
        }else if (right.isClicking){
            player.currFrame = "run_R"
            player.shownX ++;
        }
    }
}