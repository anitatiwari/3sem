"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

    // TODO: Add event-listeners to filter and sort buttons
 
registeredbtn();
  loadJSON();
}

// const btn = document.querySelectorAll(".filter");

// btn.forEach(function (btn2) {
//   btn2.addEventListener("click", filterList);
// });
function registeredbtn(){
    document.querySelectorAll("[data-action='filter']").forEach(button=>button.addEventListener("click",selectFilter));
   
   
    document.querySelectorAll("[data-action='sort']").forEach(button=>button.addEventListener("click",selectsort));


}

function selectFilter(event){
    const filter=event.target.dataset.filter;
    console.log(`user selected ${filter}`)
    filterList(filter);
}



async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}
function filterList(animalType) {
  let filteredList = allAnimals;
  if (animalType === "cat") {
    filteredList = allAnimals.filter(iscat);
  } else if (animalType === "dog"){
    filteredList = allAnimals.filter(isdog);

  }

   console.log(filteredList);
  displayList(filteredList);
}

const iscat = function (animal) {
  if (animal.type === "cat") {
    return true;
  }
}
  const isdog = function (animal) {
    if (animal.type === "dog") {
      return true;
    }
  
//   let allAnimaldog = allAnimals.filter(isdog);
//   displayList(allAnimaldog);
// };
}

function selectsort(event){
    const sortBy=event.target.dataset.sort;
    console.log(`user selected ${sortBy}`)
    sortList(sortBy);
}

function sortList(sortBy){
   
    let sortedlist=allAnimals
    
         sortedlist= sortedlist.sort(sortByproperty);
       


    function sortByproperty(animalA,animalB)
    {
        if(animalA[sortBy]<animalB[sortBy]){
            return -1;
        }
        else{
            return 1
        }
    }
    displayList(sortedlist)
}

// function sortBytype(animalA,animalB)
// {
//     if(animalA.type<animalB.type){
//         return -1;
//     }
//     else{
//         return 1
//     }
// }


function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
