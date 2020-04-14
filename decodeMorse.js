decodeMorse = function(morseCode){
    var morseList = [
      [".-", "A"],
      ["-...", "B"],
      ["-.-.", "C"],
      ["-..", "D"],
      [".", "E"],
      ["..-.", "F"],
      ["--.", "G"],
      ["....", "H"],
      ["..", "I"],
      [".---", "J"],
      ["-.-", "K"],
      [".-..", "L"],
      ["--", "M"],
      ["-.", "N"],
      ["---", "O"],
      [".--.", "P"],
      ["--.-", "Q"],
      [".-.", "R"],
      ["...", "S"],
      ["-", "T"],
      ["..-", "U"],
      ["...-", "V"],
      [".--", "W"],
      ["-..-", "X"],
      ["-.--", "Y"],
      ["--..", "Z"],
      [".----", "1"],
      ["..---", "2"],
      ["...--", "3"],
      ["....-", "4"],
      [".....", "5"],
      ["-....", "6"],
      ["--...", "7"],
      ["---..", "8"],
      ["----.", "9"],
      ["-----", "0"],
      [".-.-", ","],
      [".-.-.-", "."],
      ["-.-.--", "!"],
      ["...---...", "SOS"],
  
    ]
    var humanSentence = "";
    var words = morseCode.split("   ");
  
    for(var i = 0; i < words.length; i++){
      var letters = words[i].split(" ")
      var thisWord = "";
  
      for(var j = 0; j < letters.length; j++){
        
        for(var k = 0; k < morseList.length; k++){
          if(morseList[k][0] == letters[j]){
            thisWord += morseList[k][1];
          }
        }
  
      }
      if(humanSentence.length < 1){
        humanSentence += thisWord
      }
      else {
        humanSentence += " " + thisWord
      }
    }
    
    return humanSentence;
  }
  
  
  //test case
  //the space between words is three spaces "   "
  //the space between each letter in the word is one space " "
  const test = decodeMorse(".... . -.--   .--- ..- -.. ."); //HEY JUDY
  
  
  console.log(test)
  
  
  