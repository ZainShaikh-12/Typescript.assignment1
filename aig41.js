// Question 42
var show_magicians = function (magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
};
var make_great = function (magicians) {
    for (var magicianIndex in magicians) {
        magicians[magicianIndex] = "".concat(magicians[magicianIndex], " the Great");
    }
};
// Creating an array of magician names
var magicians = ["Harry Houdini", "David Blaine", "Penn & Teller"];
// Calling show_magicians() to print the original list of magicians
console.log("Original List:");
show_magicians(magicians);
// Modifying the array of magicians using make_great()
make_great(magicians);
// Calling show_magicians() again to see the modified list of magicians
console.log("Modified List:");
show_magicians(magicians);
