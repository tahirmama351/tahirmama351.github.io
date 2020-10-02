function maxOfNumber(arr){
     return arr.reduce(maximum)
}
function maximum(accumulatar, curent){
     if(accumulatar > curent){
          return accumulatar
     }
     return curent
}

const numArray = [5, 0, 7, 77, -20, 300, 51, 2]
console.log(maxOfNumber(numArray))