"use strict";
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {boolean}
 
 */

function isEmpty() {
     for (let key in schedule) {
          return false
     }
     return true
}
let schedule = {};

console.log(isEmpty(schedule))

schedule["8:30"] = "get up"

console.log(isEmpty(schedule))