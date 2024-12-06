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


