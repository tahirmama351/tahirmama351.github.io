// 9. sort by field

let users = [
     { name: "John", age: 20, surname: "Johnson" },
     { name: "Pete", age: 18, surname: "Peterson" },
     { name: "Ann", age: 19, surname: "Hathaway" }
   ];
   function byField(fieldName){
     return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
   }

let sortByName = users.sort(byField('name'));
//let sortByAge = users.sort(byField('age'));

console.log(sortByName);
//console.log(sortByAge); if we run both at the same time the sort is updated to sortByAge.