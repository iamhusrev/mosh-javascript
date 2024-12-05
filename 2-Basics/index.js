// This is my first javascript code!
let name = "Hüsrev";
let age = 30;
let isApproved = true;
let firstName = undefined;
let selectedColor = null;

function logType(variable) {
  console.log(typeof variable);
}

// logType(name);
// logType(age);
// logType(isApproved);
// logType(firstName);
// logType(selectedColor);

// ! Object
let person = {
  name: "Hüsrev",
  age: 30,
};

person.name = "John";
console.log(person.name);

person["name"] = "[name]";
console.log(person.name);

let selection = "name";
person[selection] = "Selection";
console.log(person.name);

// ! Arrays
let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
selectedColors[3] = 1;
console.log(selectedColors);
console.log(typeof selectedColors);

// ! Functions
function greet(name, lastName) { //!Parameters
  console.log("Hello " + name + " " + lastName);
}

greet("Hasan", "Beno"); //!Arguments
greet("Hüsrev");
greet();

// ? Types of Functions
// Performing a task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

// Calculating a value
function square(number) {
  return number * number;
}

console.log(square(2));