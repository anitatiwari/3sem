"use strict";

let array=[]
let count=0

function init() {
  //for the delay of loop
        setTimeout(displayData,400)
}

function loop(){
    const numbers= getNumberOfCustomers();
   
    if(count<40){
        array.unshift(numbers);
        count++;
       
    }
    else{
        array.length=39;
        array.unshift(numbers);
       
    }
    init();
}

function displayData(){
    loop();
    addData();
}

//generating Fake random data

function getNumberOfCustomers() {
    return Math.floor(Math.random() * 32);
    }
//adding bars (display)
    function addData(){
        const bar=document.querySelector('#scrolling_bars');
        bar.innerHTML+=`<div class="bar" style="height:${(array[0]/32)*100}%;"></div>`;
        
        }
init();



