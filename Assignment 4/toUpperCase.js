"use strict";
/**
 * @param{string} the input must be string.
 * @returns{string} the return expexted to be string with the first letter upper case
 */
function toUpperCase(str) {
     if (!str) return str;
     let firstLetterUpper = str[0].toUpperCase() + str.slice(1);
     return firstLetterUpper;
}