//Question 18

let placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Barcelona", "Sydney"];

console.log("Original order:", placesToVisit);

console.log("Alphabetical order (without modifying the original list):", [...placesToVisit].sort());

console.log("Still in original order:", placesToVisit);

console.log("Reverse alphabetical order (without modifying the original list):", [...placesToVisit].sort().reverse());

console.log("Still in original order:", placesToVisit);

placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

console.log("Sorted in alphabetical order:", placesToVisit.sort());

console.log("Sorted in reverse alphabetical order:", placesToVisit.sort().reverse());
