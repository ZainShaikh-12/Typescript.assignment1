// Question 44
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    console.log("Bread: " + items[0]);
    console.log("Protein: " + items[1]);
    console.log("Toppings: " + items.slice(2).join(", "));
    console.log("Enjoy your sandwich!\n");
}
// Calling makeSandwich with different number of arguments
makeSandwich("Wheat", "Turkey", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("White", "Ham", "Cheese");
makeSandwich("Rye", "Chicken", "Mustard", "Pickles");
