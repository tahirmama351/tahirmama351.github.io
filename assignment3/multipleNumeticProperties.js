let menu = {
     width: 200,
     height: 300,
     title: "My menu",
};

function multiplyNumeric() {

     for (let key in menu) {
          if (typeof menu[key] === "number") {
               menu[key] *= 2
          }
     }
     return menu
}
console.log(multiplyNumeric())
