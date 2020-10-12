// Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out:
//[teacher's name] is now teaching [subject]


let  Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}


let  Teacher = function() {
    this.teach = function(subject){
        console.log(this.name + " is now teaching " + subject);
    }
}
Teacher.prototype = new Person();
let  him = new Teacher();

him.initialize("Pro. Keth Levi", 59);
him.teach("CS303");