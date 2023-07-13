// Question 22

let numbers: number[] = [1, 2, 3];

// Intentional error: Trying to access an index that is out of bounds
console.log(numbers[3]); // This will produce an index error

// Correcting the error: Checking the length of the array before accessing an index
if (numbers.length > 3) {
  console.log(numbers[3]);
} else {
  console.log("Index error: Index 3 is out of bounds");
}
