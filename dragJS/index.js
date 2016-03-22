/**
 * Created by DaisyCream on 16/3/20.
 */

var drager = document.getElementById("drager");
var POSITION = {};

console.log(drager);

function  mouseDrag(target){
    var isDrag = 0;
    var pos = {};
    //target.style.webkitTransition = 'top 0.2s, left 0.2s';
    target.onmousedown = function(e){
        console.log("onmousedown");
        e = e || window.event;
        isDrag = 1;
    };
    target.onmouseup = function(e){
        console.log("onmouseup");
        if(isDrag==1){
            POSITION.setPosition(pos.x,pos.y,target);
            isDrag = 0;
        }
        else return;
    };
    window.onmousemove = function(e){
        //console.log(e.clientX, e.clientY);
        if(isDrag == 1) {
            //console.log("onmousemove");
            target.style.left = e.clientX + 'px';
            target.style.top = e.clientY + 'px';
            pos.x = e.clientX;
            pos.y = e.clientY;
            //console.log(e.clientX, e.clientY);
        }
    };
}



POSITION.setPosition = function(x,y,target){
    target.style.left = x + 'px';
    target.style.top = y + 'px';
};

mouseDrag(drager);


//GETPOSITION.targetPosition = function(target){
//    return {
//        x : target.style.left + "px",
//        y : target.style.top + "px"
//
//    };
//};
//
//GETPOSITION.setTargetPosition = function(x,y,target){
//    target.style.left = x + 'px';
//    target.style.top = y + 'px';
//};