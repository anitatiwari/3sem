"use strict";
const max=50;
let i=0;
init();
function init(){
    loop()
}
function loop(){
    console.log("i",i)
    i++;
    if(i<max){
        setTimeout(loop,1000)
    }
}