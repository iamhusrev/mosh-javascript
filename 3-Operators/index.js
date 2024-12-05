// ! Operators

// 1. Arithmetic Operators
let a = 10;
let b = 20;

console.log("1 ->", a + b); // 30
console.log("2 ->", a - b); // -10
console.log("3 ->", a * b); // 200
console.log("4 ->", a / b); // 0.5
console.log("5 ->", a % b); // 10
console.log("6 ->", a ** b); // 100000000000000000000

let c = 10;
console.log("7 ->", c++); // 10
console.log("8 ->", c); // 11
console.log("9 ->", ++c); // 12
console.log("10 ->", c); // 12
console.log("11 ->", c--); // 12
console.log("12 ->", c); // 11
console.log("13 ->", --c); // 10
console.log("14 ->", c); // 10

// 2. Assignment Operators
let x = 10;

x += 5; // x = x + 5
console.log("15 ->", x); // 15
x -= 5; // x = x - 5
console.log("16 ->", x); // 10
x *= 5; // x = x * 5
console.log("17 ->", x); // 50
x /= 5; // x = x / 5
console.log("18 ->", x); // 10
x %= 5; // x = x % 5
console.log("19 ->", x); // 0
x **= 5; // x = x ** 5
console.log("20 ->", x); // 0

// 3. Comparison Operators
let y = 10;
let z = 20;
console.log("21 ->", y == z); // false
console.log("22 ->", y != z); // true
console.log("23 ->", y > z); // false
console.log("24 ->", y < z); // true
console.log("25 ->", y >= z); // false
console.log("26 ->", y <= z); // true
console.log("27 ->", y === z); // false

// 4. Logical Operators
let p = true;
let q = false;
console.log("28 ->", p && q); // false
console.log("29 ->", p || q); // true
console.log("30 ->", !p); // false

// 5. Bitwise Operators
let r = 2; // 10
let s = 3; // 11
console.log("31 ->", r & s); // 2
console.log("32 ->", r | s); // 3
console.log("33 ->", r ^ s); // 1
console.log("34 ->", ~r); // -3
console.log("35 ->", r << 1); // 4
console.log("36 ->", r >> 1); // 1
console.log("37 ->", r >>> 1); // 1

// 6. String Operators
let t = "Hello";
let u = "World";
console.log("38 ->", t + u); // HelloWorld
console.log("39 ->", (t += u)); // HelloWorld

// 7. Conditional (Ternary) Operator
let v = 10;
let w = 20;
let result = v > w ? "Greater" : "Smaller";
console.log("40 ->", result); // Smaller

// 8. Comma Operator
let aa = 10;
let bb = 20;
let cc = (aa++, bb++);
console.log("41 ->", cc); // 20

// 9. Unary Operators
let dd = 10;
let ee = -dd;
console.log("42 ->", ee); // -10

// 10. Relational Operators
let ff = 10;
let gg = 20;
console.log("43 ->", ff instanceof Number); // false
console.log("44 ->", ff instanceof Object); // false
console.log("45 ->", ff instanceof Function); // false
console.log("46 ->", ff instanceof Array); // false
console.log("47 ->", ff instanceof String); // false
console.log("48 ->", ff instanceof Boolean); // false
console.log("49 ->", ff instanceof RegExp); // false
console.log("50 ->", ff instanceof Date); // false
