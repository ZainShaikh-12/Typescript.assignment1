// Question 24

let names = 'John';

console.log("Is the name equal to 'John'? I predict true.");
console.log(names === 'John');

console.log("Is the name not equal to 'Jane'? I predict true.");
console.log(names !== 'Jane');

let text = 'Hello World';

console.log("Is the lowercase of the text equal to 'hello world'? I predict true.");
console.log(text.toLowerCase() === 'hello world');

console.log("Is the lowercase of the text not equal to 'goodbye world'? I predict true.");
console.log(text.toLowerCase() !== 'goodbye world');

let x = 5;
let y = 10;

console.log("Is x equal to y? I predict false.");
console.log(x === y);

console.log("Is x not equal to y? I predict true.");
console.log(x !== y);

console.log("Is x greater than y? I predict false.");
console.log(x > y);

console.log("Is x less than or equal to y? I predict true.");
console.log(x <= y);

let a = true;
let b = false;

console.log("Is a true and b true? I predict false.");
console.log(a && b);

console.log("Is a true or b true? I predict true.");
console.log(a || b);

let fruits = ['apple', 'banana', 'orange'];

console.log("Is 'banana' in the fruits array? I predict true.");
console.log(fruits.indexOf('banana') !== -1);

console.log("Is 'grape' in the fruits array? I predict false.");
console.log(fruits.indexOf('grape') !== -1);

let animals = ['dog', 'cat', 'rabbit'];

console.log("Is 'elephant' not in the animals array? I predict true.");
console.log(animals.indexOf('elephant') === -1);

console.log("Is 'cat' not in the animals array? I predict false.");
console.log(animals.indexOf('cat') === -1);
