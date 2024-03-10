//CTRL+K TO EMPTY THE CONSOLE
//alert("Hello JS!") //gives an box popup on the website
console.log("this is first js code"); // statement used to print anything on the screen
var age=24; // Here, we declare a variable named 'age' and assign it the value of 24.
// we used var here to  indicate that this variable can be accessed anywhere within the function in which it was declared or outside the function and can be changed
console.log(age);//This will display the value of age 
age = age + 1;
console.log(age);//This will display the value of age after it's changed
//var is a keyword used to declare a variable in JavaScript. When a variable is declared with var, it can be reassigned and updated within the same function or block of code.
//const is a keyword used to declare a variable in JavaScript that cannot be reassigned or updated within the same function or block of code. Once a variable is declared with const, its value is fixed and cannot be changed.
var x = 10;
console.log(x); // Output: 10
x = 20;
console.log(x); // Output: 20

const y = {name: 'John'}; //this is another type of variable in javascript called object. In JavaScript, an object is a collection of properties, where each property is a key-value pair. 
//An object can be thought of as a container for storing and organizing data and functionality.
console.log(y); // Output: {name: 'John'}
y.name = 'Jane';
console.log(y); // Output: {name: 'Jane'}
//here, x is declared with var and can be reassigned. y is declared with const and its value is an object. Although the value of the object cannot be changed, the properties of the object can be updated.
// So, even though y is declared with const, the value of y.name can be changed from 'John' to 'Jane'.

//here where we use this "=" operator as ignment operator which means that whatever right side value comes in left side container then it will get replaced by the initial value of that for example: 
//if we say a=b then whatever value is in a will be given to b as well
let z = 5;
z += 3; // This line is equivalent to z = z + 3
console.log(z) // Output:  8
//this is an example of how we can use assignment operator


