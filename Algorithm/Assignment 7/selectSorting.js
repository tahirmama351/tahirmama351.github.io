function selectionSorting(arr){
     let last = arr.length-1;
     let counter= 0; 
     for(let i=0; i<last; i++){
          let nextMin = findNextMinIndex(arr, i, last);
          SwapElements(arr, i, nextMin);
          counter++
     }

}

function findNextMinIndex(arr, bottom, top){
     let minIndex = bottom; 
     let min = arr[bottom];
     for(let i = bottom+1; i<= top; i++){
          if(arr[i]<min){
               min = arr[i]
          minIndex = i;
          }          
     }
     return minIndex
}

function SwapElements(arr, i, nextMin){
     let temp = arr[nextMin];
     arr[nextMin]= arr[i];
     arr[i] = temp;
}
let arr = [4, 6, 2, 0, 3, -1]
console.log(arr)
selectionSorting(arr);
console.log(arr)

