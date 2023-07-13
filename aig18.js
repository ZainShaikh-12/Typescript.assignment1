var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 19
// Exercise 14: Guest List
var guestList = ["Osama", "Akbar", "Ahmed"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us for an evening of good company and great conversation."));
}
// Exercise 18: Seeing the World
var placesToVisit = ["Paris", "Tokyo", "New York", "Barcelona", "Sydney"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
console.log("Still in original order:", placesToVisit);
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Still in original order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
console.log("Sorted in alphabetical order:", placesToVisit.sort());
console.log("Sorted in reverse alphabetical order:", placesToVisit.sort().reverse());
// Exercise 19: Dinner Guests
console.log("Number of guests invited to dinner:", guestList.length);
