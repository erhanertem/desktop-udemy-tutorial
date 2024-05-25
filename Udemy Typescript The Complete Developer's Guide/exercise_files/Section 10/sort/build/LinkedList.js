"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.nextNode = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.currentNode = null;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.currentNode) {
                return 0;
            }
            var length = 1;
            var node = this.currentNode;
            while (node.nextNode) {
                length++;
                node = node.nextNode;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.add = function (data) {
        // Create a node from the array item
        var node = new Node(data);
        // If there is no head, assign this node as a head entry
        if (!this.currentNode) {
            this.currentNode = node;
            return;
        }
        // If there is a currentNode then assign existing currentNode as tail and assign this node as tail
        var tail = this.currentNode;
        while (tail.nextNode) {
            tail = tail.nextNode;
        }
        tail.nextNode = node;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
