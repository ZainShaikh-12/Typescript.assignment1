//Question 18
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Paris", "Tokyo", "New York", "Barcelona", "Sydney"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order (without modifying the original list):", __spreadArray([], placesToVisit, true).sort());
console.log("Still in original order:", placesToVisit);
console.log("Reverse alphabetical order (without modifying the original list):", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Still in original order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
console.log("Sorted in alphabetical order:", placesToVisit.sort());
console.log("Sorted in reverse alphabetical order:", placesToVisit.sort().reverse());
