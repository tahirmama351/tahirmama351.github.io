"use strict";

describe("camelCase", function() {

     it("leaves an empty line as is", function() {
       assert.equal(camelCase(""), "");
     });
   
     it("turns background-color into backgroundColor", function() {
       assert.equal(camelCase("background-color"), "backgroundColor");
     });
   
     it("turns list-style-image into listStyleImage", function() {
       assert.equal(camelCase("list-style-image"), "listStyleImage");
     });
   
     it("turns -webkit-transition into WebkitTransition", function() {
       assert.equal(camelCase("-webkit-transition"), "WebkitTransition");
     });
   
   });