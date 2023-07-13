// Question 19
// Exercise 14: Guest List
let guestList: string[] = ["Osama", "Akbar", "Ahmed"];

for (let guest of guestList) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of good company and great conversation.`);
}

// Exercise 18: Seeing the World
let placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Barcelona", "Sydney"];

console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", [...placesToVisit].sort());
console.log("Still in original order:", placesToVisit);
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
console.log("Still in original order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
console.log("Sorted in alphabetical order:", placesToVisit.sort());
console.log("Sorted in reverse alphabetical order:", placesToVisit.sort().reverse());

// Exercise 19: Dinner Guests
console.log("Number of guests invited to dinner:", guestList.length);
