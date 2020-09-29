function filterRange(arra,a, b){
     let filterdArr = arr.filter(item => a <=item && item <= b); // the fiter method call forEach function
     return filterdArr
   }
   let arr = [2,5,6,1,3,9];
   console.log(filterRange(arr,3,8));
   console.log(arr);