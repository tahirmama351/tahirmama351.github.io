class Animal {

     constructor(name) {
       this.name = name;
     }
   
   }
   
   class Rabbit extends Animal {
     constructor(name) {
          // this.name = name; when we overwrite constructor the extended class expect from parent to do the job. so using the keyword super we heve to extend the constructor from parent
       super(name);
       this.created = Date.now();
     }
   }
   
   let rabbit = new Rabbit("White Rabbit"); // ok now
   console.log(rabbit.name);