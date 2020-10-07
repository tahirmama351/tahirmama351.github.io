'use strict';
/* eslint-disable */
/**
 * 
 * @param {Array} arr an array of numbers
 * @param {Function} func a function which use to filter even numbers only
 * @returns {Array} return an array of numbers
 */
function myFilter(arr,func){
    const  newArray = [];
    for(let element of arr){
        newArray.push(func(element));
    }
    return newArray;
}
let testArray = [1,4,5];
/**
 * 
 * @param {*} num which takes number
 * @returns{number} this will return the even numbers
 */
function checkFilter(num){
    if(num%2===0){
        return num
    }
}
console.log(myFilter(testArray,checkFilter))