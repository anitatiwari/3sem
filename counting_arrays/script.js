"use strict";

let array=[];
let i=0
init();

let count= array.push('i')



function init(){
    if(i<22){

    setTimeout(loop,1000)
    loop()
}}
function loop(){
    console.log("array",i)
    
    if(i<9){
        array.unshift(i)
        i++
        console.log(array)
       
    }
    else{
        array.unshift(i);
        array.length=9
        i++;
        console.log(array)
    }
init();
}

