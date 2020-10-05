// 4. counter object

function Counter() {
     let count = 0;
   
     this.up = function() {
       return ++count;
     };
     this.down = function() {
       return --count;
     };
   }
   
   let counter = new Counter();
   
   console.log( counter.up() ); // 1  because it is pre incremented
   console.log( counter.up() ); // 2  it incrmented here again
   console.log( counter.down() ); // 1  because it is pre deceremented