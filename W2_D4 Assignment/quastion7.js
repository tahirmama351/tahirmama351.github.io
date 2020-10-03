/** eslint-disable */
'use strict'
/**7. Write code to illustrate the use of the spread operator for the following use cases
a) Copy an array
b) Concatenate arrays into a new array
c) Concatenate an array and a new array element
d) Use an array as arguments
e) Use Math.min and Math.max
f) Combine several objects into a single object */
 
//a) Copy an array
let arr =[1,2,3,4];
let copyArr=[...arr]
console.log(copyArr)
 
//b) Concatenate arrays into a new array
let arr1=[1,2,3,4,"hello"];
let arr2=[4,5,6,7]
let concateTwo= [...arr1,...arr2]
console.log(concateTwo);
 
//c) Concatenate an array and a new array element
let a =['a','b','c']

let c = [a, ...a]
console.log(c)
//d) Use an array as arguments
function sum(a,b,c){
    return a+b+c;
}
let newArr=[10,45,100];
console.log(sum(...newArr))
 
//e) Use Math.min and Math.max
let arrNew =[1,45,67,4,34,67];
console.log(Math.min(...arrNew))
console.log(Math.max(...arrNew))
 
//f) Combine several objects into a single object 
let a, b, c, d, e;
a = {a:1, b:2, c:3, d: 44};
b ={e:11,f:"age"}
c = {...a,...b }
console.log(c)