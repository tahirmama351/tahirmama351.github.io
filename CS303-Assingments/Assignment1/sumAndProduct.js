/*
Input:
     -numbers in the array.
proccessing:
     -write the code the sum and product the elements of array togethe 
output:
     sum and product.
*/
function sum(arr) {
     let sum = 0;
     for (let i = 0; i < arr.length; i++) {
          sum += arr[i]
     }
     return sum
}

/////////// product

function product(arr) {
     let product = 0;
     for (let i = 0; i < arr.length; i++) {
          product *= arr[i]
     }
     return pruduct
}