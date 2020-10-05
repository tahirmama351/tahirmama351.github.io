// is the variable visible?
//What will be the result of this code?

let x = 1;

function func() {
  console.log(x); // error. Cannot access 'x' before initialization

  let x = 2;
}

func();