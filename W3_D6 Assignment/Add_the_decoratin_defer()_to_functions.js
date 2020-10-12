Function.prototype.defer = function(ms) {
     let f = this;
     return function(...args) {
       setTimeout(() => f.apply(this, args), ms);
     }
   };
   
   let user = {
     name: "John",
     sayHi() {
       console.log(this.name); // John
     }
   }
   
   user.sayHi = user.sayHi.defer(1000);
   
   user.sayHi();