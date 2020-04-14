function isTriangle(a,b,c) {
    var arr = [];
    arr.push(a,b,c);
    arr.sort();
    if(arr[2] >= (arr[0] + arr[1])){
      return false
    }
    return true
 }

 const test = isTriangle(2, 2, 7)
 console.log(test)