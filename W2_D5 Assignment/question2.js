// which variable are available?



function makeWorker() {
     let name = "Pete";
   
     return function() {
       console.log(name);
     };
   }
   
   let name = "John";
   
   // create a function
   let work = makeWorker(); // at this point the name: "pete" stays in lexical environment
   
   
   work(); // what will it show?
   //pete