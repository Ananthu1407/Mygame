const ongoingTouches =[];
function ongoingTouchIndexById(idToFind) {
  for (let i = 0; i < ongoingTouches.length; i++) {
    const id = ongoingTouches[i].identifier;

    if (id === idToFind) {
      return i;
    }
  }
  return -1; // not found
}
function copyTouch(a) {
  return {identifier :a.identifier,pageX:a.pageX,pageY:a.pageY};
}
class evls {
    constructor (canvas,left,right,atk,player){
        canvas.addEventListener  ("touchstart", (evt) => {
            evt.preventDefault();
            const touches = evt.changedTouches;

            for (let i = 0; i < touches.length; i++) {
                ongoingTouches.splice(i,copyTouch(touches[i]));
            }
        });
        canvas.addEventListener  ("touchmove", (evt) => {
            evt.preventDefault();
            const touches = evt.changedTouches;
            for (let i = 0; i < touches.length; i++) {
                //console.log (touches [i].pageX,touches [i].pageY);
                const idx = ongoingTouchIndexById(touches [i].identifier);
                //console.log (idx);
                if (idx >= 0) {
                    ongoingTouches.splice(idx,1,copyTouch (touches [i])); // swap in the new touch record
                }
            }
        });
        canvas.addEventListener("touchend", (evt) => {
            evt.preventDefault();
            const touches = evt.changedTouches;

            for (let i = 0; i < touches.length; i++) {
                let idx = ongoingTouchIndexById(touches[i].identifier);

                if (idx >= 0) {
                    ongoingTouches.splice(idx, 1); // remove it; we're done
                } 
            }
        });
    
    }
    upt (){
        console.log (ongoingTouches.length);
    //console.log (this.ongoingTouches.length);
        if (ongoingTouches.length == 0) ongoingTouches.push ({pageX:0,pageY:0,identifier:0});
        for (let i = 0;i < ongoingTouches.length;i++){            
            let touch = ongoingTouches[i];
            //canvas.getContext ("2d").fillRect (touch[i].pageX,touch[i].pageY,40,40);
            //console.log (touch [i].pageX,touch [i].pageY);
            if (left.click(canvas,touch)){
                player.currFrame = "run_L";
                player.Animation = true;
                player.shownX --;
                break;
            }else if (right.click (canvas,touch)){
                player.currFrame = "run_R";
                player.Animation= true;
                player.shownX ++;
                break;
            }else {
                player.Animation = false;
            }
        }
    }
}