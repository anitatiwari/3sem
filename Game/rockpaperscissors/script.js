const game = () =>{
    let playerScore=0;
    let computerscore=0;
    let moves= 0;

    //Function to
    const playGame=() =>{
        const rockBtn = document.querySelector('.rock');
        const paperBtn= document.querySelector('.paper');
        const scissorBtn= document.querySelector('.scissors');
        const playerOptions=[ rockBtn, paperBtn, scissorBtn];
        const computerOptions=[ "rock", "paper" , "scissor"]
 
    //function to start the game
    playerOptions.forEach(option=>{
option.addEventListener('click',function(){
    const choiceNumber= Math.floor(Math.random()*3);
    const computerChoice= computerOptions[choiceNumber]
    console.log(computerChoice)
})
    })
        

}
//Function to decide winner
const winner = (player,computer)=>{
    const result =documment.getElementById('texts');
    
    if (player===computer){
        setDecision("Tie")
    }
    else if (player=="rock"){
        if (computer == "paper"){
            setDecision("computer Win");

        }
        else{
            setDecision("player Win")
        }
    }
    else if(player =='scissor'){
        if (computer=="rock"){
           setDecision("computer Win");

        }
        else{
            setDecision("player Win")
        }
        
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            setDecision("computer Win");
           
        }else{
            setDecision("player Win")
            
        }
    }
   
    function userImgDisplay() {
        var image = document.getElementsByClassName('player');
        if (player == "rock") {
          image.src = "hand_rock.png";
        }else if (player == "paper") {
          image.src = "hand_paper.png";
        }else if (player == "scissors") {
          image.src = "hand_scissors.png";
        }
      
      }
      
      function comImgDisplay() {
        var image = document.getElementById('myImage');
        if (computer = "rock") {
          image.src = "hand_rock.png";
        }else if (computer = "paper") {
          image.src = "hand_paper.png";
        }else if (computer = "scissors") {
          image.src = "hand_scissors.png";
        }
      }
      const setDecision = (decision) => {
        document.querySelector("#texts h1").innerText = decision;
        console.log(setDecision)
      }

console.log(result)
}

playGame();
}
game();

// let user = document.getElementById("player1");
// let comp = document.getElementById("player2");
// let buttons = document.getElementById("buttons");

// document.querySelector(".rock").addEventListener("click", function () {
//   userChoice("r");
//   buttons.classList.add("disabled");
//   user.classList.add("shake");
//   user.classList.add("rock");

//   setTimeout(() => {
//     user.classList.remove("shake");
//   }, 1500);
// });
// document.querySelector(".paper").addEventListener("click", function () {
//   userChoice("p");
//   buttons.classList.add("disabled");
//   user.classList.add("shake");
//   user.classList.add("paper");
//   setTimeout(() => {
//     user.classList.remove("shake");
//   }, 1500);
// });
// document.querySelector(".scissors").addEventListener("click", function () {
//   userChoice("s");
//   buttons.classList.add("disabled");
//   user.classList.add("shake");
//   user.classList.add("scissors");
//   setTimeout(() => {
//     user.classList.remove("shake");
//   }, 1500);
// });

// function userChoice(userChoice) {
//   console.log("user " + userChoice);

//   function comChoice() {
//     let value = Math.floor(Math.random() * 3);
//     if (value === 0) {
//       comp.classList.add("shake");
//       setTimeout(() => {
//         comp.classList.add("rock");
//         comp.classList.remove("shake");
//       }, 1500);
//       return "r";
//     } else if (value === 1) {
//       comp.classList.add("shake");
//       setTimeout(() => {
//         comp.classList.add("paper");
//         comp.classList.remove("shake");
//       }, 1500);
//       return "p";
//     } else if (value === 2) {
//       comp.classList.add("shake");
//       setTimeout(() => {
//         comp.classList.add("scissors");
//         comp.classList.remove("shake");
//       }, 1500);
//       return "s";
//     }
//   }
//   let comChoiceValue = comChoice();
//   console.log("pc " + comChoiceValue);
//   setTimeout(() => {
//     if (userChoice === "r") {
//       if (comChoiceValue === "r") {
//         displayResult("tie");
//       } else if (comChoiceValue === "p") {
//         displayResult("lost");
//       } else if (comChoiceValue === "s") {
//         displayResult("win");
//       }
//     }

//     if (userChoice === "p") {
//       if (comChoiceValue === "r") {
//         displayResult("win");
//       } else if (comChoiceValue === "p") {
//         displayResult("tie");
//       } else if (comChoiceValue === "s") {
//         displayResult("lost");
//       }
//     }

//     if (userChoice === "s") {
//       if (comChoiceValue === "r") {
//         displayResult("lost");
//       } else if (comChoiceValue === "p") {
//         displayResult("win");
//       } else if (comChoiceValue === "s") {
//         displayResult("tie");
//       }
//     }
//   }, 1500);
// }

// function displayResult(result) {
//   console.log("you " + result);
//   document.getElementById(result).classList.remove("hidden");
//   setTimeout(() => {
//     window.location.reload();
//   }, 1500);
// }