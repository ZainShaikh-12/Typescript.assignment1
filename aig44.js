// Question 45
var createCar = function (manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
};
// Calling createCar with required information and additional options
var car1 = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
var car2 = createCar("Honda", "Accord", ["color", "red"], ["features", ["Navigation", "Sunroof"]]);
console.log(car1);
console.log(car2);
