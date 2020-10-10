let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

speedy.eat("chocholet"); // this refor to speedy, so we fead speedy to hesmter

console.log(speedy.stomach);
console.log(lazy.stomach);
console.log(hamster.stomach);

