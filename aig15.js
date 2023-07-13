// Question 16
var guestList = ["Akbar", "Osama", "Ahmed"];
console.log("Good news! We found a bigger dinner table!");
// Add one new guest to the beginning of the array
guestList.unshift("Annas");
// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Zaryab");
// Use append() to add one new guest to the end of the list
guestList.push("Humail");
// Print a new set of invitation messages
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var person = guestList_1[_i];
    console.log("Dear ".concat(person, ", you are cordially invited to dinner. We would be honored to have your presence."));
}
