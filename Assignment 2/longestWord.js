"use strict"

function longestWord(arr){
     let maxWordLength = -Infinity;
     for(i=0; i<arr.length; i++){
          if(arr[i].length>maxWordLength){               
               maxWordLength=arr[i].length;
          }else {
               maxWordLength=maxWordLength
          }
     }
     return maxWordLength
}
// let result = longestWord(["tahir","mama","maymuna"])
// console.log(result)