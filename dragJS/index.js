/**
 * Created by DaisyCream on 16/3/20.
 */


var POSITION = {};

function  mouseDrag(target){
    var isDrag = 0;
    var pos = {};
    var mouse = {};
    target.onmousedown = function(e){
        e = e || window.event;
        mouse.x = e.clientX-parseInt(target.style.left);
        mouse.y = e.clientY-parseInt(target.style.top);
        isDrag = 1;
    };
    target.onmouseup = function(e){
        if(isDrag==1){
            POSITION.setPosition(pos.x,pos.y,target);
            isDrag = 0;
        }
        else return;
    };
    window.onmousemove = function(e){
        if(isDrag == 1) {
            target.style.left = e.clientX - mouse.x  + 'px';
            target.style.top = e.clientY - mouse.y + 'px';
            pos.x = target.style.left;
            pos.y = target.style.top;
        }
    };
}



POSITION.setPosition = function(x,y,target){
    target.style.left = x;
    target.style.top = y;
};

define(function(){
        return mouseDrag;
    }
);
