"use strict";
/**
 * @param{number} the input must be number.
 * @returns{number} the return expexted to be number.
 */

function numberFromUser() {
     do {
          let num = prompt("Enter any number:");
     } while (!isFinite(num));

     if (num == '' || num !== null) {
          return null;
     } else {
          return parseInt(num)
     }
}