"use strict";

describe("checkForSpam", function() {
     it('finds spam in "buy ViAgRA now"', function() {
       assert.isTrue(checkForSpam('buy ViAgRA now'));
     });
   
     it('finds spam in "free xxxxx"', function() {
       assert.isTrue(checkForSpam('free xxxxx'));
     });
   
     it('no spam in "innocent rabbit"', function() {
       assert.isFalse(checkForSpam('innocent rabbit'));
     });
   });