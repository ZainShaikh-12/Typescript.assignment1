var names = "ShaiKh SahAaB";
var toTitleCase = function (str) {
    return str.toLowerCase().replace(/\b\w+/g, function (match) {
        return match.charAt(0).toUpperCase() + match.slice(1);
    });
};
var setword = toTitleCase(names);
console.log(names.toLowerCase());
console.log(names.toUpperCase());
console.log(setword);
