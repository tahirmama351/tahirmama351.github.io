"use strict";
/**
* @param{number} min must be number.
* @param{number} max must be number.
* @returns{number} the return expexted to be any random number between minimum ande maximum.
*/

function randomNum(min, max) {
     let random = min + Math.random() * (max - min);
     return random;
}
//randomNum(3, 9);
