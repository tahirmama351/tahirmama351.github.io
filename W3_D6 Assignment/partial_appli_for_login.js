prompt = require('prompt-sync')();

function askPassword(ok, fail) {
     let password = prompt("Password?", '');
     if (password == "rockstar") ok();
     else fail();
   }
   
   let user = {
     name: 'John',
   
     login(result) {
       console.log( this.name + (result ? ' logged in' : ' failed to log in') );
     }
   };
   
// fix using bind
askPassword(user.login.bind(user, true), user.login.bind(user, false));

/// using wrap
askPassword(function(){ user.login(true)} , function(){  user.login(false)});

/// fixing using call

askPassword(function () { user.login.call(user, true) }, function () { user.login.call(user, false) })

//////////   fixing ussing apply

askPassword(function () { user.login.apply(user, [true]) }, function () { user.login.apply(user, [false]) })

   //askPassword(?, ?); // ?