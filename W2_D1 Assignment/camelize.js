
function camelize(str) {
     let arr = str.split('-') // to gate an array of string
     let mapedArr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
     // capitalizes first letters of all array items except the first one

     let joinedString = mapedArr.join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
     return joinedString;
}
console.log(camelize("list-style-image"))