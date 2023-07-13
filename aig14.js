// Question 15
var guestList = ["Ahmed", "Akbar", "Osama"];
var guestNotAvailable = "Osama";
guestList = guestList.filter(function (guest) { return guest !== guestNotAvailable; });
var newGuest = "Humail";
guestList.push(newGuest);
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var person = guestList_1[_i];
    console.log("Dear ".concat(person, ", you are cordially invited to dinner. We would be honored to have your presence."));
}
