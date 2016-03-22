/**
 * Created by DaisyCream on 16/3/20.
 */
var a = document.getElementById('a');
var b = document.getElementById('b');

function chevckStyle(target, att){

}



var objStyle = a.currentStyle?
    a.currentStyle:
    window.getComputedStyle(a,null);

console.log(objStyle.getPropertyValue('border'));//1px solid rgb(0, 0, 0)

console.log(a.getAttribute('style'));//border: 1px solid #000