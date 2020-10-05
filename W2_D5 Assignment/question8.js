// filter through function

function inBetween(a,b){
     return function (elment){
        return a <= elment && elment <=b
     }
}

function inArray(arr) {
     return function(elment) {
       return arr.includes(elment);
     };
   }

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2