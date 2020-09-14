'use strict'

/* global assert longestWord*/
/* longestWord() that takes an array of string and returns the length of longest word*/

discribe("longestWord", function(){
     it("the largest word of [tahir, mama, and maymuna] is 7", function(){
     assert.equal(longestWord(["tahir","mama","maymuna"],7))
     });
});