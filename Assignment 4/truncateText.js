"use strict";

/**
 * @param{string} str must be string.
 * @param{number} max is the maximun length of string
 * @returns{string} the return expexted to be string plus truncate.
 */

function truncateText(str, max) {
     if (str.length > max) {
          return str.slice(0, max + 1) + "...";
     }else {
           return str;
     }    
}