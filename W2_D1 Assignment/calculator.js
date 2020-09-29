prompt= require('prompt-sync')();

function Calculator(num1, num2) {
     this.read = function () {
          this.num1 = parseInt(prompt("Enter first number: "))
          this.num2 = parseInt(prompt("Enter second number: "))
     }
     this.sum = function () { return this.num1 + this.num2 }
     this.product = function () { return this.num1 * this.num2 }
}
let calculator = new Calculator()
calculator.read()
console.log(calculator.sum())
console.log(calculator.product())