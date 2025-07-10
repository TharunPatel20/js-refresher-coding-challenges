
const obj = {name: "John", age: 30, city: "New York"};
const {name, age, city} = obj;

console.log("Destructured values: ", name, age, city);

const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log("Destructured array values: ", first, second, rest);

const ar2 = [...rest, ...rest, obj];

console.log("Rest array after concatenation: ", ar2);

const power = (base, expo = 2) => Math.pow(base, expo);

console.log("Power of 5: ", power(9)); // 25
console.log("power(3,6): ", power(3,6)); //729


const nums = [1,2,3,4,5,6,7,8,9,10];

const modified = nums.map((num) => num * 2 );

console.log(nums, modified);
