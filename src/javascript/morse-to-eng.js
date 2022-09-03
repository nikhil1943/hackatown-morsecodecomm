function decodeMorse(morseCode) {
    var letter = { 
      '.-':     'a',
      '-...':   'b',
      '-.-.':   'c',
      '-..':    'd',
      '.':      'e',
      '..-.':   'f',
      '--.':    'g',
      '....':   'h',
      '..':     'i',
      '.---':   'j',
      '-.-':    'k',
      '.-..':   'l',
      '--':     'm',
      '-.':     'n',
      '---':    'o',
      '.--.':   'p',
      '--.-':   'q',
      '.-.':    'r',
      '...':    's',
      '-':      't',
      '..-':    'u',
      '...-':   'v',
      '.--':    'w',
      '-..-':   'x',
      '-.--':   'y',
      '--..':   'z',
      '.----':  '1',
      '..---':  '2',
      '...--':  '3',
      '....-':  '4',
      '.....':  '5',
      '-....':  '6',
      '--...':  '7',
      '---..':  '8',
      '----.':  '9',
      '-----':  '0',
    };
  
    return morseCode
      .split('   ')
      .map(
        a => a
          .split(' ')
          .map(
            b => letter[b]
          ).join('')
      ).join(' ')
      .trim() ;
}

transButton = document.getElementById("translate-button");
textBoxes = document.querySelectorAll(".text_bubble");

transButton.addEventListener("click", (e)=>{
  textBoxes.forEach(a => {
    a.textContent = decodeMorse(a.textContent)
  })
})