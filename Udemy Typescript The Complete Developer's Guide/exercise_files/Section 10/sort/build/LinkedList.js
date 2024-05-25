"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        // NOTE LinkedList node comprises of data and the pointer adress - next Node if exists. If its the only node then the next is null.
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            // GUARD CLAUSE
            if (!this.head) {
                return 0;
            }
            // Get th efirst node on the chain
            var length = 1;
            var node = this.head;
            // As long as there is a next node
            while (node.next) {
                // Increment count by one
                length++;
                // And assign the current node as the enxt
                node = node.next;
            }
            // Return the total length when reached to null next pointer
            return length;
        },
        enumerable: false,
        configurable: true
    });
    // > ADDING TO LINKED LIST (@ THE END OF THE LINKEDLIST)
    LinkedList.prototype.append = function (data) {
        // Create a node from the array item and register the added data to the node object with head defaulting to null
        var node = new Node(data);
        // If there is no head, assign this node as a head entry and next is null by default @ Node class
        if (!this.head) {
            this.head = node;
            return;
        }
        // If there is a head already, assign tail as head and read thru its next pointer till you come across null. Node w/ next value null is the end node of the linked list
        var tail = this.head; //Refers to first node in the chain
        while (tail.next) {
            tail = tail.next; //Refers to the last node in the chain
        }
        // Add new node reference to the last node in the chain
        tail.next = node;
    };
    LinkedList.prototype.at = function (index) {
        // GUARD CLAUSE
        if (!this.head) {
            throw new Error('Index out of bound');
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index outof bounds');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        // GUARD CLAUSE
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    LinkedList.prototype.print = function () {
        // GUARD CLAUSE
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
