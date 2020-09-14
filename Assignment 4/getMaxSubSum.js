"use strict";
/**
 * @param{array} arr input must be an array of number.
 * @returns{number} the return the miximun sum of contigues subarray.
 */
function getMaxSubSum(arr) {
     let maxSum = 0;
     let partialSum = 0;
   
     for (let element of arr) { 
       partialSum += element; 
       maxSum = Math.max(maxSum, partialSum); 
       if (partialSum < 0) partialSum = 0; 
     }
     return maxSum;
   }