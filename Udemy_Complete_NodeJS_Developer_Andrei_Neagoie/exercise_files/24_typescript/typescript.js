// deno-lint-ignore-file
function sum(a, b) {
    return a + b;
}
sum(4, 5);
// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = "brown";
var favQuote = "I'm old, I'm only ".concat(age);
// Array
var pets = ["cat", "dog", "dino"];
var pets2 = ["lion", "lizzard", "leopard"];
// Object
var wizard = {
    a: "John",
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ["basketball", 5];
// basket = [5, "basketball"];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
console.log(sizeName);
var sizeNumber = Size.Small;
console.log(sizeNumber);
// Any - !!!!!! BE CAREFUL
var whatever = "ahghfhhdhd noooo";
whatever = true;
whatever = basket;
// void
var sing = function () {
    console.log("LA LA LA LA");
};
var sing2 = function () {
    console.log("LA LA LA LA");
    return "LALA";
};
// never
var error = function () {
    throw Error("oopppss");
};
var fightRobotArmy1 = function (robots) {
    console.log("FIGHT!");
};
// IN-PLACE NON-INTERFACE SYNTAX
var fightRobotArmy2 = function (robots) {
    console.log("FIGHT!");
};
var dog = {};
dog.count;
var cat = { count: 2, type: "Slender" };
// Function
var fightRobotArmy3 = function (robots) {
    console.log("FIGHT");
};
var fightRobotArmy4 = function (robots) {
    console.log("FIGHT!");
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    // private sing: string;
    // public sing: string;
    function Animal(sound) {
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal("Roooaaarrr!");
console.log(lion.greet());
console.log(lion.sing);
// Union
var confused = "hello";
// let confused: string | number = 5;
// let confused: string | number = true;
// Inferred type
var x = 4;
// x = "hello";
