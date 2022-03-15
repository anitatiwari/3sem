`use strict`;


let input1 = document.querySelector("#inputtext");
let  option= document.querySelector("#pickopt");
let output1= document.querySelector("#output")
const generatebtn= document.querySelector("#genbtn")


let pickedOption;
let input;
let output;
let outputResult;




const options= {
1:function (string){
    string =`${string.substring(0,1).toUpperCase()}${string.substring(1,string.length).toLowerCase()}`;
    return string;
},

2:function (string){
    const name =string.split(" ");
    return name[0]
},
3: function (string) {
    const names = string.split(" ");
    return names[0].length;
  },
  4: function (string) {
    const names = string.split(" ");
    const middleArray = names.slice(1, names.length - 1);
    const middleName = middleArray.join(" ");

    const startPosition = string.indexOf(middleName);
    const endPosition = startPosition + middleName.length - 1;

    return `${middleName} Start: ${startPosition} End: ${endPosition}`;
  },
  5: function (string) {
    if (string.endsWith(".jpg") || string.endsWith(".png")) {
      return (string = "Image");
    }
    return (string = "not image");
  },
  6: function (string) {
    string = "*".repeat(string.length);
    return string;
  },
  7: function (string) {
    string = `${string.substring(0, 2)}${string
      .substring(2, 3)
      .toUpperCase()}${string.substring(3)}`;
    return string;
  },
  8: function (string) {
    let upperCase = false;
    let result = " ";

    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (upperCase) {
        char = char.toUpperCase();
      }

      upperCase = char === "-" || char === " ";
      result += char;
    }

    return result;
  },
}

    generatebtn.addEventListener("click",generate)

function generate(){
    const input = document.querySelector("#inputtext").value;
  const output = document.querySelector("#output");
  const selected = option.options[option.selectedIndex].value;

  output.value = options[selected](input);  
}


//   input = inputText.value;
//   //   output = outputText.value;
//   pickedOption = operator.value;
//   console.log(input);
// const inputText = document.querySelector("#input_text");
// const operator = document.querySelector("#operator");
// const outputText = document.querySelector("#output_text");
// const generateBtn = document.querySelector("#generate");

// let pickedOption;
// let input;
// let output;
// // let outputResult;

// window.addEventListener("DOMContentLoaded", start);

// function start() {
//   console.log("start");
//   generateBtn.addEventListener("click", generate);
// }

// function generate() {
//   console.log("generate");

//   //   pickedOption = "";
//   //   input = "";

//   input = inputText.value;
//   //   output = outputText.value;
//   pickedOption = operator.value;
//   console.log(input);

//   if (pickedOption === `0`) {
//     outputText.value = input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
//   } else if (pickedOption === `1`) {
//     outputText.value = input.substring(input.indexOf(0), input.indexOf(" "));
//   } else if (pickedOption === `2`) {
//     outputText.value =
//       input.substring(input.indexOf(0), input.indexOf(" ")).length + ` letters long`;
//   } else if (pickedOption === `3`) {
//     outputText.value =
//       `Start index: ` +
//       (input.indexOf(" ") + 1) +
//       `, end index: ` +
//       (input.lastIndexOf(" ") - 1) +
//       `, middle name: ` +
//       input.substring(input.indexOf(" ") + 1, input.lastIndexOf(" "));
//   } else if (pickedOption === `4`) {
//     if (input.endsWith(".jpg")) {
//       outputText.value = input.endsWith(".jpg") + `, is a jpg`;
//     } else if (input.endsWith(".png")) {
//       outputText.value = input.endsWith(".png") + `, is a png`;
//     } else {
//       outputText.value = `Is not a jpg or png`;
//     }
//   } else if (pickedOption === `5`) {
//     outputText.value = `*`.repeat(input.length);
//   } else if (pickedOption === `6`) {
//     outputText.value = input.substring(0, 2) + input.charAt(2).toUpperCase() + input.substring(3);
//   } else if (pickedOption === `7`) {
//     outputText.value = input.split(input);
//   }
// }
