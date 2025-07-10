import assert from 'assert';
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

console.log("Running test cases...\n");

// question1.js
assert.strictEqual(greet("tharun"), "Hello, tharun!");

// question2.js
assert.strictEqual(isEven(4), true);
assert.strictEqual(isEven(5), false);

// question3.js
assert.strictEqual(sumArray([1, 2, 3, 4, 5]), 15);

// question4.js
assert.strictEqual(getProperty({ name: "John", age: 30 }, "age"), 30);

// question5.js
assert.strictEqual(celsiusToFahrenheit(40), 104);

// question6.js
assert.strictEqual(findLarger(10, 20), 20);
assert.strictEqual(findLarger(50, 20), 50);

// question7.js
assert.strictEqual(reverseString("hello"), "olleh");
assert.strictEqual(reverseString(greet("nuraht")), "!tharun ,olleH");

// question8.js
assert.strictEqual(countVowels("aeiouAEhOU"), 9);

// question9.js
assert.strictEqual(calculator(10, 20, "+"), 30);
assert.strictEqual(calculator(10, 20, "/"), 0.5);

// question10.js
assert.deepStrictEqual(getFirstAndLast([10, 20, 30, 40]), [10, 40]);

console.log("✅ All test cases passed!");


