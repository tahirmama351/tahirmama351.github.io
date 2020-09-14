"use strict";

/**
 * @param{string} the input must be string.
 * @returns{boolean} the return expexted to be boolean 
 */
function checkForSpam(str) {
     // first change to lower case. Because js is case sencetive.
     let toLower = str.toLowerCase();
     if (toLower.includes("viagra") || toLower.includes("xxx")) {
          return true;
     }

     return false;
}