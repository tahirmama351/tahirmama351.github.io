"use strict";

/**
 * @param{string} the input must be string.
 * @returns{string} the return expexted to be string
 */
function sumString() {
     let str = "Hello";
     str.test = 5;
     alert(str.test);
}


///////////////////////// Sum numbers from visitor

/**
 * @param{num1} the input must be number.
 * @param{num2} the input must be a number.
 * @return{number}the output expected to be number.
 */
function sum(num1, num2) {
     return num1 + num2;
}
// let fnum = prompt("Enter the first number: ");
// let lnum = prompt("Enter the second number: ");
// sum(fnum, lnum);


//////////// an ocational infinite loop

/**
 * @param{number} the input must be number.
 * @returns{number} the return expexted to be number.
 */

function infiniteLoop() {
     let i = 0;
     while (i != 10);
     i += 0.2;
}
//infiniteLoop(); // the number never equal to 10

////////////// A random number from min to max

/**
* @param{number} the input must be number.
* @returns{number} the return expexted to be any random number between minimum ande maximum.
*/

function randomNum(min, max) {
     let random = min + Math.random() * (max - min);
     return random;
}
//randomNum(3, 9);

//////////// A randm integer from min to max

/**
 * @param{number} the input must be number.
 * @returns{number} the return expexted to be any random number between minimum ande maximum.
 */

function randomNum(min, max) {
     let random = Math.floor(min + Math.random() * (max - min));
     return random;
}






