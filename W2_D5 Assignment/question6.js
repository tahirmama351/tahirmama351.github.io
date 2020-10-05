// sum with closur
function sum(a) {

     return function(b) {
       return a + b; 
     };
   
   }
   
   console.log( sum(10)(2) ); // 12
   console.log( sum(-5)(-1) ); // -6