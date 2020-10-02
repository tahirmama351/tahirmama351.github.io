

function sumOfElement(arr){
     return arr.reduce((accumulator, current) => accumulator + current)
}
const numArray = [5,0, 7, 77, -20, 300, 51, 2]
let sum = sumOfElement(numArray)

function average(arr, sum){
 
     console.log ( sum/(arr.length))
}

average(numArray, sum)