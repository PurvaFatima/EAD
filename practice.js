//CTRL+K TO EMPTY THE CONSOLE
//alert("Hello JS!") //gives an box popup on the website


console.log("this is first js code"); // statement used to print anything on the screen
//to store any data in the code we use variables there are some types of variables named variables -> var and constants -> const
//let and objects


var age=24; // Here, we declare a variable named 'age' and assign it the value of 24.
// we used var here to  indicate that this variable can be accessed anywhere within the function in which it was declared or 
//outside the function and can be changed



console.log(age);//This will display the value of age 
age = age + 1;
console.log(age);//This will display the value of age after it's changed
//var is a keyword used to declare a variable in JavaScript. When a variable is declared with var, it can be reassigned and updated within the same function or block of code.
var x = 10;
console.log(x); // Output: 10
x = 20;
console.log(x); // Output: 20




//const is a keyword used to declare a variable in JavaScript that cannot be reassigned or updated within the same function or block of code.
//  Once a variable is declared with const,its value is fixed and cannot be changed.
const y = {name: 'John'}; //this is another type of variable in javascript called object. In JavaScript, an object is a collection of properties, where each property is a key-value pair. 




//An object can be thought of as a container for storing and organizing data and functionality.
console.log(y); // Output: {name: 'John'}
y.name = 'Jane';
console.log(y); // Output: {name: 'Jane'}
//here, x is declared with var and can be reassigned. y is declared with const and its value is an object. Although the value of the object cannot be changed, the properties of the object can be updated.
// So, even though y is declared with const, the value of y.name can be changed from 'John' to 'Jane'.




//let is also used to create variables. some characterstics are as follows
//Block-scoped.
//Not hoisted (temporal dead zone).
//Cannot be re-declared within the same scope.
//Preferred for modern JavaScript code due to better scoping behavior.
//here where we use this "=" operator as ignment operator which means that whatever right side value comes in left side container then it will get replaced by the initial value of that for example: 
//if we say a=b then whatever value is in a will be given to b as well
let z = 5;
z += 3; // This line is equivalent to z = z + 3
console.log(z) // Output:  8
//this is an example that shows use of let and shows the use of assignment operator as well.



//Hoisting in JavaScript is like a magic trick where variable and function declarations are moved to the top of their containing scope.
// This means you can use them before you actually write them in your code. However, only the names are lifted, not their values or assignments.
console.log(myVar); // undefined
var myVar = 10;
console.log(myVar); // Output: 10
//In this code:
//myVar is declared later but still accessible because its declaration is moved to the top (hoisted).
//foo() can be called before its actual declaration due to hoisting.
foo(); // "Hello, world!"
function foo() {
  console.log("Hello, world!");
}


//types in js
//premitive and reference
//In short, primitive types hold simple values directly, while reference types hold references (or pointers)
// to where the actual data is stored in memory.
// Primitive Type: Number
let num1 = 10;
let num2 = num1; // Value of num1 is copied to num2

num1 = 20; // Changing num1 does not affect num2

console.log(num1); // Output: 20
console.log(num2); // Output: 10 (num2 still holds the original value)

// Primitive Type: String
let str1 = "Hello";
let str2 = str1; // Value of str1 is copied to str2

str1 = "World"; // Changing str1 does not affect str2

console.log(str1); // Output: "World"
console.log(str2); // Output: "Hello" (str2 still holds the original value)

// Reference Type: Array
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 holds a reference to the same array as arr1

arr1.push(4); // Modifying arr1 also affects arr2

console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4] (arr2 reflects the changes made to arr1)

// Reference Type: Object
let obj1 = { name: "John", age: 30 };
let obj2 = obj1; // obj2 holds a reference to the same object as obj1

obj1.age = 35; // Modifying obj1 also affects obj2

console.log(obj1); // Output: { name: "John", age: 35 }
console.log(obj2); // Output: { name: "John", age: 35 } (obj2 reflects the changes made to obj1)
