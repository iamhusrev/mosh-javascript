//! Objects

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,

  draw: function () {
    console.log("Objects -> draw1");
  },
};

//! Factory Functions
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Factory Functions -> draw2");
    },
  };
}

const circle2 = createCircle(1);
circle2.draw();

//! Constructor Functions
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Constructor Functions -> draw3");
  };

  return this;
}

const circle3 = new Circle(1);
circle3.draw();

//! Dynamic Nature of Objects
const circle4 = {
  radius: 1,
};

circle4.color = "yellow";
circle4.draw = function () {};

delete circle4.color;

//! Constructor Property
let x = {};
let y = new Object();
let z = new Circle(1);

console.log(x.constructor);
console.log(y.constructor);
console.log(z.constructor);

//! Functions are Objects
function Circle5(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Functions are Objects -> draw5");
  };
}

Circle5.call({}, 1); // => new Circle5(1);
Circle5.apply({}, [1]); // => new Circle5(1);

//! Value vs Reference Types
let number = 10;
function increase(number) {
  number++;
}

increase(number);
console.log("Value vs Reference Types ->", number);

let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
console.log("Value vs Reference Types ->", obj);

//! Enumerating Properties of an Object
const circle6 = {
  radius: 1,
  draw() {
    console.log("Enumerating Properties of an Object -> draw6");
  },
};

for (let key in circle6) {
  console.log("Enumerating Properties of an Object ->", key, circle6[key]);
}

// for (let key of circle6) {  -> TypeError: circle6 is not iterable
//   console.log(key);
// }

for (let key of Object.keys(circle6)) {
  console.log("Enumerating Properties of an Object ->", key);
}

for (let entry of Object.entries(circle6)) {
  console.log("Enumerating Properties of an Object ->", entry);
}

if ("radius" in circle6) {
  console.log("Enumerating Properties of an Object -> Circle has a radius");
}

//! Cloning an Object
const circle7 = {
  radius: 1,
  draw() {
    console.log("Cloning an Object -> draw7");
  },
};

//? Old way
const another = {};
for (let key in circle7) {
  another[key] = circle7[key];
}

//? New way
// const another2 = Object.assign({
//   color: "yellow",
//   draw() {
//     console.log("Cloning an Object -> draw7");
//   },
// }, circle7);
const another2 = Object.assign({}, circle7);
const another3 = { ...circle7 };

console.log("Cloning an Object ->", another);
console.log("Cloning an Object ->", another2);
console.log("Cloning an Object ->", another3);

//! Garbage Collection
let circle8 = {};
circle8 = null;

//! Math

//! String
const message = "This is my first message";
const anotherMessage = new String("Hi");

console.log("String ->", message.length);
console.log("String ->", message[0]);

//! Template Literals
const name = "John";
const anotherMessage2 = `Hi ${name}, //? Template Literals -> buraya nasil yazdiysan o şekilde çıkar
Thank you for joining my mailing list.Regards,Mosh`;
console.log("Template Literals ->", anotherMessage2);

const anotherMessage3 = `Hi ${name}, ${4 + 4}
Thank you for joining my mailing list.
Regards,
Mosh`;

console.log("Template Literals ->", anotherMessage3);

//! Date
const now = new Date();
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);

//! Exercise 1 - Address Object

const address = {
  street: "a",
  city: "b",
  zipCode: "c",
};

function showAddress(address) {
  for (let key in address) {
    console.log("Exercise 1 ->", key, address[key]);
  }
}

showAddress(address);

//! Exercise 2 - Factory and Constructor Functions

// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const address2 = createAddress("a", "b", "c");
console.log("Exercise 2 ->", address2);

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address3 = new Address("a", "b", "c");
console.log("Exercise 2 ->", address3);

//! Exercise 3 - Object Equality
let address4 = new Address("a", "b", "c");
let address5 = new Address("a", "b", "c");

function areEqual(address4, address5) {
  return (
    address4.street === address5.street &&
    address4.city === address5.city &&
    address4.zipCode === address5.zipCode
  );
}

function areSame(address4, address5) {
  return address4 === address5;
}

console.log("Are Equal -> ", areEqual(address4, address5));
console.log("Are Same -> ", areSame(address4, address5));

//! Exercise 4 - Blog Post Object
let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    { author: "d", body: "e" },
    { author: "f", body: "g" },
  ],
  isLive: true,
};

console.log("Exercise 4 ->", post);

//! Exercise 5 - Constructor Functions
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let post2 = new Post("a", "b", "c");
console.log("Exercise 5 ->", post2);

//! Exercise 6 - Price Range Object

let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [
  { averagePerPerson: 5 },
  { averagePerPerson: 12 },
  { averagePerPerson: 25 },
];

let priceRange = priceRanges.find(function (priceRange) {
  return (
    restaurants[0].averagePerPerson >= priceRange.minPerPerson &&
    restaurants[0].averagePerPerson <= priceRange.maxPerPerson
  );
});

console.log("Exercise 6 ->", priceRange);