let user= {
     name:"Tahir",
     years: 32,
   }
   let {name, years:age, isAdmin = false} = user
   console.log(name)
   console.log(age)
   console.log(isAdmin)