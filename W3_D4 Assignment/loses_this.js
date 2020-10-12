
prompt = require('prompt-sync')();

//Fix a function that loses “this” (do with bind, wrapper, call, and apply)

function askPassword(ok, fail) {
     let password = prompt("Password: ", '');
     if (password == "rockstar") ok();
     else fail();
}

let user = {
     name: 'John',

     loginOk() {
          console.log(`${this.name} logged in`);
     },

     loginFail() {
          console.log(`${this.name} failed to log in`);
     },

};
//   askPassword(user.loginOk, user.loginFail). if we call like this the "this" is loses the target

//// fixing with bind

let bindLoginOk = user.loginOk.bind(user)
let bindLoginFail = user.loginFail.bind(user)

askPassword(bindLoginOk, bindLoginFail);

// fixing with wrapp

// it is simply wrapping with function and call it

askPassword(function () { user.loginOk() }, function () { user.loginFail() })

/// fixing using call

askPassword(function () { user.loginOk, call(user) }, function () { user.loginFail.call(user) })

//////////   fixing ussing apply

askPassword(function () { user.loginOk.apply(user) }, function () { user.loginFail.apply(user) })


/**
 * if we apply, call with out wrapping like this
 * askPassword( user.loginOk, call(user) ,  user.loginFail.call(user) ); chack what will happen
 */
//
askPassword( user.loginOk.call(user) ,  user.loginFail.call(user) )//. if it is on the browser it alart login first and faild to log in then error undefined. it it is on node it is error not define 
