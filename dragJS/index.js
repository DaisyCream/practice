/**
 * Created by DaisyCream on 16/3/20.
 */

var draper = document.getElementById("draper");
var GETPOSITION = {};

console.log(draper);
draper.onmousedown = function(e){
    e = e || window.event;
    var pos = {};
    pos.cur = GETPOSITION.targetPosition(this);
    if(this.onmousemove){
        this.onmousemove = function(){
            var nowx =
        }
    }
};



GETPOSITION.targetPosition = function(target){
    return {
        x : target.style.left + "px",
        y : target.style.top + "px"

    };
};

GETPOSITION.setTargetPosition = function(x,y,target){
    target.style.left = x + 'px';
    target.style.top = y + 'px';
};