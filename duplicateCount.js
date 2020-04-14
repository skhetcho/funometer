// find count the number of duplicates in a string
function duplicateCount(text){
    sorted = text.toLowerCase().split("").sort()
    result = []
    for(var i = 0; i < sorted.length - 1; i++){
    if(sorted[i+1] == sorted[i]){
      if(result.indexOf(sorted[i]) == -1){
        result.push(sorted[i])
      }
    }
  }
    return result.length
  }

  const test = duplicateCount("UwndQuwiquhioqjwdvns");
  console.log(test); //[ 'd', 'i', 'n', 'q', 'u', 'w' ]
  console.log(test.length) //6