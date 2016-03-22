/**
 * Created by DaisyCream on 16/3/22.
 */
require.config({
    baseUrl: './',
    paths: {
        "index" : "index"
    }
});

var drager = document.getElementById("drager");

require(["index"], function(){
    mouseDrag(drager);
});