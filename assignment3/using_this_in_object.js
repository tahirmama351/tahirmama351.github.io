"use strict";
// eslint-disable-next-line valid-jsdoc
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {"string"} 
 */
function makeUser() {
     return {
          name: "John",
          ref() {
               return this;
          }
     };
};

let user = makeUser();

alert(user.ref().name);