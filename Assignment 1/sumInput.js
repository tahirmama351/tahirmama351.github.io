let prompt = require('prompt-sync')();


function sumInput() {
     let arr = []

     do {
          let input = prompt("Enter number: ")
          input = parseInt(input);
          arr.push(input)
     } while (input!==NaN || input !== null || input !== "")


     let sum = 0
     for (let i = 0; i < arr.length; i++) {
          sum += arr[i]
     }
     return sum;
}
let result = sumInput()
console.log(result)


