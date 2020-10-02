function doubleAge(obj) {
     return obj.age * 2;

}
function doubleNumber(arr) {
     return arr.map(doubleAge)

}

let peopleArray = [
     { name: "Sam", age: 15 },
     { name: "William", age: 6 },
     { name: "Lucy", age: 13 },
     { name: "Barney", age: 80 }
]
console.log(doubleNumber(peopleArray))




