
function sum(accumulator, current){
     return accumulator + current
}


function reduce(arr){
     return arr.reduce(sum)
}

const numArray = [5,0, 7, 77, -20, 300, 51, 2]

console.log(reduce(numArray))