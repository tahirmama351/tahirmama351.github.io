let head = {
     glasses: 1,
};

let table = {
     pen: 3,
     __proto__: head,
};

let bed = {
     sheet: 1,
     pillow: 2,
     __proto__: table,
};

let pockets = {
     money: 2000,
     __proto__: bed,
};

// the answer for second question it takes the same. Because, one importance of inheritance  one it used the poporty it remember where the poporty is. 