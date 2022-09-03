var clrButton = document.getElementById("clear-button");
var morseButton = document.getElementById("morse-button");
var tansButton = document.getElementById("translate-button");
var morseIn = document.getElementById("morse-input");

var morseString=""; // morse code input is stored here

const CODE_DELAY = 4000; // time period in which spaces are added (in miliseconds)

document.addEventListener('contextmenu', e => e.preventDefault()); // disable right click

// adding "dashes" on long press, long-press module
morseButton.addEventListener("long-press",(event)=>{
    morseString = morseString.slice(0,-1) + "-";
    morseIn.value = morseString;
})

// adding "dots" on simple clicks 
morseButton.addEventListener("mousedown", (event) =>{
    morseString += ".";
    morseIn.value = morseString;
})

// adding spaces in the intervals of "CODE_DELAY(ms)"
setInterval(function(){
    morseString += " "
    morseIn.value = morseString;
},CODE_DELAY)

// start/stop recording
clrButton.addEventListener("click",(e)=>{
    morseString = ""
    morseIn.value = morseString;
})

// document.addEventListener('keydown', (event) => {
//     if (event.key == " ") {
//         if(event.repeat) {
//             morseString += "-"
//             morseIn.value = morseString;
//         } else {
//             morseString += "."
//             morseIn.value = morseString;
//         }
//     }
// });