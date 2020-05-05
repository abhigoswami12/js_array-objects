// Value of x, y, a, b

var x = 10;
var y = "abc";
var a = x;
var b = y;
// x = 10, y = "abc", a = 10, b = "abc"

// Value of x, y, a, b
var x = 10;
var y = "abc";
var a = x;
var b = y;
a = 5;
b = "def";
// x = 10, y = "abc", a = 5, b = "def"

// Value of arr & arrCopy
var arr = [1];
var arrCopy = arr;
arr.push(2);
// arr = [1, 2], arrCopy = [1,2]

// Value of obj
var obj = { name: "ryan" };
obj = { surname: "florance" };

// obj = { surname: "florance" };

// What's the output.
var arr = ["Hi"];
var arr2 = arr;
console.log(arr === arr2);

// true

// What's the output.
var arr1 = ["Hi!"];
var arr2 = ["Hi!"];
console.log(arr1 === arr2);
console.log(arr1 == arr2);
// both statement are false as two independent arrays cannot be  equal.

//What's the output
console.log([10] === [10]);
// false
// What's the output?

function personDetails(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50
  };

  return person;
}
var personObj1 = {
  name: "Alex",
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); //
                            {
                              name: "Alex",
                              age: 25
                            };

console.log(personObj2); //
                            {
                              name: "John",
                              age: 50
                            };

// Guess the output
var oldArray = []; //empty array assigned
var object = {}; // empty object assigned
object.newArray = oldArray; // copy by reference
oldArray.push(10); // 10 is pushed at the end of the array 
console.log(object.newArray === oldArray); //true
// true

// Guess the output
var a = 5; //a = 5
var b = a; // b = 5
a = 10; // now a = 10
console.log(a); //a = 10
console.log(b); // b = 5;

// What's the output?
var a = {}; //empty object
var b = a; // b is also assigned with an empty object by virtue of copy by reference
a.a = 1; // object 'a' gets a key named "a" with value 1
console.log(a); //{a = 1}
console.log(b); //{a = 1}

// What's the output.
var a = []; // empty array
var b = a; //copy by reference
a.push(1); // a = [1]
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b); //true

// Clone the object person in clone
var person = {
  name: "Mark",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
};


let clone = Object.assign( {}, person );
  console.log(clone);



// Output of the following
let brothers = ["John", "Bran", "Robb"];
let house = "Stark";
let user = {
  name: "Arya",
  house: house,
  brothers: brothers
};

let user2 = {
  name: "Arya",
  house: house,
  brothers: brothers
};

let user3 = {
  name: "Arya",
  house: "Stark",
  brothers: ["John", "Bran", "Robb"]
};
// Output of the below code and why?
user.house === user2.house; // output: true
user.house == user2.house; // output: true
user.brothers === user2.brothers; // output: true
user.brothers == user2.brothers; // output: true
user.name == user2.name; // output: true
user.name === user2.name; // output: true
user.brothers == user3.brothers; // output:false
user.brothers === user3.brothers; // output:false
user.house === user2.house; // output: true
user.house === user3.house; // output: true
user.brothers[0] === user2.brothers[0]; // output: true
user.brothers[0] === user3.brothers[0]; // output: true
