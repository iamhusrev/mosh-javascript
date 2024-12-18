//Arrays

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let names = ["John", "Jane", "Jack", "Jill", "James"];
console.log(numbers);

//! Adding Elements
console.log("//! Adding Elements");
// End
numbers.push(11);
//Beginning
numbers.unshift(0);
//Middle
numbers.splice(5, 0, 5.5);
console.log(numbers);

//! Finding Elements
// Primitive Types
console.log("//! Finding Elements");
numbers.indexOf(5); // 5
console.log("", numbers.lastIndexOf("a")); // -1
console.log("", numbers.includes(5)); // true
numbers.lastIndexOf(5); // 5
numbers.includes(5); // true

// Reference Types
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const found = courses.find((course) => {
  return course.name === "a";
});

console.log(found);

//! Arrow Functions
console.log("//! Arrow Functions");
const square = (number) => number * number;
console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter((job) => job.isActive);
console.log(activeJobs);

//! Arrow Functions and this
console.log("//! Arrow Functions and this");
const person = {
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
};
person.talk();

//! Removing Elements
console.log("//! Removing Elements");
// End
const last = numbers.pop();
//Beginning
const first = numbers.shift();
//Middle
const middle = numbers.splice(2, 1);
console.log(numbers);

//! Emptying an Array
console.log("//! Emptying an Array");
let empty = numbers;
numbers = [];
console.log(numbers);
console.log(empty);

//! Combining and Slicing Arrays
console.log("//! Combining and Slicing Arrays");
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const combined = firstArray.concat(secondArray);
const slice = combined.slice(2, 4);
console.log(combined);
console.log(slice);

//! The Spread Operator
console.log("//! The Spread Operator");
const spread = [...firstArray, ...secondArray];
console.log(spread);

//! Iterating an Array
console.log("//! Iterating an Array");
for (let number of firstArray) console.log(number);
firstArray.forEach(function (number) {
  console.log(number);
});

firstArray.forEach((number) => console.log(number));
firstArray.forEach((number, index) => console.log(index, number));
firstArray.forEach((number, index) => console.log(index, number));

//! Joining Arrays
console.log("//! Joining Arrays");
const joined = firstArray.join(",");
console.log(joined);

//! Sorting Arrays
console.log("//! Sorting Arrays");
const nums = [-1, 1, 2, 3];
nums.sort();
console.log(nums);

nums.reverse();
console.log(nums);

const courses2 = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
];

courses2.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses2);

//! Testing the Elements of an Array
console.log("//! Testing the Elements of an Array");
const allPositive = nums.every(function (value) {
  return value >= 0;
});
console.log(allPositive);

const atLeastOnePositive = nums.some(function (value) {
  return value >= 0;
});
console.log(atLeastOnePositive);

//! Filtering an Array
console.log("//! Filtering an Array");
const filtered = nums.filter(function (value) {
  return value >= 0;
});
console.log(filtered);

//! Mapping an Array
console.log("//! Mapping an Array");
const items = filtered.map((value) => {
  "<li>" + value + "</li>";
});

const html = "<ul>" + items.join("") + "</ul>";
console.log(html);

//! Reducing an Array
console.log("//! Reducing an Array");
const sum = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

//! Exercise 1 - Array from Range
console.log("//! Exercise 1 - Array from Range");

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

const numbers2 = arrayFromRange(1, 4);
console.log(numbers2);

//! Exercise 2 - Includes
console.log("//! Exercise 2 - Includes");

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

console.log(includes(numbers2, 1));

//! Exercise 3 - Except
console.log("//! Exercise 3 - Except");

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}

const output = except(numbers2, [1, 2]);
console.log(output);

//! Exercise 4 - Moving an Element
console.log("//! Exercise 4 - Moving an Element");

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset.");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

const output2 = move(numbers2, 0, 1);
console.log(output2);

//! Exercise 5 - Count Occurrences
console.log("//! Exercise 5 - Count Occurrences");

function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}

const count = countOccurrences(numbers2, 1);
console.log(count);

//! Exercise 6 - Get Max
console.log("//! Exercise 6 - Get Max");

function getMax(array) {
  if (array.length === 0) return undefined;
  array.reduce((accumulator, current) => {
    return accumulator > current ? accumulator : current;
  });
}

const max = getMax(numbers2);
console.log(max);

//! Exercise 7 - Movies
console.log("//! Exercise 7 - Movies");

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
  { title: "d", year: 2017, rating: 4.5 },
];

const titles = movies
  .filter((movie) => movie.year === 2018 && movie.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((movie) => movie.title);

console.log(titles);
