'use strict'

/* global assert longestWord*/
/* longestWord() that takes an array of string and returns the length of longest word*/

discribe("longestWord", function(){
     it("the largest of tahir, mama, and maymuna is maymuna", function(){
     assert.equal(longestWord(["tahir","mama","maymuna"],7))
     });
});