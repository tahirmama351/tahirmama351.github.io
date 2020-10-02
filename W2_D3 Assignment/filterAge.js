function filterAge(arr){
return arr.filter(key => key.age >= 10)
}

const peopleArray = [
     { name: "Sam", age: 15 },
     { name: "William", age: 6 },
     { name: "Lucy", age: 13 },
     { name: "Barney", age: 80 }
];
console.log(filterAge(peopleArray))
