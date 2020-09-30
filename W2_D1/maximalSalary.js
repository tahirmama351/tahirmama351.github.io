function topSalary(salaries) {

     let max = 0;
     let maxPaidName = null;
   
     for(const [name, salary] of Object.entries(salaries)) {
       if (max < salary) {
         max = salary;
         maxPaidName = name;
       }
     }
   
     return maxPaidName;
   }

   let salaries = {
     "John": 100,
     "Pete": 300,
     "Mary": 250
   };

   let topPaidName = topSalary(salaries)
   console.log(topPaidName)

   describe("topSalary", function() {
     it("returns top-paid person", function() {
       let salaries = {
         "John": 100,
         "Pete": 300,
         "Mary": 250
       };
   
       assert.equal( topSalary(salaries), "Pete" );
     });
   
     it("returns null for the empty object", function() {
       assert.isNull( topSalary({}) );
     });
   });