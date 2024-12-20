//! Function Declaration
function greet() {
  console.log("Hello there!");
}

//! Function Expression
const speak = function () {
  console.log("Good day!");
};

//! Arrow Function
const speakArrow = () => {
  console.log("Good day!");
};

//! Arguments & Parameters
const speak1 = function (name = "John", time = "night") {
  console.log(arguments);
  console.log(`Good ${time} ${name}`);
};

speak1("Mario", "morning");
speak1();

function sum(a, b) {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

//! The Rest Operator-Parameters
const sum1 = function (a, b, ...args) {
  console.log(args);
  let total = 0;
  for (let value of args) total += value;
  return total;
};

const sum2 = function (a, b, ...args) {
  return args.reduce((acc, curr) => acc + curr);
};

const sum3 = function (discount, ...prices) {
  const total = prices.reduce((acc, curr) => acc + curr);
  return total * (1 - discount);
};

//! The Spread Operator
const arr = [1, 2, 3, 4, 5];
console.log(sum2(...arr));

//! The Spread Operator-Objects
const person = { name: "John", age: 25 };
const clone = { ...person, location: "Canada" };

//! DEfault Parameters
const interest = function (principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
};

//! Getters & Setters
const person1 = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${person1.firstName} ${person1.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person1.fullName = "Mario Rossi";
console.log(person1.fullName);

//! Try & Catch
const convertToRs = (dollar) => {
  if (typeof dollar === "number") return dollar * 64;
  throw Error("Amount needs to be in number");
};

try {
  const myValue = convertToRs("five");
  console.log(myValue);
} catch (error) {
  console.log(error);
}

//! Local vs Global Scope
const message = "Hello";

function greet1() {
  const message = "Good day!";
  console.log(message);
}

greet1();
console.log(message);

//! Block Scope
if (true) {
  const message = "Good day!";
  console.log(message);
}

console.log(message);

//! Lexical Scope
function outer() {
  const message = "Good day!";

  function inner() {
    console.log(message);
  }

  return inner;
}

const func = outer();
func();

//! Closures
function outer1() {
  const message = "Good day!";

  function inner() {
    console.log(message);
  }

  return inner;
}

const func1 = outer1();
func1();

//! let vs var
// 1. let is block scoped
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

// 2. var is function scoped
for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

//! this Keyword

//! Method
const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.play();

//! Function
function playVideo() {
  console.log(this);
}

playVideo();



