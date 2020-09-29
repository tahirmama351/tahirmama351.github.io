/**
 * if we use return objedt in constructor function it return object. So if two functions returns the same object the two functions are the same.
 */
let student = {name: "Tahir", age: 32,};

function A() { return student; }
function B() { return student; }

console.log( new A() == new B() ); // bothe functions returning the same objedt