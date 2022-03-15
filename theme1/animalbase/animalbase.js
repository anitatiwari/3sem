"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
  star: false,
  winner: false,
};
const setting = {
  filterBy: "all",
  sortBy: "name",
  sortDir: "asc",
};

// let filterBy="all"

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
function registeredbtn() {
  document
    .querySelectorAll("[data-action='filter']")
    .forEach((button) => button.addEventListener("click", selectFilter));

  document
    .querySelectorAll("[data-action='sort']")
    .forEach((button) => button.addEventListener("click", selectsort));
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first--
  //fixed function
  buildList();
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

function selectFilter(event) {
  const filter = event.target.dataset.filter;
  console.log(`user selected ${filter}`);
  // filterList(filter);
  setfilter(filter);
}
function setfilter(filter) {
  setting.filterBy = filter;
  buildList();
}

function filterList(filteredList) {
  //   let filteredList = allAnimals;
  if (setting.filterBy === "cat") {
    filteredList = allAnimals.filter(iscat);
  } else if (setting.filterBy === "dog") {
    filteredList = allAnimals.filter(isdog);
  }

  console.log(filteredList);
  return filteredList;
}

const iscat = function (animal) {
  if (animal.type === "cat") {
    return true;
  }
};
const isdog = function (animal) {
  if (animal.type === "dog") {
    return true;
  }

  //   let allAnimaldog = allAnimals.filter(isdog);
  //   displayList(allAnimaldog);
  // };
};

function selectsort(event) {
  const sortBy = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection;
  //find old sortby element
  const oldElement = document.querySelector(`[data-sort='${setting.sortBy}']`);
  oldElement.classList.remove("sortby");

  //indicate active sort
  event.target.classList.add("sortby");
  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }
  console.log(`user selected ${sortBy}`);
  setSort(sortBy, sortDir);
}

function setSort(sortBy, sortDir) {
  setting.sortBy = sortBy;
  setting.sortDir = sortDir;
  buildList();
}

function sortList(sortedlist) {
  // let sortedlist=allAnimals
  let direction = 1;
  if (setting.sortDir === "desc") {
    direction = -1;
  } else {
    direction = 1;
  }
  sortedlist = sortedlist.sort(sortByproperty);

  function sortByproperty(animalA, animalB) {
    if (animalA[setting.sortBy] < animalB[setting.sortBy]) {
      return -1 * direction;
    } else {
      return 1 * direction;
    }
  }
  return sortedlist;
}
function buildList() {
  const currentList = filterList(allAnimals);
  const sortedList = sortList(currentList);
  displayList(sortedList);
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

  if (animal.star == true) {
    clone.querySelector("[data-field=star]").textContent = "🌟";
  } else {
    clone.querySelector("[data-field=star]").textContent = "☆";
  }
  clone.querySelector("[data-field=star]").addEventListener("click", clickStar);
  function clickStar() {
    if (animal.star == true) {
      animal.star = false;
    } else {
      animal.star = true;
    }
    buildList();
  }

    clone.querySelector("[data-field=winner]").dataset.winner = animal.winner;
    clone.querySelector("[data-field=winner]").addEventListener("click", clickWinner);
    function clickWinner() {
      if (animal.winner == true) {
        animal.winner = false;
      } else {
          trymakeWinner(animal);
     
      }
      buildList();
    }
 
  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}


function trymakeWinner(selectedanimal){
const winner=allAnimals.filter(animal=>animal.winner)
const numberOfWinner=winner.length;
const other=winner.filter(animal=>animal.type===selectedanimal.type).shift();
if(other !==undefined){
    removeOther(other);
}else if(numberOfWinner>=2){
    removeAorB(winner[0],winner[1])
}
else{
    makeWinner(selectedanimal);
}


function removeOther(other){
//ask the user to ignore or remove other

document.querySelector("#removeother").classList.remove("hide")
document.querySelector("#removeother .closebutton").addEventListener("click",closeDialog)
document.querySelector("#removeother #remove_other").addEventListener("click",removebtn)

function closeDialog(){
    document.querySelector("#removeother").classList.add("hide")
    document.querySelector("#removeother .closebutton").removeEventListener("click",closeDialog)
    document.querySelector("#removeother #remove_other").removeEventListener("click",removebtn)
}
function removebtn(){

    removeWinner(other);
    makeWinner(selectedanimal);
    buildList();
    closeDialog();
}

//if ignore-do nothing
//if remove;





}
function removeAorB(winnerA,winnerB){
    //if removeA:


    document.querySelector("#remove_AorB").classList.remove("hide")
    document.querySelector("#remove_AorB .closebutton").addEventListener("click",closeDialog)

document.querySelector("#remove_AorB #remove_a").addEventListener("click",removea)
document.querySelector("#remove_AorB #remove_b").addEventListener("click",removeb)

document.querySelector("#remove_AorB [data-field=winnerA]").textContent=winnerA.name;
document.querySelector("remove_AorB [data-field=winnerB]").textContent=winnerB.name;

function closeDialog(){
    document.querySelector("#remove_AorB").classList.add("hide")
    document.querySelector("#remove_AorB .closebutton").removeEventListener("click",closeDialog)

    document.querySelector("#remove_AorB #remove_a").removeEventListener("click",removea)
    document.querySelector("#remove_AorB #remove_b").removeEventListener("click",removeb)
}
function removea(){

    removeWinner(winnerA);
    makeWinner(selectedanimal);
    buildList();
    closeDialog();
}
function removeb(){
     //if removeB
    removeWinner(winnerB);
    makeWinner(selectedanimal);
    buildList();
    closeDialog();
}
   
   
}
function removeWinner(winnerAnimal){
winnerAnimal.winner=false;
}

function makeWinner(animal){
    animal.winner=true;
}
}
