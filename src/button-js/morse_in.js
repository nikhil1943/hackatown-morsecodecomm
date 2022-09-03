var clrButton = document.getElementById("clear-button");
var morseButton = document.getElementById("morse-button");
var sendButton = document.getElementById("send-button");
var morseIn = document.getElementById("morse-input");

var morseString=""; // morse code input is stored here

const CODE_DELAY = 5000; // time period in which spaces are added (in miliseconds)

document.addEventListener('contextmenu', e => e.preventDefault()); // disable right click

// adding "dots" on simple clicks 
morseButton.addEventListener("click", (event) =>{
    morseString += ".";
    morseIn.value = morseString;
})

// adding "dashes" on long press, long-press module
morseButton.addEventListener("long-press",(event)=>{
    morseString += "-";
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

document.addEventListener('keydown', (event) => {
    if (event.key == " ") {
        if(event.repeat) {
            morseString += "-"
            morseIn.value = morseString;
        } else {
            morseString += "."
            morseIn.value = morseString;
        }
    }
});