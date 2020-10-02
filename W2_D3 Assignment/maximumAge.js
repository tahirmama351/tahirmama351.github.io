function maxOfAge(arr) {
     return arr.reduce(maxAge)
}
function maxAge(obj) {
     let max = 0
     if (obj.age > max) {
          return obj.age;
     }
     return max;
}

let peopleArray = [
     { name: "Sam", age: 15 },
     { name: "William", age: 6 },
     { name: "Lucy", age: 13 },
     { name: "Barney", age: 80 }
]
console.log(maxOfAge(peopleArray))