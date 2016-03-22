/**
 * Created by DaisyCream on 16/3/20.
 */

var drager = document.getElementById("drager");
var POSITION = {};

console.log(drager);

function  mouseDrag(target){
    var isDrag = 0;
    var pos = {};
    var mouse = {};
    //target.style.webkitTransition = 'top 0.2s, left 0.2s';
    target.onmousedown = function(e){
        //console.log("onmousedown");
        e = e || window.event;
        mouse.x = e.clientX-parseInt(target.style.left);
        mouse.y = e.clientY-parseInt(target.style.top);
        //console.log(mouse.x,mouse.y);
        //console.log(e.clientX,e.clientY);
        //console.log(target.style.left,target.style.top);
        isDrag = 1;
    };
    target.onmouseup = function(e){
        //console.log("onmouseup");
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
            //console.log(mouse.x,mouse.y,e.clientX, e.clientY);
            target.style.left = e.clientX - mouse.x  + 'px';
            target.style.top = e.clientY - mouse.y + 'px';
            pos.x = target.style.left;
            pos.y = target.style.top;
            //console.log(e.clientX, e.clientY);
        }
    };
}



POSITION.setPosition = function(x,y,target){
    target.style.left = x;
    target.style.top = y;
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