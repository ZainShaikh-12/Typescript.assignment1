// Question 16

let guestList: string[] = ["Akbar", "Osama", "Ahmed"];

console.log("Good news! We found a bigger dinner table!");

// Add one new guest to the beginning of the array
guestList.unshift("Annas");

// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Zaryab");

// Use append() to add one new guest to the end of the list
guestList.push("Humail");

// Print a new set of invitation messages
for (let person of guestList) {
  console.log(`Dear ${person}, you are cordially invited to dinner. We would be honored to have your presence.`);
}