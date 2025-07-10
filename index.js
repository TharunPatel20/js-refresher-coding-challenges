import greet from "./src/question1.js";
import { isEven } from "./src/question2.js";
import { sumArray } from "./src/question3.js";
import getProperty from "./src/question4.js";
import { celsiusToFahrenheit } from "./src/question5.js";
import { findLarger } from "./src/question6.js";
import reverseString from "./src/question7.js";
import countVowels from "./src/question8.js";
import calculator from "./src/question9.js";
import { getFirstAndLast } from "./src/question10.js";


console.log("greet: ",greet("tharun"));

console.log("isEven(4): ",isEven(4)); // true
console.log("isEven(5): ",isEven(5)); // false

console.log("sumArray([1, 2, 3, 4, 5]): ",sumArray([1, 2, 3, 4, 5]));

console.log("getProperty: ",getProperty({ name: "John", age: 30 }, "age")); // John

console.log("celsiusToFahrenheit: ", celsiusToFahrenheit(40));

console.log("findLarger(10, 20): ", findLarger(10, 20));

console.log("reverseString(str): ", reverseString(greet("nuraht")));

console.log("countVowels(aeiouAEhOU): ", countVowels("aeiouAEhOU"));


console.log("calculator(10, 20, '+'): ", calculator(10, 20, "+"));
console.log("calculator(10, 20, '/'): ", calculator(10, 20, "/"));

console.log("getFirstAndLast([10, 20, 30, 40]):", getFirstAndLast([10, 20, 30, 40]));


