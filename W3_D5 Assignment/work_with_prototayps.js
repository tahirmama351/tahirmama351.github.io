let animal = {
     jumps: null
   };
   let rabbit = {
     __proto__: animal,
     jumps: true
   };
   
   console.log( rabbit.jumps ); // ? true. because it uses its propery instead of inheritance
   
   delete rabbit.jumps;
   
   console.log( rabbit.jumps ); // ? null. at this pion rabbit has not its own jumps, so it inherite from anima
   
   delete animal.jumps;
   
   console.log( rabbit.jumps ); // ? undefined. the jumps deleted fom both animal and rabbit, so there in such porperty at this point