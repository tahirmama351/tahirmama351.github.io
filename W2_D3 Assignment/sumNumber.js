function sumNumber(num) {
     let sum = 0
     if (num ==0) {
         sum = sum
     } else {
          sum = num + sumNumber(num - 1)
     }

     return sum

}
console.log(sumNumber(100))