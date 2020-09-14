"use strict";
/**
 * @param{number}  input must be number.
 * @returns{number} the return expexted to be number.
 */

function numberFromUser() {
     do {
          let num = prompt("Enter any number:");
     } while (!isFinite(num));
     if (num == '' || num !== null) {
          return null;
     }
     return parseInt(num);

}