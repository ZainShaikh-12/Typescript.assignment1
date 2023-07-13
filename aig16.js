// Question 17
var guestList = [
    "Osama",
    "Akbar",
    "Ahmed",
    "Zaryab",
    "Humail",
    "Annas"
];
console.log("Attention: Due to unforeseen circumstances, the dinner table won't arrive in time. We can only invite two people for dinner.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", but we can't invite you to dinner."));
}
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var person = guestList_1[_i];
    console.log("Dear ".concat(person, ", you're still invited to dinner. We look forward to having your company."));
}
guestList = [];
console.log("Guest list is now empty:", guestList);
