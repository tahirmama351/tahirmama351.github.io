prompt= require('prompt-sync')();

function Accumulator(num){
     this.sum = num;
     
     this.read = function() {
          this.sum += +prompt("Enter the number: ")
     };
    
}
let accumulator = new Accumulator(1)
accumulator.read()
accumulator.read()
accumulator.read()
accumulator.read()
console.log(accumulator.sum)