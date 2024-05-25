"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        // BUBBLE SORT ALGORITHM
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // -> TYPE GUARD FOR ARRAY INPUT
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
                // -> TYPE GUARD FOR STRING INPUT
                if (typeof this.collection === 'string') {
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
console.log("'a'.charCodeAt(0) :", 'a'.charCodeAt(0));
console.log("'b'.charCodeAt(0) :", 'b'.charCodeAt(0));
console.log("'z'.charCodeAt(0) :", 'z'.charCodeAt(0));
console.log("'A'.charCodeAt(0) :", 'A'.charCodeAt(0));
console.log("'B'.charCodeAt(0) :", 'B'.charCodeAt(0));
console.log("'Z'.charCodeAt(0) :", 'Z'.charCodeAt(0));
