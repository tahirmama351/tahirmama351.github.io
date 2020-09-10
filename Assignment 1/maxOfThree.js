
/* Input:
     Three arguments;
processing:
     -find the largest number
output:
     -largest mumber
*/
function maxOfThree(num1, num2, num3){
     let max = -Infinity;
     for(i=0; i<3; i++){
          if(num1>max){               
               max=num1;
               num1=num2;
               num2=num3
               num3=max
          }
     }
     return num3
}
let result = maxOfThree(-12,9,6)
console.log(result)