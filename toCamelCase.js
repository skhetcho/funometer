function toCamelCase(str){
    str = str.split("");
    for (var i = 0; i < str.length; i++){
      if(str[i] == "-" || str[i] == "_" || str[i] == " "){
        str[i] = "";
        str[i+1] = str[i+1].toUpperCase()
      }
    }
    return str.join("");
  }

const test = toCamelCase("the_stealth_warrior");
console.log(test)