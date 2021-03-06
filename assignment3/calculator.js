'use strict';
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {"number"}
 * @nun1 {"number"}
 * @nun2 {"number"}
 */

let calculator = {
     read(){
          this.num1 = +prompt('num1: ', 0);
          this.num2 = +prompt('num2: ', 0);
     },
     sum() {
          return this.num1 + this.num2;
     },

     mul() {
          return this.num1 * this.num2;
     },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());