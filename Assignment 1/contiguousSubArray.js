function getMaxSubSum(arr){
     let sum= arr[0]
     let temp=arr[0]

for (let i=1; i<arr.length; i++){
     if(arr[i]+sum > arr[i]){
         temp= sum+arr[i]
     }else{
          temp=arr[i]
     }
     sum=temp
}
return sum;
}
let arr= [100,-1,-3,50,40]
let result = getMaxSubSum(arr)
console.log(result)