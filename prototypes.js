// In this assignment, you will be creating a a constructor function named "Person" and then create your whole family from that constructor.


// Create "Person" constructor function
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Move the "Speak" method outside of the constructor function and into the prototype.
// Create an object named "Me" using the "Person" constructor function
// Call the "Speak" method on the "Me" object
// Console log all your results


function Person(name, age, hobby) {
     this.name = name
     this.age = age
    this.hobby = hobby                 
 }
                
   Person.prototype.Speak = function(){
 return  " Hello, My name is " + this.name + " and I'm  "+ this.age + " years old. and I love  " + this.hobby
                
 }
                
                
 let me = new Person('Abdiasiis', 21, 'football')
 let dad = new Person('Halane', 45, 'Reading')
                
                
 console.log(me.Speak());
 console.log(dad.Speak());
                




                