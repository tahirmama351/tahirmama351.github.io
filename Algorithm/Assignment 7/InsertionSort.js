
function insertionSort(arr){
     for (let i=1; i<arr.length; i++){
          let j=i;
          let temp = arr[i];
          let counter = 0;
          while(j>0 && temp< arr[j-1]){
               arr[j] = arr[j-1];
               j = j-1;
               counter++
          }
          arr[j] = temp;
     }
}
let arr1 = [4, 6, 2, 0, 3, -1]
insertionSort(arr1)
console.log(arr1)