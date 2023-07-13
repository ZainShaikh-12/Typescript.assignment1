// Question 32
var current_users = ['john', 'emma', 'david', 'sarah', 'michael'];
var new_users = ['emma', 'alex', 'sophia', 'daniel', 'michael'];
var _loop_1 = function (new_username) {
    var lowercase_new_username = new_username.toLowerCase();
    if (current_users.some(function (username) { return username.toLowerCase() === lowercase_new_username; })) {
        console.log("Sorry, the username '".concat(new_username, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_username, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
