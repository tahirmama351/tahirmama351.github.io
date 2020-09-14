"use strict";

describe("toUpperCase", function() {
     it("Uppercases the first symbol", function() {
       assert.strictEqual(toUpperCase("john"), "John");
     });
   
     it("Doesn't die on an empty string", function() {
       assert.strictEqual(toUpperCase(""), "");
     });
   });