function power(x,n){
     let product = 1
     for(i=0; i<n; i++){
          product*=x;
     }
     return product;
}
let result= power(5,5)
console.log(result)