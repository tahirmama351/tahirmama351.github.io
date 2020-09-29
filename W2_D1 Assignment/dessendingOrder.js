function dessendingOrder(arr){
     return arr.sort((a,b) => b-a)
}
let arr = [-1,5,6,1,-10,10]
console.log(dessendingOrder(arr))
