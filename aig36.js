// Question 37
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and it will have the message \"").concat(message, "\" printed on it."));
}
// Make a large shirt with the default message
make_shirt();
// Make a medium shirt with the default message
make_shirt("medium");
// Make a small shirt with a custom message
make_shirt("small", "Hello World!");
