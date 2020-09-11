"use strict";
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {number}
 * @nun1 {number}
 * @nun2 {number}
 */
let salaries = {
     Joht: 100,
     Ann: 160,
     Pete: 130,
};
let sum = 0;
for (let key in salaries) {
     sum += salaries[key];
}
console.log(sum);