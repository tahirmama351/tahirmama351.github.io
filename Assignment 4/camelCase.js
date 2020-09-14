"use strict";
/**
 * @param{string} the input must be string.
 * @returns{number} the return expexted to be number.
 */
function camelCase(str){
     str = str.toLowerCase();
    let splitedString = str.split("-")
    
  let newArrStr =  splitedString.map((word, index)=> index===0 ? word: word[0].toUpperCase() + word.slice(1));
  let newStr = newArrStr.join("");
  return newStr;
}