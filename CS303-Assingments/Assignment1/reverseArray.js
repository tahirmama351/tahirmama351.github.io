
function reverseArray(arr){
     let reversedArr = []
     for(let i=0; i<arr.length; i++){
          reversedArr[i]= arr[arr.length-1-i]
     }
     return reversedArr;
}

//console.log(reverseArray(["A", "B", "C"]));