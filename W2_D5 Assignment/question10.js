// 10. Army of function
function makeArmy() {
     let shooters = [];
   
     let i = 0;
     while (i < 10) {
         let j = i;
         let shooter = function() { // shooter function
           console.log( j ); // should show its number
         };
       shooters.push(shooter);
       i++;
     }
   
     return shooters;
   }
   
   let army = makeArmy();
   
   
   army[0](); // 0
   army[5](); // 5