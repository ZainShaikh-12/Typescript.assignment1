// Question 43
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var show_magicians = function (magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
};
var make_great = function (magicians) {
    var modifiedMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        modifiedMagicians.push("".concat(magician, " the Great"));
    }
    return modifiedMagicians;
};
// Creating an array of magician names
var magicians = ["Harry Houdini", "David Blaine", "Penn & Teller"];
// Calling make_great() with a copy of the magicians array
var modifiedMagicians = make_great(__spreadArray([], magicians, true));
// Calling show_magicians() with the original and modified arrays
console.log("Original List:");
show_magicians(magicians);
console.log("Modified List:");
show_magicians(modifiedMagicians);
