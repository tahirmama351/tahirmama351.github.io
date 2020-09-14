"use strict";
describe("truncateText", function() {
     it("truncate the long string to the given length (including the ellipsis)", function() {
       assert.equal(
        truncateText("tahir kedir ", 7),
         "tahir ke..."
       );
     });
   
     it("doesn't change short strings", function() {
       assert.equal(
        truncateText("tahir", 6),
         "tahir"
       );
     });
   
   });